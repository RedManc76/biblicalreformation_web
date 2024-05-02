$(document).ready(function() {

    $('#btn_basics').click(function() {
        if ($(window).width() <= 768) {
            window.location.href = "../Seek/basics.html";
        }else{
            window.location.href = "../Seek/basics_d.html";
        }
    });

    $('#btn_john').click(function() {
        if ($(window).width() <= 768) {
            window.location.href = "../Seek/jesus.html";
        }else{
            window.location.href = "../Seek/jesus_d.html";
        }
    });

    $('#btn_preaching').click(function() {
        if ($(window).width() <= 768) {
            window.location.href = "../Seek/gospel.html";
        }else{
            window.location.href = "../Seek/gospel_d.html";
        }
    });

    $('#btn_connect').click(function() {
        if ($(window).width() <= 768) {
            window.location.href = "../Connect/church.html";
        }else{
            window.location.href = "../Connect/church_d.html";
        }
    });

});




