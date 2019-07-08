(() => {
    //头部
    $('header').load('html/component/header.html');
    //导航栏
    $('#navBox').load('html/component/nav.html');
    //轮播图
    $('#banner').load('html/page/index/banner.html');
    //右侧悬挂
    $('.suspension_right').load('html/page/index/suspension.html');
    //限时购
    $('#content .flashSale').load('html/page/index/flashSale.html');
    //热门品牌
    $('#content .hotBrand').load('html/page/index/hotBrand.html');
    //美妆专区
    $('.Beauty_makeupFloor').load('html/page/index/Beauty_makeupFloor.html');

    //吸顶搜索栏
    window.onscroll = function() {
        if (scrollY >= 50) {
            $('.topFixed').css('display', 'block');
        } else {
            $('.topFixed').css('display', 'none');
        }
    }

    //回到顶部悬挂侧栏
    let suspension = document.querySelector('.suspension_right');
    let floor_jump = document.querySelector('.floor_jump');

    document.onscroll = function() {
        // console.log(scrollY)
        // console.log(suspension.offsetHeight)
        // let top = window.innerHeight - suspension.offsetHeight;
        if (scrollY >= 655) {
            suspension.style.position = 'fixed';
            suspension.style.top = '70px';
            floor_jump.style.position = 'fixed';
            floor_jump.style.top = '70px';
        } else {
            suspension.style.position = 'absolute';
            suspension.style.top = '55px';
            floor_jump.style.position = 'absolute';
            floor_jump.style.top = '55px';
        }
    }

    //点击回到顶部事件
    $('.suspension_right').on('click', '.topBtn', function() {
        window.scrollTo(0, 0);
    })

})();