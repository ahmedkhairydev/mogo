/*global $, alert, console*/
$(function () {
    'use strict';
    
    $(".button-collapse").sideNav();
    $('.collapsible').collapsible();
    $('.carousel').carousel({});
    $('.scrollspy').scrollSpy({
        scrollOffset: 50
    });
    $(".rslides").responsiveSlides({
        prevText: "<i class='material-icons'>keyboard_arrow_left</i>",
        nextText: "<i class='material-icons'>keyboard_arrow_right</i>",
        nav: true
    });
    
    
    // Hide Items
    $('header .header-animation div h1, header .header-animation div p, header .header-animation div hr').hide();
    
    $('#what-we-do h1, #what-we-do p, #what-we-do hr, #what-we-do figure').hide();
    
    $('#we-work-with h1, #we-work-with p, #we-work-with hr, #we-work-with .services div').hide();
    
    $('#service h1, #service p, #service hr, #service .content img, #service .content ul, #service .content ul li').hide();
    
    $('#happy-clients h1, #happy-clients p, #happy-clients hr, #happy-clients .people div').hide();
    
    // Header Animation
    
    if ($(this).scrollTop() >= '0') {

        var header = $('header .header-animation div h1, header .header-animation div p, header .header-animation div hr');

        $.each(header, function (i, div) {

            setTimeout(function () {
                $(div).show().css({'animation': 'up 1.5s'});
            }, i * 100);

        });
    }
    
    // Scroll Animation
    $(window).scroll(function () {
        
        // Header Animation
        if ($(this).scrollTop() >= '0' && $(this).scrollTop() <= '650') {

            var header = $('header .header-animation div h1, header .header-animation div p, header .header-animation div hr');

            $.each(header, function (i, div) {

                setTimeout(function () {
                    $(div).show().css({'animation': 'up 1.5s'});
                }, i * 100);

            });
        } else {
            $('header .header-animation div h1, header .header-animation div p, header .header-animation div hr').fadeOut(1000);
        }
        
        //Navbar Scroll
        if ($(this).scrollTop() >= '100') {
            $('nav').css({'background': '#e98282', 'transition': 'all 1s ease-in-out'});
        } else {
            $('nav').css({'background': 'none'});
        }
        
        //----------------------------------
        
        // What We Do Animation
        
        if ($(this).scrollTop() >= '100') {
            
            var whatDo = $('#what-we-do h1, #what-we-do p, #what-we-do hr, #what-we-do figure');
            
            $.each(whatDo, function (i, div) {
                
                setTimeout(function () {
                    $(div).show().css({'animation': 'up 1.5s'});
                }, i * 200);
                
            });
        }
        
        //Append UP Button
        if ($(this).scrollTop() >= '1000') {
            $('.fixed-action-btn').fadeIn();
        } else {
            $('.fixed-action-btn').fadeOut();
        }
        
        //----------------------------------
        
        // Facts Animation
        var a = $('header').height(), b = $('#what-we-do').height(),
        c = a + b - 500;
        
        if ($(this).scrollTop() >= c) {
            $('#facts div:first-child div:first-child div p').each(function () {
                $(this).animate({
                    left: $(this).data('percentage')
                }, {
                    duration: 2000,
                    step: function (nowoooo) {
                        var data = Math.round(nowoooo),
                            zero = (data < 10) ? "0" : "";
                        $(this).text(zero + data);
                    }
                });
            });
        }
        
        // We Work With Animation
        
        var d = a + b - 300;
        
        if ($(this).scrollTop() >= d) {
            
            var weWork = $('#we-work-with h1, #we-work-with p, #we-work-with hr, #we-work-with .services div');
            
            $.each(weWork, function (i, div) {
                
                setTimeout(function () {
                    $(div).show().css({'animation': 'up 1.5s'});
                }, i * 100);
                
            });
        }
        
        // Service Animation
        
        var e = a + b + 1150;
        
        if ($(this).scrollTop() >= e) {
            
            var service = $('#service h1, #service p, #service hr, #service .content img, #service .content ul, #service .content ul li');
            
            $.each(service, function (i, div) {
                
                setTimeout(function () {
                    $(div).show().css({'animation': 'up 1.5s'});
                }, i * 150);
                
            });
        }
        
        // Clients Animation
        
        var f = a + b + 4930;
        
        if ($(this).scrollTop() >= f) {
            
            var service = $('#happy-clients h1, #happy-clients p, #happy-clients hr, #happy-clients .people div');
            
            $.each(service, function (i, div) {
                
                setTimeout(function () {
                    $(div).show().css({'animation': 'up 1.5s'});
                }, i * 100);
                
            });
        }
        
        //Scroll To Top
        $('.fixed-action-btn').click(function () {
            $('body, html').stop().animate({scrollTop: 0}, 1500);
        });
        
        //----------------------------------
        
    });
});