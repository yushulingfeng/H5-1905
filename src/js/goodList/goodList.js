(() => {
    // console.log('ok')
    //列表数据渲染
    $.ajax({
        type: 'get',
        url: 'http://www.kl.com/src/api/list/goods.php',
        success: str => {

            let arr = JSON.parse(str);

            $.ajax({
                type: 'get',
                url: 'http://www.kl.com/src/database/goodsImg.json',
                success: str => {
                    // console.log(str)
                    upData(arr, str);
                    mouseoverImg();
                    jumpTo();
                }
            });
        }
    });

    function jumpTo() {
        $('#result').on('click', '.item', function() {
            let gid = $(this).attr('data-id');
            window.open('http://www.kl.com/src/html/page/details/details.html?gid=' + gid);
        });
    }

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
            return `<li data-id=${item.gid} class="item">
                            <div class="goodsWrap">
                                <a title="${item.title}">
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
    }



})();