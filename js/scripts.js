
(function($) {

    // Remove no-js class
    $('html').removeClass('no-js');

    // Animate to section when nav is clicked
    $('header a').click(function(e) {

        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Scroll to top
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Scroll to first element
    $('#lead-down span').click(function() {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    // Create timeline
    $('#experience-timeline').each(function() {

        var $this = $(this); // Store reference to this
        var $userContent = $this.children('div'); // user content

        // Create each timeline block
        $userContent.each(function() {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });

        // Add icons to each block
        $this.find('.vtimeline-point').each(function() {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });

        // Add dates to the timeline if exists
        $this.find('.vtimeline-content').each(function() {
            var date = $(this).data('date');
            if (date) { // Prepend if exists
                $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
            }
        });

    });

    // Open mobile menu
    $('#mobile-menu-open').click(function() {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function() {
        $('header, body').removeClass('active');
    });

    // Load additional projects
    $('#view-more-projects').click(function(e){
        e.preventDefault();
        $(this).fadeOut(300, function() {
            $('#more-projects').fadeIn(300);
        });
    });

    // Mouse interaction for lead section - spotlight effect
    var $spotlight = null;

    $('#lead').mousemove(function(e) {
        var $lead = $(this);
        var $overlay = $lead.find('#lead-overlay');
        var offset = $lead.offset();
        var width = $lead.width();
        var height = $lead.height();

        // Calculate mouse position relative to the lead element
        var x = e.pageX - offset.left;
        var y = e.pageY - offset.top;

        // Create color based on mouse position for the spotlight
        var hue = (x / width) * 360; // Full color spectrum based on horizontal position
        var saturation = 40 + ((y / height) * 30); // 40-70% saturation
        var lightness = 25 + ((y / height) * 20); // 25-45% lightness

        // Create spotlight element if it doesn't exist
        if (!$spotlight) {
            $spotlight = $('<div class="spotlight"></div>');
            $spotlight.css({
                'position': 'absolute',
                'top': '0',
                'left': '0',
                'width': '100%',
                'height': '100%',
                'pointer-events': 'none',
                'z-index': '15', // Higher than lead-content (z-index: 10)
                'background': 'radial-gradient(circle 150px at ' + (x / width * 100) + '% ' + (y / height * 100) + '%, rgba(0, 0, 0, 0.6) 0%, transparent 70%)',
                'transition': 'none'
            });
            $overlay.append($spotlight);
        } else {
            // Update existing spotlight position and color
            $spotlight.css({
                'background': 'radial-gradient(circle 150px at ' + (x / width * 100) + '% ' + (y / height * 100) + '%, rgba(0, 0, 0, 0.6) 0%, transparent 70%)'
            });
        }
    });

    // Remove spotlight when mouse leaves
    $('#lead').mouseleave(function() {
        if ($spotlight) {
            $spotlight.fadeOut(500, function() {
                $(this).remove();
                $spotlight = null;
            });
        }
    });

})(jQuery);
