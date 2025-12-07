
(function ($) {

    // Remove no-js class
    $('html').removeClass('no-js');

    // Page loading animation
    $(window).on('load', function () {
        $('body').addClass('loaded');
    });

    // Theme Toggle Functionality
    const themeToggle = $('#theme-toggle');
    const body = $('body');
    const themeIcon = themeToggle.find('i');

    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.attr('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    // Theme toggle click handler
    themeToggle.on('click', function () {
        const currentTheme = body.attr('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        body.attr('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);

        // Update aria-pressed for accessibility
        themeToggle.attr('aria-pressed', newTheme === 'dark' ? 'true' : 'false');

        // Add animation class
        body.css('transition', 'background-color 0.3s ease, color 0.3s ease');
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.removeClass('fa-sun-o').addClass('fa-moon-o');
            themeToggle.attr('aria-label', 'Toggle to light mode');
        } else {
            themeIcon.removeClass('fa-moon-o').addClass('fa-sun-o');
            themeToggle.attr('aria-label', 'Toggle to dark mode');
        }
    }

    // Animate to section when nav is clicked
    $('header a').click(function (e) {

        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 800);

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Scroll to top
    $('#to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    // Scroll to first element
    $('#lead-down span').click(function () {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 800);
    });

    // Create timeline
    $('#experience-timeline').each(function () {

        var $this = $(this); // Store reference to this
        var $userContent = $this.children('div'); // user content

        // Create each timeline block
        $userContent.each(function () {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });

        // Add icons to each block
        $this.find('.vtimeline-point').each(function () {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });

        // Add dates to the timeline if exists
        $this.find('.vtimeline-content').each(function () {
            var date = $(this).data('date');
            if (date) { // Prepend if exists
                $(this).parent().prepend('<span class="vtimeline-date">' + date + '</span>');
            }
        });

    });

    // Open mobile menu
    $('#mobile-menu-open').click(function () {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function () {
        $('header, body').removeClass('active');
    });

    // Load additional projects
    $('#view-more-projects').click(function (e) {
        e.preventDefault();
        $(this).fadeOut(300, function () {
            $('#more-projects').fadeIn(300);
        });
    });

    // Old parallax code removed to prevent conflict with Antigravity engine


    // On resize, ensure transforms are reset when below threshold or hover unsupported
    // On resize
    $(window).on('resize', function () {
        // Re-run scroll animations to adjust triggers
        animateOnScroll();
    });

    // Enhanced scroll-triggered animations with staggered timeline effects
    function animateOnScroll() {
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();

        // Animate timeline elements with stagger effect
        $('.vtimeline-point').each(function (index) {
            var elementTop = $(this).offset().top;
            var triggerPoint = scrollTop + windowHeight - 100;

            if (elementTop < triggerPoint) {
                var $icon = $(this).find('.vtimeline-icon');
                var $content = $(this).find('.vtimeline-content');
                var $date = $(this).find('.vtimeline-date');

                if (!$icon.hasClass('animated')) {
                    setTimeout(function () {
                        $date.addClass('animated');
                    }, index * 100);

                    setTimeout(function () {
                        $icon.addClass('animated');
                    }, index * 100 + 150);

                    setTimeout(function () {
                        $content.addClass('animated');
                    }, index * 100 + 300);
                }
            }
        })

        // Animate education blocks
        $('.education-block').each(function (index) {
            var elementTop = $(this).offset().top;
            var triggerPoint = scrollTop + windowHeight - 100;

            if (elementTop < triggerPoint && !$(this).hasClass('animated')) {
                var $this = $(this);
                setTimeout(function () {
                    $this.addClass('animated');
                }, index * 150);
            }
        });

        // Animate project cards
        $('.project').each(function (index) {
            var elementTop = $(this).offset().top;
            var triggerPoint = scrollTop + windowHeight - 100;

            if (elementTop < triggerPoint && !$(this).hasClass('animated')) {
                var $this = $(this);
                setTimeout(function () {
                    $this.addClass('animated');
                }, index * 120);
            }
        });

        // Animate optional sections
        $('.optional-section-block').each(function (index) {
            var elementTop = $(this).offset().top;
            var triggerPoint = scrollTop + windowHeight - 100;

            if (elementTop < triggerPoint && !$(this).hasClass('animated')) {
                var $this = $(this);
                setTimeout(function () {
                    $this.addClass('animated');
                }, index * 150);
            }
        });
    }

    // Run on scroll with throttling for performance
    var scrollTimeout;
    $(window).on('scroll', function () {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function () {
                animateOnScroll();
                scrollTimeout = null;
            }, 15);
        }
    });

    // Run once on page load
    $(document).ready(function () {
        setTimeout(animateOnScroll, 100);
    });

    // --- About image interactive invert behavior (hover, focus, keyboard & touch accessible)
    (function () {
        var $me = $('#me');
        var $about = $('#about');

        if (!$me.length || !$about.length) return;

        // Wrap the image in a container so we can animate the tile (background,
        // border-radius, shadow) independently from the <img> itself. This
        // prevents the rounded-corners from being lost when the image is
        // transformed (scaling) and lets us keep smooth clipping.
        if (!$me.parent().hasClass('img-wrap')) {
            $me.wrap('<div class="img-wrap img-thumbnail"></div>');
            $me.removeClass('img-thumbnail');
        }

        var $wrap = $me.parent();

        // Make image focusable and expose as a control for assistive tech
        $wrap.attr('role', 'button');
        $wrap.attr('tabindex', 0);
        $wrap.attr('aria-pressed', 'false');
        $wrap.attr('aria-label', 'Toggle about section invert');

        function enableInvert() {
            $about.addClass('invert-mode');
            $wrap.attr('aria-pressed', 'true');
        }

        function disableInvert() {
            $about.removeClass('invert-mode');
            $wrap.attr('aria-pressed', 'false');
        }

        // Detect true hover-capable devices
        var supportsHover = (window.matchMedia && window.matchMedia('(hover: hover)').matches);

        function bindHoverIfNeeded() {
            var shouldBind = supportsHover && $(window).width() >= 993;
            var bound = !!$wrap.data('hoverBound');

            if (shouldBind && !bound) {
                $wrap.on('mouseenter.aboutHover', function () {
                    enableInvert();
                });

                $wrap.on('mouseleave.aboutHover', function () {
                    disableInvert();
                });
                $wrap.data('hoverBound', true);
            } else if (!shouldBind && bound) {
                $wrap.off('.aboutHover');
                $wrap.data('hoverBound', false);
            }
        }

        // Initial bind
        bindHoverIfNeeded();

        // Recalculate on resize to avoid stale bindings when crossing breakpoints
        $(window).on('resize.aboutHover', function () {
            bindHoverIfNeeded();
        });

        // Focus interactions
        $wrap.on('focus', function () {
            enableInvert();
        });

        $wrap.on('blur', function () {
            disableInvert();
        });

        // Click / touch toggles invert for touch users — explicit enable/disable
        $wrap.on('click', function (e) {
            e.preventDefault();
            if ($about.hasClass('invert-mode')) {
                disableInvert();
            } else {
                enableInvert();
            }
        });

        // Keyboard activation (Enter / Space)
        $wrap.on('keydown', function (e) {
            var k = e.key || e.keyCode;
            if (k === 'Enter' || k === ' ' || k === 'Spacebar' || k === 13 || k === 32) {
                e.preventDefault();
                if ($about.hasClass('invert-mode')) {
                    disableInvert();
                } else {
                    enableInvert();
                }
            }
        });
    })();

    // --- About image interactive invert behavior (hover, focus, keyboard & touch accessible)
    (function () {
        var $me = $('#me');
        var $about = $('#about');

        if (!$me.length || !$about.length) return;

        // Make image focusable and expose as a control for assistive tech
        $me.attr('role', 'button');
        $me.attr('tabindex', 0);
        $me.attr('aria-pressed', 'false');
        $me.attr('aria-label', 'Toggle about section invert');

        function enableInvert() {
            $about.addClass('invert-mode');
            $me.attr('aria-pressed', 'true');
        }

        function disableInvert() {
            $about.removeClass('invert-mode');
            $me.attr('aria-pressed', 'false');
        }

        // Mouse interactions: only bind hover when device actually supports hover
        // and when the layout is wide enough. This avoids touch devices (and
        // small viewports) receiving synthetic mouse events that cause
        // flickering between states.
        var supportsHover = (window.matchMedia && window.matchMedia('(hover: hover)').matches);

        function bindHoverIfNeeded() {
            var shouldBind = supportsHover && $(window).width() >= 993;
            var bound = !!$me.data('hoverBound');

            if (shouldBind && !bound) {
                $me.on('mouseenter.aboutHover', function () {
                    enableInvert();
                });

                $me.on('mouseleave.aboutHover', function () {
                    disableInvert();
                });
                $me.data('hoverBound', true);
            } else if (!shouldBind && bound) {
                $me.off('.aboutHover');
                $me.data('hoverBound', false);
            }
        }

        // Initial bind state
        bindHoverIfNeeded();

        // Recalculate on resize to avoid stale hover bindings
        $(window).on('resize.aboutHover', function () {
            bindHoverIfNeeded();
        });

        // Keyboard focus interactions
        $me.on('focus', function () {
            enableInvert();
        });

        $me.on('blur', function () {
            disableInvert();
        });

        // Click / touch toggles invert for touch users
        $me.on('click', function (e) {
            e.preventDefault();
            // Toggle state explicitly so the visual state and aria state stay
            // consistent across input types.
            if ($about.hasClass('invert-mode')) {
                disableInvert();
            } else {
                enableInvert();
            }
        });

        // Keyboard activation (Enter / Space)
        $me.on('keydown', function (e) {
            var k = e.key || e.keyCode;
            if (k === 'Enter' || k === ' ' || k === 'Spacebar' || k === 13 || k === 32) {
                e.preventDefault();
                $about.toggleClass('invert-mode');
                var pressed = $about.hasClass('invert-mode');
                $me.attr('aria-pressed', pressed ? 'true' : 'false');
            }
        });
    })();

    // Lead Background Animation - Antigravity Enhanced
    function initLeadBackground() {
        const $container = $('#lead-background-shapes');
        const $leadContent = $('#lead-content');
        if (!$container.length) return;

        const icons = [
            'fa-code', 'fa-terminal', 'fa-laptop', 'fa-mobile', 'fa-database', 'fa-server',
            'fa-bug', 'fa-keyboard-o', 'fa-gamepad', 'fa-headphones', 'fa-coffee', 'fa-heart',
            'fa-star', 'fa-cloud', 'fa-wifi', 'fa-lock', 'fa-shield', 'fa-html5', 'fa-css3',
            'fa-linux', 'fa-apple', 'fa-android', 'fa-windows', 'fa-chrome', 'fa-firefox',
            'fa-git', 'fa-github', 'fa-cogs', 'fa-rocket', 'fa-bolt', 'fa-magic',
            'fa-microchip', 'fa-usb', 'fa-bluetooth', 'fa-battery-full'
        ];

        // Physics Constants - SUPERCHARGED
        const MOUSE_RADIUS = 400; // Larger radius
        const MOUSE_STRENGTH = 2.5; // Stronger push
        const CONTENT_MOUSE_STRENGTH = 1.0; // Text moves too
        const FRICTION = 0.90; // Less sliding, more control
        const SPRING = 0.03; // Looser spring, more float
        const FLOAT_SPEED = 0.015;

        let shapes = [];
        let width = $container.width();
        let height = $container.height();

        // Track mouse relative to VIEWPORT to handle scrolling correctly
        // But for calculation we need relative to container
        let mouseX = -10000;
        let mouseY = -10000;

        // Content Physics State
        const contentState = {
            x: 0, y: 0,
            vx: 0, vy: 0,
            ox: 0, oy: 0 // Original offset handled by CSS translate(-50%, -50%)
        };

        // Grid configuration
        const COLS = 8;
        const ROWS = 6;

        function createShapes() {
            $container.empty();
            shapes = [];
            width = $container.width();
            height = $container.height();

            const cellW = width / COLS;
            const cellH = height / ROWS;

            let iconDeck = [];
            while (iconDeck.length < COLS * ROWS) {
                const batch = [...icons].sort(() => 0.5 - Math.random());
                iconDeck = iconDeck.concat(batch);
            }

            let iconIdx = 0;

            for (let r = 0; r < ROWS; r++) {
                for (let c = 0; c < COLS; c++) {
                    const cx = (c + 0.5) * cellW;
                    const cy = (r + 0.5) * cellH;

                    const offsetX = (Math.random() - 0.5) * cellW * 0.8;
                    const offsetY = (Math.random() - 0.5) * cellH * 0.8;

                    const x = cx + offsetX;
                    const y = cy + offsetY;

                    const size = 1.2 + Math.random() * 1.8;

                    const iconClass = iconDeck[iconIdx++];
                    const $shape = $('<i class="shape fa ' + iconClass + '"></i>');

                    const rotation = Math.random() * 360;

                    // HIGHER OPACITY for visibility
                    const opacity = 0.2 + Math.random() * 0.3; // 0.2 to 0.5

                    $shape.css({
                        fontSize: size + 'rem',
                        opacity: opacity,
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        color: 'rgba(99, 102, 241, ' + opacity + ')' // Force color with opacity
                    });

                    $container.append($shape);

                    shapes.push({
                        el: $shape[0],
                        x: x, y: y,
                        vx: 0, vy: 0,
                        ox: x, oy: y,
                        rotation: rotation,
                        vr: (Math.random() - 0.5) * 0.5,
                        floatOffset: Math.random() * 100
                    });
                }
            }
        }

        // Updated Mouse Tracker - Robust
        const $lead = $('#lead');
        $lead.on('mousemove touchmove', function (e) {
            const offset = $lead.offset();
            const evt = e.originalEvent || e;

            let pageX = evt.pageX;
            let pageY = evt.pageY;

            if (evt.touches && evt.touches.length) {
                pageX = evt.touches[0].pageX;
                pageY = evt.touches[0].pageY;
            }

            // Relative to container
            mouseX = pageX - offset.left;
            mouseY = pageY - offset.top;
        });

        $lead.on('mouseleave touchend', function () {
            mouseX = -10000;
            mouseY = -10000;
        });

        let resizeTimer;
        $(window).on('resize', function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(createShapes, 200);
        });

        // Animation Loop
        let frame = 0;
        function animate() {
            frame++;

            // --- 1. Background Shapes Physics ---
            shapes.forEach(shape => {
                const floatX = Math.sin((frame * FLOAT_SPEED) + shape.floatOffset) * 15;
                const floatY = Math.cos((frame * FLOAT_SPEED) + shape.floatOffset) * 15;
                const homeX = shape.ox + floatX;
                const homeY = shape.oy + floatY;

                const dx = shape.x - mouseX;
                const dy = shape.y - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Repulsion
                if (dist < MOUSE_RADIUS) {
                    const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
                    const angle = Math.atan2(dy, dx);
                    // Power curve: force^2 for stronger punch near center
                    const power = force * force * MOUSE_STRENGTH * 30;

                    shape.vx += Math.cos(angle) * power;
                    shape.vy += Math.sin(angle) * power;
                }

                // Spring back
                const hdx = homeX - shape.x;
                const hdy = homeY - shape.y;
                shape.vx += hdx * SPRING;
                shape.vy += hdy * SPRING;

                // Friction
                shape.vx *= FRICTION;
                shape.vy *= FRICTION;

                // Apply
                shape.x += shape.vx;
                shape.y += shape.vy;
                shape.rotation += shape.vr + (shape.vx * 0.3);

                shape.el.style.transform = `translate3d(${shape.x}px, ${shape.y}px, 0) rotate(${shape.rotation}deg)`;
            });

            // --- 2. Lead Content (Text) Parallax ---
            // User requested NO repulsion for text (accessibility/usability)
            // Instead, a subtle parallax effect (depth)

            // Mouse relative to CENTER of container
            const cx = width / 2;
            const cy = height / 2;

            // If mouse is off screen, drift back to center
            let targetX = 0;
            let targetY = 0;

            if (mouseX > -5000) {
                // Mouse is active
                // Parallax factor: 0.02 means it moves 2% of the distance the mouse is from center
                // Moving opposite to mouse = depth (far away)
                // Moving with mouse = foreground (close)
                // Let's make it float slightly WITH the mouse like it's in the foreground 3D space
                const parallaxStrength = 0.03;
                targetX = (mouseX - cx) * parallaxStrength;
                targetY = (mouseY - cy) * parallaxStrength;
            }

            // Lerp towards target for smoothness
            contentState.x += (targetX - contentState.x) * 0.1;
            contentState.y += (targetY - contentState.y) * 0.1;

            // Apply to #lead-content
            // CSS transform: translate(-50%, -50%) must be preserved. We add our parallax offset.
            $leadContent[0].style.transform = `translate(calc(-50% + ${contentState.x}px), calc(-50% + ${contentState.y}px))`;

            requestAnimationFrame(animate);
        }

        createShapes();
        animate();
    }

    initLeadBackground();

})(jQuery);

/*
    -----------------------------
    ----- New Features Logic -----
    -----------------------------
*/
(function ($) {

    // 1. Magic Button - Confetti & Fun
    $('#magic-button').on('click', function () {
        // Confetti explosion
        var count = 200;
        var defaults = {
            origin: { y: 0.7 }
        };

        function fire(particleRatio, opts) {
            confetti(Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio)
            }));
        }

        fire(0.25, { spread: 26, startVelocity: 55 });
        fire(0.2, { spread: 60 });
        fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
        fire(0.1, { spread: 120, startVelocity: 45 });

        // Add a temporary "pop" effect to the button
        $(this).addClass('active');
        setTimeout(() => $(this).removeClass('active'), 200);
    });

})(jQuery);
