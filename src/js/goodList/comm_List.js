(() => {

    $('header').load('http://www.kl.com/src/html/component/header.html');

    $('#navBox').load('http://www.kl.com/src/html/component/nav.html', function() {
        $('.twoLevel span').css('font-size', '14px');
        $('.twoLevel').css('border', 'none');
    });

    $('footer').load('http://www.kl.com/src/html/component/footer.html');

    $('.suspension_list').load('http://www.kl.com/src/html/page/index/suspension.html');

    //列表页头 列表属性
    $('.options').load('http://www.kl.com/src/html/page/goodList/options.html', function() {

        $("#city").click(function(e) {
            SelCity(this, e);
            console.log("inout", $(this).val(), new Date())
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
    });

})();