/* global, $, alert, window */
$(function () {
    
    /* Start Code For Sec navbar scroll */
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 30) {
            $('.navbar').css('background-color', '#fff');
            $('.navbar-dark .navbar-nav .nav-link').css('color', '#000');
            $('.navbar-dark .navbar-brand').css('color', '#000');
            $('.navbar .navbar-brand .fa-moon').css('color', '#004dda');
            $('.navbar-dark .navbar-toggler').css('color', '#000');
        } else {
            $('.navbar').css('background-color', 'transparent');
            $('.navbar-dark .navbar-nav .nav-link').css('color', '#fff');
            $('.navbar-dark .navbar-brand').css('color', '#fff');
            $('.navbar .navbar-brand .fa-moon').css('color', '#fff');
            $('.navbar-dark .navbar-toggler').css('color', '#fff');
        }
    });
    
    
    /* Start Code For Sec Cover */
    $('.cover').height($(window).height());
    
    $(window).on('resize', function () {
        $('.cover').height($(window).height());
    });
    
    
    $('.cover .overlay .find button.categories').click(function (e) {
        e.preventDefault();
        $('.cover .overlay .find i').toggleClass('fa-arrow-down fa-arrow-up');
        $('.cover .overlay .find ul').slideToggle();
    });
    $('.cover .overlay .find ul li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    /* Start Code For Sec option color */
    $('.option ul li').click(function () {
         $("link[href*='theme']").attr("href", $(this).attr('data-color'));
    });
    
    $('.option .fas').click(function () {
        $('.option').toggleClass('is-avisible');
        if ($('.option').hasClass('is-avisible')) {
            $('.option').animate({
                'left' : 0
            });
        } else {
            $('.option').animate({
                'left' : '-' + $('.option').innerWidth()
            });
        }
    });
    
    /* Start Code For Sec up button */
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 100) {
            $('.up').fadeIn();
        } else {
            $('.up').fadeOut();
        }
    });
    
    $('.up').click(function () {
        $('html , body').animate({
            scrollTop : 0
        }, 1000);
    });
    
    
    /* loading */
    $(window).each(function () {
        
        $(".loading").fadeOut();
    });
});