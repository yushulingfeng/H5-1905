(() => {

    $('header').load('/src/html/component/header.html');

    $('#navBox').load('/src/html/component/nav.html', function() {
        $('.twoLevel span').css('font-size', '14px');
        $('.twoLevel').css('border', 'none');
    });



    $('#comboRecbox').load('/src/html/page/details/comboRecbox.html');

    $('footer').load('/src/html/component/footer.html');

    $('.suspension_list').load('/src/html/page/index/suspension.html');

    //回到顶部悬挂侧栏
    let suspension = document.querySelector('.suspension_list');

    document.onscroll = function() {
        // console.log(scrollY)
        // console.log(suspension.offsetHeight)
        // let top = window.innerHeight - suspension.offsetHeight;
        if (scrollY >= 180) {
            suspension.style.position = 'fixed';
            suspension.style.top = '70px';
        } else {
            suspension.style.position = 'absolute';
            suspension.style.top = '50px';
        }
    }

    //点击回到顶部事件
    $('.suspension_list').on('click', '.topBtn', function() {
        window.scrollTo(0, 0);
    });




})();