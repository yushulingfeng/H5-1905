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

    //列表页头 列表属性
    $('.options').load('http://www.kl.com/src/html/page/goodList/options.html', function() {

        $("#city").click(function(e) {
            SelCity(this, e);
            // console.log("inout", $(this).val(), new Date())
        });

        //列表头部其他属性，按钮功能
        $('#countyrBrands .attr_items').on('mouseover', 'a', function() {
            $(this).css({ //a 标签边框
                'border': '1px solid #666',
                'border-bottom': 0
            })
            $(this).children('i.down').css({ //移入隐藏向下箭头
                'display': 'none'
            });
            $(this).children('i.up').css({ //现实向上箭头
                'display': 'inline-block'
            });

            //鼠标移入a 标签，对应下标的属性框显示
            $('.property .drop_downList').eq($(this).index()).css('display', 'block');

            //鼠标移出a 标签，移入属性框
            $('.property .drop_downList').eq($(this).index()).on('mouseover', function() {
                //属性框继续显示
                $(this).css('display', 'block');

                //a 标签的框框和箭头继续显示
                $('#countyrBrands .attr_items a').eq($(this).index() - 2).css({
                    'border': '1px solid #666',
                    'border-bottom': 0
                });
                $('#countyrBrands .attr_items a .down').eq($(this).index() - 2).css({
                    'display': 'none'
                });
                $('#countyrBrands .attr_items a .up').eq($(this).index() - 2).css({
                    'display': 'inline-block'
                });
            });
        });

        //鼠标移出a 标签
        $('#countyrBrands .attr_items').on('mouseout', 'a', function() {
            //边框和箭头恢复原来的样子
            $(this).css({
                'border': '1px solid #ddd',
            })
            $(this).children('i.down').css({
                'display': 'inline-block'
            });
            $(this).children('i.up').css({
                'display': 'none'
            });

            //鼠标移出a 标签，隐藏属性框
            $('.property .drop_downList').eq($(this).index()).css('display', 'none');

            //鼠标移出属性框
            $('.property .drop_downList').eq($(this).index()).on('mouseout', function() {
                //属性框隐藏
                $(this).css('display', 'none');
                //对应的a 标签样式恢复
                $('#countyrBrands .attr_items a').eq($(this).index() - 2).css({
                    'border': '1px solid #ddd',
                });
                $('#countyrBrands .attr_items a .down').eq($(this).index() - 2).css({
                    'display': 'inline-block'
                });
                $('#countyrBrands .attr_items a .up').eq($(this).index() - 2).css({
                    'display': 'none'
                });
            });
        });

        //点击多选显示确定和取消按钮，隐藏多选按钮
        $('.drop_downList .item-multiple').on('click', 'span', function() {
            $(this).parent().css('display', 'none');
            $('.btn_group').css('display', 'block');

        });

        //点击取消按钮，隐藏确定和取消按钮，显示多选按钮
        $('.drop_downList').on('click', '.cancel', function() {
            $('.drop_downList .btn_group').css('display', 'none');
            $('.drop_downList .item-multiple').css('display', 'block');
        });

        $('.order').on('click', 'li', function() {
            // console.log('ok')
            $(this).attr('class', 'active').siblings().removeAttr('class');
        });

        $('.order').on('click', '#comment', function() {
            // console.log('ok')
            $.ajax({
                type: 'get',
                url: 'http://www.kl.com/src/api/list/comment_sort.php',
                success: str => {

                    let arr = JSON.parse(str);

                    $.ajax({
                        type: 'get',
                        url: 'http://www.kl.com/src/database/goodsImg.json',
                        success: str => {
                            // console.log(str)
                            upData(arr, str);
                            mouseoverImg();
                        }
                    });
                }
            });

        });

        let isok = true;
        $('.order').on('click', '#price_sort', function() {
            // console.log('ok')
            let sort = '';

            if (isok) {
                $('#price_sort').html('价格 ↑');
                isok = !isok;
                sort = 'ASC';
            } else {
                $('#price_sort').html('价格 ↓');
                isok = !isok;
                sort = 'DESC';
            }


            $.ajax({
                type: 'get',
                url: 'http://www.kl.com/src/api/list/price_sort.php',
                data: 'sort=' + sort,
                success: str => {

                    let arr = JSON.parse(str);
                    $.ajax({
                        type: 'get',
                        url: 'http://www.kl.com/src/database/goodsImg.json',
                        success: str => {
                            // console.log(str)
                            upData(arr, str);
                            mouseoverImg();
                        }
                    });
                }
            });

        });

        $('.order').on('click', '#all', function() {
            // console.log('ok')
            location.reload();
        });

        $('.sure').on('click', function() {
            // console.log('ok')
            let val1 = $('#searchStart').val();
            let val2 = $('#searchEnd').val();

            $.ajax({
                type: 'post',
                url: 'http://www.kl.com/src/api/list/search_price.php',
                data: 'val1=' + val1 + '&val2=' + val2,
                success: str => {
                    let arr = JSON.parse(str);
                    $.ajax({
                        type: 'get',
                        url: 'http://www.kl.com/src/database/goodsImg.json',
                        success: str => {
                            // console.log(str)
                            upData(arr, str);
                            mouseoverImg();
                        }
                    });
                }
            });
        });

        $('#clearBtn').on('click', function() {
            $('#searchStart').val(' ');
            $('#searchEnd').val(' ');
        });


        $('.searchBtn').on('click', function() {
            // console.log('ok')
            let val = $('#detail_search').val();

            $.ajax({
                type: 'post',
                url: 'http://www.kl.com/src/api/list/detail_search.php',
                data: 'val=' + val,
                success: str => {
                    let arr = JSON.parse(str);
                    $.ajax({
                        type: 'get',
                        url: 'http://www.kl.com/src/database/goodsImg.json',
                        success: str => {
                            // console.log(str)
                            upData(arr, str);
                            mouseoverImg();
                            $('#detail_search').val(' ');
                        }
                    });
                }
            });
        });

        $('#detail_search').on('keydown', function(ev) {
            // console.log(ev.keyCode)
            if (ev.keyCode == 13) {
                let val = $('#detail_search').val();

                $.ajax({
                    type: 'post',
                    url: 'http://www.kl.com/src/api/list/detail_search.php',
                    data: 'val=' + val,
                    success: str => {
                        let arr = JSON.parse(str);
                        $.ajax({
                            type: 'get',
                            url: 'http://www.kl.com/src/database/goodsImg.json',
                            success: str => {
                                // console.log(str)
                                upData(arr, str);
                                mouseoverImg();
                                $('#detail_search').val(' ');
                            }
                        });
                    }
                });
            }
        });






















        function mouseoverImg() {
            let imgGroup = document.querySelectorAll('.imgGroup');
            let big_img = document.querySelectorAll('.img img');
            // console.log(imgGroup);
            for (let i = 0; i < imgGroup.length; i++) {
                imgGroup[i].onmouseover = function(ev) {
                    // console.log(ev.target.tagName)
                    if (ev.target.tagName == 'IMG') {
                        let src = ev.target.src;
                        // console.log(src)
                        big_img[i].src = src;
                    }
                }
            }
        }


        function upData(arr1, arr2) {

            let imgs = arr2.map(item => {
                return `<li class="imgTag">
                            <img src="${item}" alt="">
                        </li>`;
            }).join('');

            let html = arr1.map(item => {
                return `<li data-id=${item.gid}>
                                <div class="goodsWrap">
                                    <a href="" title="${item.title}">
                                        <div class="img">
                                            <img src="http://www.kl.com/src/images/goods/bigImg/Image Picka${item.bigImg}" alt="">
                                            <div class="hotSale">
                                                <span class="hot">${item.hot_sale}</span>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="imgList">
                                        <ul class="imgGroup">
                                            ${imgs}
                                        </ul>
                                    </div>
                                    <div class="desc">
                                        <p class="price">
                                            <span class="cur_price">
                                                <i>￥</i>
                                                ${item.cur}
                                            </span>
                                            <span class="market_price">
                                                ￥
                                                <del>${item.market_price}</del>
                                            </span>
                                        </p>
                                        <div class="goods_tit">
                                            <a id="goods_title" href="">
                                                <h2>${item.title}</h2>
                                            </a>
                                        </div>
                                        <p class="sale_info">
                                            <span class="activity self">${item.activity}</span>
                                            <span class="activity fit">${item.col5}</span>
                                        </p>
                                        <p class="goods_info clearfix">
                                            <a href="" class="comments">
                                                <i class="icon"></i> ${item.comment}
                                            </a>
                                            <span class="proPlace">${item.proPlace}</span>
                                        </p>
                                        <p class="self_flag">
                                            <span>${item.selfflag}</span>
                                        </p>
                                    </div>
                                </div>
                            </li>`;
            }).join('');
            //渲染到节点
            $('#result').html(html);

            if ($('.hotSale .hot').html() == '') {
                $('.hotSale').remove('.hot');
            }

        }


    });

})();