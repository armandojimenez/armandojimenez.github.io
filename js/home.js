/* armandojimenez.dev — home interactions (vanilla, no dependencies) */
(function () {
    'use strict';

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* Header state: hairline on scroll, plus the handoff. The hero name and the
       memoji each rise into the bar once their large versions pass beneath it. */
    var head = document.querySelector('.site-head');
    var heroTitle = document.querySelector('.hero h1');
    var peekImg = document.querySelector('.peek-btn img');
    var ticking = false;
    var updateHead = function () {
        var headH = head.offsetHeight;
        head.classList.toggle('scrolled', window.scrollY > 8);
        if (heroTitle) {
            head.classList.toggle('show-name', heroTitle.getBoundingClientRect().bottom <= headH + 24);
        }
        if (peekImg) {
            head.classList.toggle('show-memoji', peekImg.getBoundingClientRect().bottom <= headH);
        }
    };
    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                updateHead();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
    updateHead();

    /* Scroll reveals + memoji peek (once, gently) */
    var revealables = document.querySelectorAll('.r');
    var peek = document.querySelector('.peek');

    if (reduceMotion || !('IntersectionObserver' in window)) {
        revealables.forEach(function (el) { el.classList.add('in'); });
        if (peek) peek.classList.add('in');
    } else {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                var el = entry.target;
                if (el.classList.contains('r')) {
                    /* stagger siblings that arrive in the same batch */
                    el.style.transitionDelay = (el.dataset.d || 0) + 'ms';
                }
                el.classList.add('in');
                io.unobserve(el);
            });
        }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });

        /* pre-assign small stagger delays within each parent */
        document.querySelectorAll('.app-grid, .jobs, .skills-list').forEach(function (group) {
            Array.prototype.forEach.call(group.querySelectorAll('.r'), function (el, i) {
                el.dataset.d = Math.min(i % 8, 7) * 45;
            });
        });

        revealables.forEach(function (el) { io.observe(el); });
        if (peek) io.observe(peek);
    }

    /* Memoji easter egg: tap → he ducks behind the rule, then pops back up */
    var peekBtn = document.getElementById('peek');
    if (peekBtn && peek && !reduceMotion) {
        var ducking = false;
        peekBtn.addEventListener('click', function () {
            if (ducking || !peek.classList.contains('in')) return;
            ducking = true;
            peek.classList.add('duck');
            window.setTimeout(function () {
                peek.classList.remove('duck');
                window.setTimeout(function () { ducking = false; }, 900);
            }, 420);
        });
    }

    /* Copy email (labels come from data attributes so the ES page can localize) */
    var copyBtn = document.getElementById('copy-email');
    if (copyBtn) {
        var idleLabel = copyBtn.textContent;
        var copiedLabel = copyBtn.dataset.copied || 'Copied ✓';
        copyBtn.addEventListener('click', function () {
            var email = copyBtn.dataset.email;
            var done = function () {
                copyBtn.textContent = copiedLabel;
                copyBtn.classList.add('copied');
                window.setTimeout(function () {
                    copyBtn.textContent = idleLabel;
                    copyBtn.classList.remove('copied');
                }, 2000);
            };
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(email).then(done);
            } else {
                var ta = document.createElement('textarea');
                ta.value = email;
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                document.body.removeChild(ta);
                done();
            }
        });
    }
})();
