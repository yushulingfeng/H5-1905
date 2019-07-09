(() => {

    $('header').load('http://www.kl.com/src/html/component/header.html');

    $('#navBox').load('http://www.kl.com/src/html/component/nav.html', function() {
        $('.twoLevel span').css('font-size', '14px');
        $('.twoLevel').css('border', 'none');
    });

    $('footer').load('http://www.kl.com/src/html/component/footer.html');

    $('.suspension_list').load('http://www.kl.com/src/html/page/index/suspension.html');

})();