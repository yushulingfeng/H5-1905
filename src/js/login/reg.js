(() => {

    // console.log('ok');

    let sure = false;
    //手机号码验证
    $('#reg_box').on('input', '#userphone', function() {
        let phoneNum = $(this).val().trim();

        if (checkReg.tel(phoneNum)) {
            $(this).parent().css('border', '1px solid rgb(74, 175, 233)');
            sure = true;
        } else {
            $(this).parent().css('border', '1px solid #e31436');
            sure = false;
        }
    });

    //密码验证
    $('#reg_box').on('focus', '#pwd_reg', function() {
        $(this).attr('placeholder', '6-18位首字母开头')
    });

    $('#reg_box').on('input', '#pwd_reg', function() {
        let pwd = $(this).val().trim();

        if (checkReg.psweasy(pwd)) {
            $(this).parent().css('border', '1px solid rgb(74, 175, 233)');
            sure = true;
        } else {
            $(this).parent().css('border', '1px solid #e31436');
            sure = false;
        }
    });

    //服务条款勾选按钮
    let isok2 = false;
    $('.fur_agree').on('click', '.un_checkbox', function() {
        if (isok2) {
            $('.un_checkbox').css('background-position', '0');
            isok2 = false;
        } else {
            $('.un_checkbox').css('background-position', '-330px -92px');
            isok2 = true;
        }
        // console.log(isok2)
    });
    // console.log(sure)

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

        let phoneNum = $('#reg_box #userphone_reg').val().trim();

        $.ajax({
            type: 'post',
            url: '../../../api/login_reg/duanxin.php',
            data: 'userphone=' + phoneNum,
            success: str => {

                let arr = JSON.parse(str);
                // console.log(arr);
                // //点击注册按钮
                $('#reg_box').on('click', '.doreg', function() {

                    let phoneNum = $('#userphone_reg').val();
                    let pwd = $('#pwd_reg').val();

                    //验证码验证是否正确
                    if ($('#note_reg').val().trim() == arr.phonecode) {
                        $('#note_reg').parent().css('border', '1px solid rgb(74, 175, 233)');
                        sure = true;


                        if (sure && isok2) {
                            // 注册成功
                            $.ajax({
                                type: 'post',
                                url: '../api/login_reg/save_admin.php',
                                data: 'userphone=' + phoneNum + '&pwd=' + pwd,
                                success: str => {
                                    // console.log(str);
                                    if (str == 'no') {
                                        alert('改用户已存在，无法注册！')
                                    } else {
                                        // 注册成功，跳转首页进入登录状态
                                        setCookie('username', phoneNum, 10);
                                        location = '/src/kaola.html';
                                    }
                                }
                            });

                            // $('#alert').css('opacity', 1);

                            // $('#alert').on('click', '.close', function() {
                            //     $('#alert').css('opacity', 0);
                            // });
                        }

                    } else {
                        $('#note_reg').parent().css('border', '1px solid #e31436');
                        sure = false;
                        alert('验证码错误！')
                    }
                });
            }
        });
    });









})();