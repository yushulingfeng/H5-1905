(() => {

    $('header').load('http://www.kl.com/src/html/component/header.html');

    $('#navBox').load('http://www.kl.com/src/html/component/nav.html', function() {
        $('.twoLevel span').css('font-size', '14px');
        $('.twoLevel').css('border', 'none');
    });

    $('footer').load('http://www.kl.com/src/html/component/footer.html');

    $('.suspension_list').load('http://www.kl.com/src/html/page/index/suspension.html');

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

    $('.imgBox').load('http://www.kl.com/src/html/page/details/magnifier.html', function() {
        var magnifierConfig = {
            magnifier: "#magnifier1", //最外层的大容器
            width: 402, //承载容器宽
            height: 402, //承载容器高
            moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
            zoom: 2 //缩放比例
        };

        var _magnifier = magnifier(magnifierConfig);

        /*magnifier的内置函数调用*/
        /*
            //设置magnifier函数的index属性
            _magnifier.setIndex(1);

            //重新载入主图,根据magnifier函数的index属性
            _magnifier.eqImg();
        */
    });


})();