const core_html_1 = '<div class="core_row">' +
    '<div class="core_img_container" id="core_img_container_1">' +
    '<img class="core_img" id="core_img_1">' +
    '<div class="core_img_text"  id="core_img_text_1"></div>' +
    '</div>' +
    '<div class="core_img_container" id="core_img_container_2">' +
    '<img class="core_img" id="core_img_2">' +
    '<div class="core_img_text"  id="core_img_text_2"></div>' +
    '</div>' +
    '</div>' +
    '<div class="core_row">' +
    '<div class="core_img_container" id="core_img_container_3">' +
    '<img class="core_img" id="core_img_3">' +
    '<div class="core_img_text"  id="core_img_text_3"></div>' +
    '</div>' +
    '<div class="core_img_container" id="core_img_container_4">' +
    '<img class="core_img" id="core_img_4">' +
    '<div class="core_img_text"  id="core_img_text_4"></div>' +
    '</div>' +
    '</div>' +
    '<div class="core_row">' +
    '<div class="core_img_container" id="core_img_container_5">' +
    '<img class="core_img" id="core_img_5">' +
    '<div class="core_img_text"  id="core_img_text_5"></div>' +
    '</div>' +
    '<div class="core_img_container" id="core_img_container_6">' +
    '<img class="core_img" id="core_img_6">' +
    '<div class="core_img_text"  id="core_img_text_6"></div>' +
    '</div>' +
    '</div>';
const core_html_2 = '<div class="core_row">' +
    '<div class="core_img_container" id="core_img_container_1">' +
    '<img class="core_img" id="core_img_1">' +
    '<div class="core_img_text"  id="core_img_text_1"></div>' +
    '</div>' +
    '<div class="core_img_container" id="core_img_container_2">' +
    '<img class="core_img" id="core_img_2">' +
    '<div class="core_img_text"  id="core_img_text_2"></div>' +
    '</div>' +
    '<div class="core_img_container" id="core_img_container_3">' +
    '<img class="core_img" id="core_img_3">' +
    '<div class="core_img_text"  id="core_img_text_3"></div>' +
    '</div>' +
    '</div>' +
    '<div class="core_row">' +
    '<div class="core_img_container" id="core_img_container_4">' +
    '<img class="core_img" id="core_img_4">' +
    '<div class="core_img_text"  id="core_img_text_4"></div>' +
    '</div>' +
    '<div class="core_img_container" id="core_img_container_5">' +
    '<img class="core_img" id="core_img_5">' +
    '<div class="core_img_text"  id="core_img_text_5"></div>' +
    '</div>' +
    '<div class="core_img_container" id="core_img_container_6">' +
    '<img class="core_img" id="core_img_6">' +
    '<div class="core_img_text"  id="core_img_text_6"></div>' +
    '</div>' +
    '</div>';
const core_div = $('.core_main_container')

document.addEventListener('DOMContentLoaded', function() {
    jQuery(function($){

        var screen_size;

        reset_layout()
        window.addEventListener('resize', checkScreenSize);

        function checkScreenSize(){
            const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            if (screenHeight/screenWidth > 0.5){
                if (screen_size == 1){
                    reset_layout(screenWidth, screenHeight);
                }
            }else{
                if (screen_size == 0){
                    reset_layout(screenWidth, screenHeight);
                }
            }
        }

        function reset_layout(screenWidth, screenHeight){

            if (screenHeight/screenWidth > 0.7){
                screen_size = 0;
                core_div.html(core_html_1);
                $('.core_img_container').css('width','30%');
                $('.core_row').css('height','20%');
            }else{
                screen_size = 1;
                core_div.html(core_html_2);
                $('.core_img_container').css('width', '30%');
                $('.core_row').css('height','40%');
            }
            
            $('#core_img_1').attr('src', './Images/main/church.jpg');
            $('#core_img_2').attr('src', './Images/main/gospel.jpg');
            $('#core_img_3').attr('src', './Images/main/seeking.jpg');
            $('#core_img_4').attr('src', './Images/main/prayer.jpg');
            $('#core_img_5').attr('src', './Images/main/preacher.jpg');
            $('#core_img_6').attr('src', './Images/main/street.jpg');
            
            $('#core_img_text_1').html('Find a Church')
            $('#core_img_text_2').html('Listen to the Gospel')
            $('#core_img_text_3').html('Seeking?')
            $('#core_img_text_4').html('Prayer Requests')
            $('#core_img_text_5').html('Good Preachers')
            $('#core_img_text_6').html('Street Preaching')

            $('#core_img_1').click(function() {
                window.location.href = './Desktop Pages/Connect/church_d.html';
            });
            $('#core_img_text_1').click(function() {
                window.location.href = './Desktop Pages/Connect/church_d.html';
            });
            $('#core_img_2').click(function() {
                window.location.href = './Desktop Pages/Seek/gospel_d.html';
            });
            $('#core_img_text_2').click(function() {
                window.location.href = './Desktop Pages/Seek/gospel_d.html';
            });
            $('#core_img_3').click(function() {
                window.location.href = './Desktop Pages/Seek/seeking_d.html';
            });
            $('#core_img_text_3').click(function() {
                window.location.href = './Desktop Pages/Seek/seeking_d.html';
            });
            $('#core_img_4').click(function() {
                window.location.href = './Desktop Pages/Prayer/request_d.html';
            });
            $('#core_img_text_4').click(function() {
                window.location.href = './Desktop Pages/Prayer/request_d.html';
            });
            $('#core_img_5').click(function() {
                window.location.href = './Desktop Pages/Seek/preachers_d.html';
            });
            $('#core_img_text_5').click(function() {
                window.location.href = './Desktop Pages/Seek/preachers_d.html';
            });
            $('#core_img_6').click(function() {
                window.location.href = './Desktop Pages/Ministry/street_d.html';
            });
            $('#core_img_text_6').click(function() {
                window.location.href = './Desktop Pages/Ministry/street_d.html';
            });


        }

    });
});

