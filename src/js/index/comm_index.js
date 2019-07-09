(() => {
    //头部
    $('header').load('html/component/header.html');
    //导航栏
    $('#navBox').load('html/component/nav.html');
    //轮播图
    $('#banner').load('html/page/index/banner.html');
    //右侧悬挂
    $('.suspension_right').load('html/page/index/suspension.html');
    //楼层跳跃
    $('.floor_jump').load('html/page/index/floor_jump.html');
    //限时购
    $('#content .flashSale').load('html/page/index/flashSale.html');
    //热门品牌
    $('#content .hotBrand').load('html/page/index/hotBrand.html');
    //美妆专区
    $('.Beauty_makeupFloor').load('html/page/index/Beauty_makeupFloor.html');
    //母婴专区
    $('.muying_product').load('html/page/index/muying_product.html');
    //营养保健
    $('.healthcareFloor').load('html/page/index/healthcareFloor.html');
    //数码家电
    $('.digitalFloor').load('html/page/index/digitalFloor.html');
    //个人洗护
    $('.personal_careFloor').load('html/page/index/personal_careFloor.html');
    //服饰鞋靴
    $('.clothingFloor').load('html/page/index/clothingFloor.html');
    //轻奢馆 
    $('.light_luxury_halFloor').load('html/page/index/light_luxury_halFloor.html');
    //手表配饰
    $('.watchFloor').load('html/page/index/watchFloor.html');
    //运动户外
    $('.sportsFloor').load('html/page/index/sportsFloor.html');
    //家居生活
    $('.home_lifeFloor').load('html/page/index/home_lifeFloor.html');
    //美食生鲜
    $('.foodFloor').load('html/page/index/foodFloor.html');
    //猜你喜欢
    $('.youLike').load('html/page/index/youLike.html');
    //尾部
    $('footer').load('html/component/footer.html');


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
        console.log(scrollY)
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
    });

    //点击跳转对应楼层
    //限时购
    $('.floor_jump').on('click', '.jump_flashSale', function() {
        window.scrollTo(0, 1050);
    });

    //热门品牌
    $('.floor_jump').on('click', '.jump_hotBrand', function() {
        window.scrollTo(0, 1550);
    });

    //美妆专区
    $('.floor_jump').on('click', '.item1', function() {
        window.scrollTo(0, 2015);
    });

    //母婴专区
    $('.floor_jump').on('click', '.item2', function() {
        window.scrollTo(0, 2910);
    });

    //营养保健
    $('.floor_jump').on('click', '.item3', function() {
        window.scrollTo(0, 3800);
    });

    //数码家电
    $('.floor_jump').on('click', '.item4', function() {
        window.scrollTo(0, 4700);
    });

    //个人洗护
    $('.floor_jump').on('click', '.item5', function() {
        window.scrollTo(0, 5585);
    });

    //服饰鞋靴
    $('.floor_jump').on('click', '.item6', function() {
        window.scrollTo(0, 6475);
    });

    //轻奢馆
    $('.floor_jump').on('click', '.item7', function() {
        window.scrollTo(0, 7370);
    });

    //手表配饰
    $('.floor_jump').on('click', '.item8', function() {
        window.scrollTo(0, 8260);
    });

    //运动户外
    $('.floor_jump').on('click', '.item9', function() {
        window.scrollTo(0, 7370);
    });

    //家居生活
    $('.floor_jump').on('click', '.item10', function() {
        window.scrollTo(0, 9150);
    });

    //美食生鲜
    $('.floor_jump').on('click', '.item11', function() {
        window.scrollTo(0, 10045);
    });


})();