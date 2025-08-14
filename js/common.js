$(document).ready(function () {
    $(function () {
        $('.btn-gnavi').on('click', function () {
            var rightVal = 0;
            if ($(this).hasClass('hb-open')) {
                rightVal = -570;
                $(this).removeClass('hb-open');
            } else {
                $(this).addClass('hb-open');
            }

            $('.gnav').stop().animate({
                top: rightVal
            }, 200);
        });
    });
    $(function () {
        //maxWidth:768 / minWidth:1100
        $(".about-person>li").heightLine({
            maxWidth: 768,
            minWidth: 1100
        });

        //maxWidth:768
        $(".about-person>li").heightLine({
            maxWidth: 768
        });
        //minWidth:1100
        $(".about-person>li").heightLine({
            minWidth: 1100
        });

    });
});
