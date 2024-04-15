
(function () {

    $(document).on('mousedown touchstart', '.core_container', function (e) {
        gesture_swipe_x_fadeOut(0);
    })

    var slidersContainer = document.querySelector('.core_sliders_container');

    // Initializing the numbers slider
    var msNumbers = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'core_numbers',
        range: [1, 7],
        rangeContent: function (i) {
            return '0' + i;
        },
        style: {
            transform: [{ scale: [0.4, 1] }],
            opacity: [0, 1]
        },
        interactive: false
    });

    // Initializing the titles slider
    var titles = [
        'Find a Church',
        'Hear the Gospel',
        'First Steps',
        'Prayer Requests',
        'Good Preachers',
        'Street Preaching',
        'See Menu'
    ];
    var urls = [
        'Desktop Pages/Connect/church_d.html',
        'Desktop Pages/Evangelism/gospel_d.html',
        'Desktop Pages/Discipleship/seeking_d.html',
        'Desktop Pages/Prayer/request_d.html',
        'Desktop Pages/Evangelism/preachers_d.html',
        'Desktop Pages/Evangelism/street_d.html',
        '#'
    ];
    var link_name = [
        'Find',
        'Hear',
        'Start',
        'Request',
        'Listen',
        'Watch',
        ''
    ];

    var msTitles = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'core_titles',
        range: [0, 6],
        rangeContent: function (i) {
            return '<h3 style="font-size:75px">' + titles[i] + '</h3>';
        },
        vertical: true,
        reverse: true,
        style: {
            opacity: [0, 1]
        },
        interactive: false
    });

    // Initializing the links slider
    var msLinks = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'core_links',
        range: [0, 6],
        rangeContent: function (index) {
            // Define an array of URLs corresponding to each slide


            // Return the link with the appropriate URL based on the index
            return '<a id="pulse-link" class="core_slide_link" href="' + urls[index] + '">' + link_name[index] + '</a>';
        },
        vertical: true,
        interactive: false
    });

    // Get core_pagination items
    var core_pagination = document.querySelector('.core_pagination');
    var core_paginationItems = [].slice.call(core_pagination.children);

    // Initializing the images slider
    var msImages = new MomentumSlider({
        // Element to append the slider
        el: slidersContainer,
        // CSS class to reference the slider
        cssClass: 'core_images',
        // Generate the 4 slides required
        range: [0, 6],
        rangeContent: function () {
            return '<div class="core_slide_image-container"><div class="core_slide_image"></div></div>';
        },
        // Syncronize the other sliders
        sync: [msNumbers, msTitles, msLinks],
        // Styles to interpolate as we move the slider
        style: {
            '.core_slide_image': {
                transform: [{ scale: [1.5, 1] }]
            }
        },
        // Update core_pagination if slider change
        change: function (newIndex, oldIndex) {
            if (typeof oldIndex !== 'undefined') {
                core_paginationItems[oldIndex].classList.remove('core_pagination_item--active');
            }
            core_paginationItems[newIndex].classList.add('core_pagination_item--active');
        }
    });

    // Select corresponding slider item when a core_pagination button is clicked
    core_pagination.addEventListener('click', function (e) {
        if (e.target.matches('.core_pagination_button')) {
            var index = core_paginationItems.indexOf(e.target.parentNode);
            msImages.select(index);
        }
    });

})();
