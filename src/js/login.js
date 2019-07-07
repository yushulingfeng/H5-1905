(() => {
    //登录页输入表单的高亮效果
    $('.input').on('click', '.p', function() {
        $(this).css('border', '1px solid #4aafe9').siblings().css('border', '1px solid #d5d5d5');
        // console.log($(this))
    });

    //注册页输入表单的高亮效果
    $('.reg_input').on('click', '.p', function() {
        $(this).css('border', '1px solid #4aafe9').siblings().css('border', '1px solid #d5d5d5');
        // console.log($(this))
    });

    //10天免登录勾选按钮
    let isok = false;
    $('#login_form').on('click', '.un_checkbox', function() {
        if (isok) {
            $('.un_checkbox').css('background-position', '-330px -92px');
            isok = !isok;
        } else {
            $('.un_checkbox').css('background-position', '0');
            isok = true;
        }
    });

    //服务条款勾选按钮
    let isok2 = false;
    $('.fur_agree').on('click', '.un_checkbox', function() {
        if (isok2) {
            $('.un_checkbox').css('background-position', '0');
            isok2 = !isok2;
        } else {
            $('.un_checkbox').css('background-position', '-330px -92px');
            isok2 = true;
        }
    });

    //点击tab切换短信验证码登录
    let sure = true;
    $('.tab').on('click', function() {
        if (!sure) {
            $('.pwd_login').css('display', 'block'); //切换密码显示
            $('.note_login').css('display', 'none'); //切换短信隐藏
            $('.noteReg').css('display', 'block'); //短信验证显示
            $('.pwdReg').css('display', 'none'); //密码输入隐藏
            sure = !sure;
        } else {
            $('.pwd_login').css('display', 'none'); //切换密码隐藏
            $('.note_login').css('display', 'block'); //切换短信显示
            $('.pwdReg').css('display', 'block'); //密码输入显示
            $('.noteReg').css('display', 'none'); //短信验证隐藏
            sure = false;
        }
    });

    //点击切换手机号登录
    $('#loginwrap .top').on('click', '.login_tel', function() {
        $('#login_form .tab').css('display', 'block'); //显示tab可切换登录
        $('.pwd_login').css('display', 'block'); //切换密码显示
        $('.note_login').css('display', 'none'); //切换短信隐藏
        sure = true;
        $('.noteReg').css('display', 'block'); //短信验证显示
        $('.pwdReg').css('display', 'none'); //密码输入隐藏
        $(".login_tel").css('color', '#e31436'); //选项卡标题高亮
        $(".login_email").css('color', '#333'); //选项卡标题高亮
        $('#username').attr('placeholder', '请输入手机号'); //输入框提示改变
        $('#pwd').attr('placeholder', '请输入密码');
        $('.icon_email').css('background-position', '-36px -34px');
    });

    //点击切换邮箱登录
    $('#loginwrap .top').on('click', '.login_email', function() {
        $('#login_form .tab').css('display', 'none'); //隐藏tab可切换登录
        $('.pwdReg').css('display', 'block'); //密码输入显示
        $('.noteReg').css('display', 'none'); //短信验证隐藏
        $(".login_tel").css('color', '#333'); //选项卡标题高亮
        $(".login_email").css('color', '#e31436'); //选项卡标题高亮
        $('#username').attr('placeholder', '网易邮箱账号'); //输入框提示改变
        $('#pwd').attr('placeholder', '密码');
        $('.icon_email').css('background-position', '0px -34px');
    });

    //登录页也注册页的切换
    //点击去注册。跳转到注册页
    $('#loginwrap').on('click', '.gotoreg', function() {

        //登录页隐藏
        $('#loginwrap').css('display', 'none');

        //注册页显示
        $('#regwrap').css('display', 'block');
        $('.noteReg').css('display', 'block'); //短信验证显示
        //服务条款默认不勾选
        $('.un_checkbox').css('background-position', '0');
    });

    //点击去登录，跳转到登录页
    $('#regwrap').on('click', '.gotologin a', function() {

        location.reload();
    });

})();