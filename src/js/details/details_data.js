// import { strToObj } from "/src/lib/common.js";


(() => {
    let url = location.href;
    let data = strToObj(url);
    // console.log(data);
    $.ajax({
        type: 'post',
        url: '/src/api/details/getData.php',
        data: 'gid=' + data.gid,
        success: str => {
            let arr = JSON.parse(str);
            // console.log(arr);
            $.ajax({
                type: 'get',
                url: '/src/database/goodsImg.json',
                success: str => {
                    // console.log(str)
                    upData2(arr, str);
                    fdj();
                }
            });
        }
    });


    function fdj() {
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

        $("#city").click(function(e) {
            SelCity(this, e);
            console.log("inout", $(this).val(), new Date())

        });

        $('.guarantee_cnt').on('mouseover', function() {
            $('.ctt').css('display', 'block');
            $('.tit .up').css('display', 'block').siblings().css('display', 'none');
            $('.ctt').on('mouseover', function() {
                $('.ctt').css('display', 'block');
                $('.tit .up').css('display', 'block').siblings().css('display', 'none');
                $('.moreLi .msg').css('color', '#e31436');
                $('.link').css('color', '#e31436');
            });
        });

        $('.guarantee_cnt').on('mouseout', function() {
            $('.ctt').css('display', 'none');
            $('.tit .up').css('display', 'none').siblings().css('display', 'block');
            $('.ctt').on('mouseout', function() {
                $('.ctt').css('display', 'none');
                $('.tit .up').css('display', 'none').siblings().css('display', 'block');
                $('.moreLi .msg').css('color', '#333');
                $('.link').css('color', '#333');
            });
        });


        var offset = $(".suspension_list").offset(); //结束的地方的元素
        $("#addCart").click(function(event) { //是$(".addcar")这个元素点击促发的 开始动画的位置就是这个元素的位置为起点
            var addcar = $(this);
            // var img = addcar.parent().find('img').attr('src');
            // var flyer = $('<img class="u-flyer" src="' + img + '">');
            var flyer = $('<span class="u-flyer iconfont icon-gaiicon-"></span>');
            flyer.fly({
                start: {
                    left: event.pageX,
                    top: event.pageY
                },
                end: {
                    left: offset.left + 10,
                    top: offset.top + 10,
                    width: 0,
                    height: 0
                },
                onEnd: function() {
                    $("#msg").show().animate({
                        width: '250px'
                    }, 200).fadeOut(1000);
                    addcar.css("cursor", "default").removeClass('orange').unbind('click');
                    this.destory();
                }
            });
        });

    }


    function upData2(arr1, arr2) {
        let imgs = arr2.map(item => {
            return `<li>
                        <div class="small-img">
                            <img src="${item}" />
                        </div>
                    </li>`;
        }).join('');
        let html = arr1.map(item => {
            return `<div id="barBox">
                        <div class="crumbs">
                            <span class="txt fl">3C数码</span>
                            <span class="fl">&nbsp;>&nbsp;</span>
                            <div class="crumbBtn fl">
                                <div class="btnBox">
                                    <a href="">手机/手机配件</a>
                                    <span class="icon"></span>
                                </div>
                            </div>
                            <span class="fl">&nbsp;>&nbsp;</span>

                            <div class="crumbBtn fl">
                                <div class="btnBox">
                                    <a href="">手机</a>
                                    <span class="icon"></span>
                                </div>
                            </div>
                            <span class="fl">&nbsp;>&nbsp;</span>

                            <div class="crumbBtn fl">
                                <div class="btnBox">
                                    <a href="">苹果</a>
                                    <span class="icon"></span>
                                </div>
                            </div>
                            <span class="fl">&nbsp;>&nbsp;</span>
                            <span class="crumbs_title fl">${item.title}</span>
                        </div>
                    </div>

                    <div class="product_head">
                        <div class="infoWrap clearfix">
                            <!-- 放大镜盒子 -->
                            <div class="imgBox clearfix">
                                <div class="magnifier" id="magnifier1">
                                    <div class="magnifier-container">
                                        <div class="images-cover"></div>
                                        <!--当前图片显示容器-->
                                        <div class="move-view"></div>
                                        <!--跟随鼠标移动的盒子-->
                                    </div>
                                    <div class="magnifier-assembly">
                                        <div class="magnifier-btn">
                                            <span class="magnifier-btn-left">&lt;</span>
                                            <span class="magnifier-btn-right">&gt;</span>
                                        </div>
                                        <!--按钮组-->
                                        <div class="magnifier-line">
                                            <ul class="clearfix animation03">
                                                ${imgs}
                                            </ul>
                                        </div>
                                        <!--缩略图-->
                                    </div>
                                    <div class="magnifier-view"></div>
                                    <!--经过放大的图片显示容器-->
                                </div>
                            </div>

                            <dl class="info">
                                <dt class="ptags">
                                            <i class="tag">${item.activity}</i>
                                    </dt>
                                <dt class="country">
                                            <img src=" /src/images/USA.png" alt="">
                                            <span>${item.proPlace}</span>
                                            <span class="split">|</span>
                                            <a href="" class="brand">Apple 苹果</a>
                                    </dt>
                                <dt class="title">
                                            <span>${item.title}</span>
                                    </dt>
                                <dt class="desc">
                                                【国行正品可开票】A12仿生芯片，6.1英寸大屏，面容ID，原深感摄像头！iPhone终于双卡双待了，商务、生活轻松切换！【下方服务可选购价值189元延保服务一年】
                                    </dt>
                                <dd class="priceBox">
                                    <div class="price">
                                        <span class="line_title pri_title">售价</span>
                                        <div class="price_cnt">
                                            <span class="pri_info">
                                                        ￥
                                                        <span class="cur">${item.cur}.00</span>
                                            <span class="cur_pritxt">起</span>
                                            </span>
                                            <span class="spe_pri">特价</span>
                                            <span class="market_pri">
                                                        参考价&nbsp;￥
                                                        <span>${item.market_price}.00</span>
                                            </span>
                                        </div>
                                    </div>
                                </dd>
                                <dd class="postage">
                                    <span class="line_title">运费</span>
                                    <div class="msg">
                                        <span>
                                                    <span class="from">至</span>

                                        <span class="address">
                                                        <input type="text" id="city" placeholder=" 广东省-广州市-天河区">
                                                        <label for="city" class="triangle"></label>
                                                    </span>

                                        </span>

                                        <span class="feeinfo">
                                                    <i class="freeShop">满88元包邮
                                                        <span class="arrow"></span>
                                        </i>

                                        <span class="desc">
                                                        <i>自营订单满88元包邮，不足金额的订单收取10元运费。<br>88元以商品活动后的总金额为准，不含税费，使用虚拟资产(优惠券、红包、考拉豆等)不影响包邮的计算。<br>特殊商品、自营店铺及入驻商家商品单独计算运费。</i>
                                                    </span>

                                        </span>

                                    </div>
                                </dd>
                                <dd class="service">
                                    <span class="line_title">服务</span>
                                    <span class="send">本商品由 自营国内仓 发货</span>
                                    <div class="sendBox">
                                        <ul class="postage_list">
                                            <li class="item">
                                                <img src=" /src/images/apple.jpg" alt="">
                                                <p title="正品货源">
                                                    <span>正品货源</span>
                                                </p>
                                                <span class="line active"></span>
                                            </li>
                                            <li class="item">
                                                <img src=" /src/images/fahuodi@3x.png" alt="">
                                                <p title="自营国内仓发货">
                                                    <span>自营国内仓发货</span>
                                                </p>
                                                <span class="line"></span>
                                            </li>
                                            <li class="item">
                                                <img src=" /src/images/mudidi@3x.png" alt="">
                                                <p title="广州市">
                                                    <span>广州市</span>
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="tomorrow_arrival">
                                        <span class="line_title">&nbsp;</span>
                                        <span>24:00前完成支付，预计</span>
                                        <span class="bold">7月15日(周一)</span>
                                        <span>送达</span>
                                    </div>
                                </dd>
                                <dd id="colorBox">
                                    <div class="color_wrap">
                                        <div class="color_box clearfix">
                                            <span class="line_title">颜色</span>
                                            <div class="valBox">
                                                <ul class="clearfix">
                                                    <li class="img_box" title="黑色">
                                                        <a href="">
                                                            <img src=" /src/images/goods/images/bigImg1.jpg" alt="">
                                                        </a>
                                                        <i>
                                                                    <span class="checked"></span>
                                                                </i>
                                                    </li>
                                                    <li class="img_box" title="黄色">
                                                        <a href="">
                                                            <img src=" /src/images/goods/images/bigImg2.jpg" alt="">
                                                        </a>
                                                        <i>
                                                                    <span class="checked"></span>
                                                                </i>
                                                    </li>
                                                    <li class="img_box" title="蓝色">
                                                        <a>
                                                            <img src=" /src/images/goods/images/bigImg3.jpeg" alt="">
                                                        </a>
                                                        <i>
                                                                    <span class="checked"></span>
                                                                </i>
                                                    </li>
                                                    <li class="img_box" title="珊瑚色">
                                                        <a>
                                                            <img src=" /src/images/goods/images/bigImg4.jpg" alt="">
                                                        </a>
                                                        <i>
                                                                    <span class="checked"></span>
                                                                </i>
                                                    </li>
                                                    <li class="img_box" title="红色">
                                                        <a>
                                                            <img src=" /src/images/goods/images/bigImg5.jpg" alt="">
                                                        </a>
                                                        <i>
                                                                    <span class="checked"></span>
                                                                </i>
                                                    </li>
                                                    <li class="img_box" title="白色">
                                                        <a>
                                                            <img src=" /src/images/goods/images/bigImg6.jpg" alt="">
                                                        </a>
                                                        <i>
                                                                    <span class="checked"></span>
                                                                </i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="tip">
                                            <span class="line_title fl"></span>
                                            <div class="tip_box">
                                                <i>!</i>
                                                <span>哎哟，规格还没选好呢……</span>
                                            </div>
                                        </div>
                                    </div>
                                </dd>
                                <div class="buy_numBox">
                                    <span class="line_title">数量</span>
                                    <em class="buy_box">
                                                <span class="ctrNum">
                                                    <a class="icon_minus">-</a>
                                                    <input type="text" class="ctrnum" value="1">
                                                    <a class="icon_plus">+</a>
                                                </span>
                                                <span class="dome_tip">单日限购数量1件</span>
                                                <span class="hide"></span>
                                            </em>
                                </div>
                                <div class="guarantee clearfix">
                                    <span class="line_title">服务说明</span>
                                    <div class="guarantee_cnt">
                                        <div class="guali">
                                            <div class="tit">
                                                1年延保 ￥ 169
                                                <i class="iconfont up icon-jiantouxiangshang"></i>
                                                <i class="iconfont down icon-jiantouxiangxia"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="ctt">
                                        <ul class="moreList">
                                            <li class="moreLi">
                                                <span class="checked">
                                                            <input type="checkbox">
                                                        </span>
                                                <span class="msg">
                                                            1年延保 ￥ 169
                                                        </span>
                                                <a class="link">详情></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <dd class="clearfix">
                                    <div class="explain clearfix">
                                        <span class="line_title fl">说明</span>
                                        <ul class="buyNow_tips">
                                            <li class="fl">
                                                <i></i> 正品保障
                                            </li>
                                            <li class="fl">
                                                <i class="unsupport"></i> 不支持7天无理由退货
                                            </li>
                                            <li class="fl">
                                                <i class="unsupport"></i> 不可使用优惠券
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="buyBtns clearfix">
                                        <a class="buyNow fl" id="buyBtn">立即购买</a>
                                        <a class="addCart fl" id="addCart">
                                            <span class="iconfont icon-gaiicon-"></span> 加入购物车
                                        </a>
                                        <a class="favBtn fl">
                                            <i class="iconfont icon-shoucang"></i>
                                            <span class="txt">收藏</span>
                                        </a>
                                    </div>
                                </dd>

                                <dd class="comment_bar">
                                    <span class="percentStar">
                                                <span>
                                                    <i class="iconfont icon-xingxing"></i>
                                                    <i class="iconfont icon-xingxing"></i>
                                                    <i class="iconfont icon-xingxing"></i>
                                                    <i class="iconfont icon-xingxing"></i>
                                                    <i class="iconfont icon-xingxing"></i>
                                                </span>
                                    </span>
                                    <span class="goodPercent">
                                                98%
                                            </span>
                                    <span class="comNum comm">
                                                <a>950人</a>
                                                评价
                                            </span>
                                    <span class="commImg comm">
                                                <a>90人</a>
                                                晒单
                                            </span>
                                </dd>

                                <dd class="excelComm">
                                    <p class="comm_tit">y***a&nbsp;&nbsp;&nbsp;&nbsp;2019-03-25 13:33:55</p>
                                    <p class="detail">红的很扎眼呢，灰常适合女生使用。考拉正品保证，优惠力度也可以，以后多多关顾呢！</p>
                                </dd>
                            </dl>
                        </div>
                    </div>
            `;
        }).join('');

        $('#cont').html(html);
    }









})();