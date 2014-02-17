$(window).load(function () {
    $('ul li a').click(function (e) {
        e.preventDefault();
        var strAncla = $(this).attr('href');
        if (strAncla != "" && strAncla.contains("#")) {
            $('body,html').stop(true, true).animate({ scrollTop: $(strAncla).offset().top }, 1000);
        }
    });
});