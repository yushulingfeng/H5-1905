(() => {
    //头部
    $('header').load('html/component/header.html');
    //导航栏
    $('#navBox').load('html/component/nav.html');
    //轮播图
    $('#banner').load('html/page/index/banner.html');
    //限时购
    $('#content .flashSale').load('html/page/index/flashSale.html');
    //热门品牌
    $('#content .hotBrand').load('html/page/index/hotBrand.html');
    //美妆专区
    $('.Beauty_makeupFloor').load('html/page/index/Beauty_makeupFloor.html');


    window.onscroll = function() {
        if (scrollY >= 100) {
            $('.topFixed').css('display', 'block');
        } else {
            $('.topFixed').css('display', 'none');
        }
    }

})();