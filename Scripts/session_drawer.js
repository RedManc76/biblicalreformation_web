    // Call the function to generate buttons when the document is ready
    $(document).ready(function() {
        generateButtons();
    });
    
    $('.drawer-button').on('click', function(evt) {
        var button = $(this);
        var body = $('.main');
        var container = $('.drawer');

        // Toggle active class
        button.toggleClass('active');

        // Toggle arrow images visibility based on drawer state
        var isDrawerOpen = container.hasClass('drawer-open');
        button.find('.up_arrow').toggle(isDrawerOpen);
        button.find('.down_arrow').toggle(!isDrawerOpen);

        // Toggle hide class on body
        body.toggleClass('hide');

        // Toggle drawer-open and drawer-closed classes on container
        container.toggleClass('drawer-open drawer-closed');
    });

    // Function to generate buttons
    function generateButtons() {
        var drawerBody = $('.drawer-body');

        // Loop to create 50 buttons
        for (var i = 1; i <= 50; i++) {
            var button = $('<button>', {
                class: 'sessionButton',
                'data-session': i, // Update the data-session attribute to the current session number
                text: i
            });
            drawerBody.append(button);

            // Add line break after every 10 buttons
            if (i % 10 === 0) {
                drawerBody.append('<br>');
            }
        }
    }



