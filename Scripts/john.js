    // Call the function to generate buttons when the document is ready
    $(document).ready(function() {
        generateButtons();
    });
    
    $('.drawer-button').on('click', async function(evt) {
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

        if (!isDrawerOpen){
            try {
                const lite_youtube = document.querySelectorAll('lite-youtube');
                const main_video = lite_youtube[0];         
                const session_video = lite_youtube[1];         
                if (main_video) {
                    const main_player = await main_video.getYTPlayer();
                    main_player.pauseVideo();
                } else {
                    console.error('Lite YouTube players not found.');
                }
                if (session_video) {
                    const session_player = await session_video.getYTPlayer();
                    session_player.pauseVideo();
                } else {
                    console.error('Lite YouTube players not found.');
                }
            } catch (error) {
                console.error('Error accessing Lite YouTube player:', error);
            }
        }

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



