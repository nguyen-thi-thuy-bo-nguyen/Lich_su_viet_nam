
$(function () {
    $('.logo, .menu, .menu ul li').css('float', 'left');


    $(' .menu ul li a ,.logo span, .footer a,span ,pre ').css('color', 'white');

    $(' .menu, .menu ul li a').css('line-height', '60px');

    $('.menu ul li ').hover(function () {
        $(this).css('background', 'white');
        $('.menu ul li a').hover(function () {
            $(this).css('color', '#411706');
        },
            function () {
                $(this).css('color', '#411706');
            }
        );

    }, function () {
        $(this).css('background', '#411706');

        $('.menu ul li a').css('color', 'white');


    });


});

