/*
 Author: Ukieweb
 Template: Construction (Coming Soon)
 Version: 1.2
 URL: http://themeforest.net/user/UkieWeb
 */


$(document).ready(function(){

    "use strict";


    /*
     ----------------------------------------------------------------------
     Preloader
     ----------------------------------------------------------------------
     */
    $(".loader").delay(400).fadeOut();
    $(".animationload").delay(400).fadeOut("fast");


    /*
     ----------------------------------------------------------------------
     Nice scroll
     ----------------------------------------------------------------------
     */
    $("html").niceScroll({
        cursorcolor: '#fff',
        cursoropacitymin: '0',
        cursoropacitymax: '1',
        cursorwidth: '2px',
        zindex: 999999,
        horizrailenabled: false,
        enablekeyboard: false
    });


    /*
     ----------------------------------------------------------------------
     Watch
     ----------------------------------------------------------------------
     */
    if($.find('#watch')[0]) {

        $('#watch').countDown({
            targetDate: {
                'day': 		25,
                'month': 	5,
                'year': 	2017,
                'hour': 	11,
                'min': 		13,
                'sec': 		0
            },
            omitWeeks: true
        });
        //enter the count down date using the format year, month, day, time: hour, min, sec

        if( $('.day_field .top').html() == "0" ) $('.day_field').css('display','none');

    }



}); // End $(document).ready(function(){