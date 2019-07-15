import { httpRequest } from '../utils/httpRequest'
import { requestUrl } from '../utils/requesturl'
import { Cart } from '../js/cart/cart'

//二级导航获取数据渲染
httpRequest(requestUrl.navList, (data) => {
    // console.log(data);//数组对象
    // console.log($('.ctList'));
    let num = 0;
    let html = data.map(function(item) {
        let str = item.brand.map(function(item) {
            return ` <a href="###">${item}</a>`;
        }).join('');
        return `<div class="litd">
                        <i class="underline"></i>
                        <div class="item">
                            <p class="title">
                                <a href="html/page/goodList/list.html">${item.category}</a>
                            </p>
                            <div class="listBox">
                               ${str}
                            </div>
                        </div>
                    </div>`;
    }).join('');

    $('.ctList').html(html);
});

//今日限时购 获取数据渲染
httpRequest(requestUrl.flashSale, (data) => {
    // console.log(data);//数组对象
    let html = data.map(item => {
        return `<li data-id=${item.data_id}>
                    <a href="">
                        <img src="${item.imgUrl}" alt="" title="${item.details}">
                    </a>
                    <div class="detail">
                        <h3>
                            <a href="" title="${item.title}">${item.title}</a>
                        </h3>
                        <h4>
                            <a href="" title="${item.details}">${item.details}</a>
                        </h4>
                        <p class="price">
                            ￥<b>${item.price}</b>
                            <span>￥</span>
                            <del>${item.delPrice}</del>
                        </p>
                        
                        <p class="stock">
                            限量${item.stock}件
                        </p>
                        <a class="rushByBtn" href="" title="立即抢购">立即抢购</a>
                    </div>
                </li>`;
    }).join('');

    $('.goodList').html(html);
});