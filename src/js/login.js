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
            telphone_note_login();
        } else {
            $('.pwd_login').css('display', 'none'); //切换密码隐藏
            $('.note_login').css('display', 'block'); //切换短信显示
            $('.pwdReg').css('display', 'block'); //密码输入显示
            $('.noteReg').css('display', 'none'); //短信验证隐藏
            sure = false;
            telphone_login();
        }
    });

    //点击切换手机号登录
    $('#loginwrap .top').on('click', '.login_tel', function() {
        // console.log('ok');
        $('#login_form .tab').css('display', 'block'); //显示tab可切换登录
        $('.pwd_login').css('display', 'block'); //切换密码显示
        $('.note_login').css('display', 'none'); //切换短信隐藏
        sure = true;
        $('.noteReg').css('display', 'block'); //短信验证显示
        $('.pwdReg').css('display', 'none'); //密码输入隐藏
        $(".login_tel").css('color', '#e31436'); //选项卡标题高亮
        $(".login_email").css('color', '#333'); //选项卡标题高亮
        $('.login_input').attr({ 'placeholder': '请输入手机号', 'id': 'user_phone' }); //输入框提示改变
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
        $('.login_input').attr({ 'placeholder': '网易邮箱账号', 'id': 'username_email' }); //输入框提示改变
        $('#pwd').attr('placeholder', '密码');
        $('.icon_email').css('background-position', '0px -34px');
        wy_email_login();
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


    function telphone_note_login() {
        //手机号+短信验证登录
        let sure2 = false;
        $('#login_form').on('input', '#user_phone', function() {
            let user_phone = $(this).val();

            if (checkReg.tel(user_phone)) {
                $(this).parent().css('border', '1px solid rgb(74, 175, 233)');
                sure2 = true;
            } else {
                $(this).parent().css('border', '1px solid #e31436');
                sure2 = false;
            }
        });

        //验证码验证
        $('#reg_box').on('click', '.getCode', function() {
            let time = 60;

            let timer = setInterval(function() {

                time--;
                // console.log(time);
                $('#reg_box .getCode').html(time + '秒').css({
                    'color': '#999',
                    'background': '#eee'
                }).off('click');

                if (time == 0) {
                    clearInterval(timer);
                    $('#reg_box .getCode').html('获取验证码').css({
                        'color': '#999',
                        'background': '#fafafa'
                    });

                }
            }, 1000);

            let phoneNum = $('#reg_box #userphone').val();

            $.ajax({
                type: 'post',
                url: '../../../api/login_reg/duanxin.php',
                data: 'userphone=' + phoneNum,
                success: str => {

                    let arr = JSON.parse(str);
                    // console.log(arr);
                    //点击登录按钮
                    $('#login_form').on('click', '.dologin', function() {

                        let user_phone = $('#user_phone').val();

                        //验证码验证是否正确
                        if ($('#note_reg').val() == arr.phonecode) {
                            $('#note_reg').parent().css('border', '1px solid rgb(74, 175, 233)');
                            sure = true;

                            if (sure2 && sure) {
                                $.ajax({
                                    type: 'post',
                                    url: '../api/login_reg/login.php',
                                    data: 'userphone=' + user_phone,
                                    success: str => {
                                        // console.log(str);
                                        if (str == 'no') {
                                            alert('用户名或密码有误')
                                        } else {
                                            // 注册成功，跳转首页进入登录状态
                                            setCookie('username', phoneNum, 10);
                                            location = '/src/kaola.html';
                                        }
                                    }
                                });
                            }

                        } else {
                            $('#note_reg').parent().css('border', '1px solid #e31436');
                            sure = false;
                        }
                    });
                }
            });
        });
    }



    function telphone_login() {
        //手机号+密码登录
        let sure2 = false;
        $('#login_form').on('input', '#user_phone', function() {
            let user_phone = $(this).val();

            if (checkReg.tel(user_phone)) {
                $(this).parent().css('border', '1px solid rgb(74, 175, 233)');
                sure2 = true;
            } else {
                $(this).parent().css('border', '1px solid #e31436');
                sure2 = false;
            }
        });

        //密码验证
        $('#login_form').on('focus', '#pwd', function() {
            $(this).attr('placeholder', '请输入您的密码')
        });

        $('#login_form').on('input', '#pwd', function() {
            let pwd = $(this).val();

            if (checkReg.psweasy(pwd)) {
                $(this).parent().css('border', '1px solid rgb(74, 175, 233)');
                sure2 = true;
            } else {
                $(this).parent().css('border', '1px solid #e31436');
                sure2 = false;
            }
        });

        //点击登录按钮
        $('#login_form').on('click', '.dologin', function() {
            let user_phone = $('#login_form #user_phone').val();
            let pwd = $('#login_form #pwd').val();

            if (sure2) {
                $.ajax({
                    type: 'post',
                    url: '/src/api/login_reg/login.php',
                    data: 'userphone=' + user_phone + '&pwd=' + pwd,
                    success: str => {
                        // console.log(str);
                        if (str == 'yes') {
                            alert('用户名或密码有误')
                        } else {
                            // 注册成功，跳转首页进入登录状态
                            setCookie('username', user_phone, 10);
                            location = '/src/kaola.html';
                        }
                    }
                });
            }
        });
    }

    function wy_email_login() {
        //网易邮箱登录
        let sure2 = false;
        $('#login_form').on('input', '#username_email', function() {
            let username_email = $(this).val();

            if (checkReg.tel(username_email)) {
                $(this).parent().css('border', '1px solid rgb(74, 175, 233)');
                sure2 = true;
            } else {
                $(this).parent().css('border', '1px solid #e31436');
                sure2 = false;
            }
        });

        //密码验证
        $('#login_form').on('focus', '#pwd', function() {
            $(this).attr('placeholder', '请输入您的密码')
        });

        $('#login_form').on('input', '#pwd', function() {
            let pwd = $(this).val();

            if (checkReg.psweasy(pwd)) {
                $(this).parent().css('border', '1px solid rgb(74, 175, 233)');
                sure2 = true;
            } else {
                $(this).parent().css('border', '1px solid #e31436');
                sure2 = false;
            }
        });

        $('#login_form').on('click', '.dologin', function() {
            let wy_email = $('#login_form #username_email').val();
            let pwd = $('#login_form #pwd').val();

            if (sure2) {
                $.ajax({
                    type: 'post',
                    url: '../api/login_reg/login.php',
                    data: 'username=' + wy_email + '&pwd=' + pwd,
                    success: str => {
                        // console.log(str);
                        if (str == 'no') {
                            alert('用户名或密码有误')
                        } else {
                            // 注册成功，跳转首页进入登录状态
                            setCookie('username', phoneNum, 10);
                            location = '/src/kaola.html';
                        }
                    }
                });
            }
        });
    }
    wy_email_login();



})();