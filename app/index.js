/**
 * Created by Administrator on 2017/3/27 0027.
 */
(function () {
    indexEffect();  //首页页面效果
    investResult(); //投资人页面效果
    projectName();  //项目名称页面效果
    dreamMessage(); //梦想发起页面效果
    personalCenter(); //个人中心页面效果
    userGuide(); //用户引导页面效果
    aboutUs(); //关于我们页面效果

    function indexEffect() {
        var $mainBox = $('.main-box');
        var $mainBoxLi = $('.main-box > li');
        var $dottedLi = $('.dotted > li');
        var index = 1;
        $dottedLi.on('click mouseenter',function () {
             index = $(this).index();
            $(this)
                .addClass('choosed')
                .siblings()
                .removeClass('choosed');
            $mainBoxLi.eq(index)
                .addClass('scalebig')
                .siblings()
                .removeClass('scalebig');
        });
        var timer = setInterval(function () {
            index++;
            if(index > 2){
                index = 0;
            }
            $dottedLi.eq(index).click();
        },2000);
        $mainBox
            .on('mouseenter',function () {
            clearInterval(timer);
        })
            .on('mouseleave',function () {
                timer = setInterval(function () {
                    index++;
                    if(index > 2){
                        index = 0;
                    }
                    $dottedLi.eq(index).click();
                },2000);
            })
    }
    function investResult() {
        var $investSelect = $('#investSelect');
        var $selectList = $('#selectList');
        var $intro = $('#intro');
        var $cancle = $('#cancle');
        var flag = true;
        $investSelect.on('click',function() {
            if(flag == true){
                $selectList.slideDown();
                flag = false;
            }else{
                $selectList.slideUp();
                flag = true;
            }
        })
        $intro.on('click',function () {
            $('.disbox').show();
        })
        $cancle.on('click',function () {
            $('.disbox').hide();
        })
    }
    function projectName() {
        var $changeUl = $('#changeBox');
        var $changeBox_1 = $('#changeBox_1');
        var $changeBox_2 = $('#changeBox_2');
        var $changeBox_3 = $('#changeBox_3');
        $changeBox_2.css('display','none');
        $changeBox_3.css('display','none');
        $changeUl.on('click','li',function() {
            $(this)
                .addClass('pro-change-box-choose')
                .siblings()
                .removeClass('pro-change-box-choose');
            if($(this).index() == 0){
                $changeBox_1.show();
                $changeBox_2.hide();
                $changeBox_3.hide();
            }else if($(this).index() == 1){
                $changeBox_1.hide();
                $changeBox_2.show();
                $changeBox_3.hide();
            }else{
                $changeBox_1.hide();
                $changeBox_2.hide();
                $changeBox_3.show();
            }
        })
    }
    function dreamMessage() {
        var dremsgflag = true;
        var $labelBox = $('#labelBox > label');
        var $province = $('#province');
        var $provinceBtn = $('#provinceBtn');
        var $dreamMsgBg = $('.dream-msg-bg');
        var $alertBox = $('.alert-box');
        var $parentBox = $('.partner-box');
        var $dreamCancle = $('#dreamCancle');
        var $dreamMsgLi = $('.dream-msg-list > li');
        var $contentDivs = $('.dream-msg');
        $provinceBtn.on('click',function () {
            if(dremsgflag){
                $province.fadeOut(500);
                dremsgflag = false;
            }else{
                $province.fadeIn(500);
                dremsgflag = true;
            }

        });
        $labelBox.on('click',function() {
                    $(this).attr('class','labelchoosed');
        });
        $parentBox.on('click',function() {
            $dreamMsgBg.show();
            $alertBox.show();
            $('body').css('overflow-y','hidden');
        });
        $dreamCancle.on('click',function () {
            $dreamMsgBg.hide();
            $alertBox.hide();
            $('body').css('overflow-y','');
        });
        $dreamMsgLi.on('click',function() {
            var index = $(this).index();
            $(this)
                .addClass('dream-msg-li-choose')
                .siblings()
                .removeClass('dream-msg-li-choose');
            $contentDivs.eq(index)
                .addClass('div-show')
                .siblings()
                .removeClass('div-show');
        })
    }
    function personalCenter() {
        $(".infor>a").click(function(){
            $(".personal-disbox").show();
        });
        $(".personal-btn>a:nth-child(2)").click(function(){
            $(".personal-disbox").show();
        });
        $(".area>ul>li:nth-child(1)").click(function(){
            $(this).css({"background":"white","height":"44px"}).siblings().css({"background":"#f4f4f4","height":"43px"})
            $(".area-disbox1").show();
            $(".area-disbox2").hide();
        })
        $(".area>ul>li:nth-child(2)").click(function(){
            $(this).css({"background":"white","height":"44px"}).siblings().css({"background":"#f4f4f4","height":"43px"})
            $(".area-disbox1").hide();
            $(".area-disbox2").show();
        })
        $(".personal-creation-left>ul>li:nth-child(1)").click(function(){
            $(this).css({"background":"white","border-left":"3px solid #1ba2dc","color":"#1ba2dc"}).siblings().css({"background":"#f9f9f9","color":"#262626","border-left":"3px solid #f9f9f9"})
            $(".area3").show();
            $(".area2").hide();
            $(".area").hide();
            $(".area4").hide();
        })
        $(".personal-creation-left>ul>li:nth-child(2)").click(function(){
            $(this).css({"background":"white","border-left":"3px solid #1ba2dc","color":"#1ba2dc"}).siblings().css({"background":"#f9f9f9","color":"#262626","border-left":"3px solid #f9f9f9"})
            $(".area3").hide();
            $(".area2").show();
            $(".area").hide();
            $(".area4").hide();
        })
        $(".personal-creation-left>ul>li:nth-child(3)").click(function(){
            $(this).css({"background":"white","border-left":"3px solid #1ba2dc","color":"#1ba2dc"}).siblings().css({"background":"#f9f9f9","color":"#262626","border-left":"3px solid #f9f9f9"})
            $(".area2").hide();
            $(".area").show();
            $(".area3").hide();
            $(".area4").hide();

        })
        $(".personal-creation-left>ul>li:nth-child(4)").click(function(){
            $(this).css({"background":"white","border-left":"3px solid #1ba2dc","color":"#1ba2dc"}).siblings().css({"background":"#f9f9f9","color":"#262626","border-left":"3px solid #f9f9f9"})
            $(".area2").hide();
            $(".area").hide();
            $(".area3").hide();
            $(".area4").show();
        })
        $(".area2>ul>li:nth-child(1)").click(function(){
            $(this).css({"background":"white","color":"#1ba2dc","height":"44px"}).siblings().css({"background":"#f4f4f4","color":"#262626","height":"43px"})
            $(".area2-disbox1").show();
            $(".area2-disbox2").hide();
            $(".area2-disbox3").hide();
        })
        $(".area2>ul>li:nth-child(2)").click(function(){
            $(this).css({"background":"white","color":"#1ba2dc","height":"44px"}).siblings().css({"background":"#f4f4f4","color":"#262626","height":"43px"})
            $(".area2-disbox1").hide();
            $(".area2-disbox2").show();
            $(".area2-disbox3").hide();
        })
        $(".area2>ul>li:nth-child(3)").click(function(){
            $(this).css({"background":"white","color":"#1ba2dc","height":"44px"}).siblings().css({"background":"#f4f4f4","color":"#262626","height":"43px"})
            $(".area2-disbox1").hide();
            $(".area2-disbox2").hide();
            $(".area2-disbox3").show();
        })
        $(".area4>ul>li:nth-child(1)").click(function(){
            $(this).css({"background":"white","color":"#1ba2dc","height":"44px"}).siblings().css({"background":"#f4f4f4","color":"#262626","height":"43px"})
            $(".area4-disbox1").show();
            $(".area4-disbox2").hide();
            $(".area4-disbox3").hide();
        })
        $(".area4>ul>li:nth-child(2)").click(function(){
            $(this).css({"background":"white","color":"#1ba2dc","height":"44px"}).siblings().css({"background":"#f4f4f4","color":"#262626","height":"43px"})
            $(".area4-disbox1").hide();
            $(".area4-disbox2").show();
            $(".area4-disbox3").hide();
        })
        $(".area4>ul>li:nth-child(3)").click(function(){
            $(this).css({"background":"white","color":"#1ba2dc","height":"44px"}).siblings().css({"background":"#f4f4f4","color":"#262626","height":"43px"})
            $(".area4-disbox1").hide();
            $(".area4-disbox2").hide();
            $(".area4-disbox3").show();
        })
    }
    function userGuide() {
        $(".question_click").click(function(){
            $(".know_click").css("border-bottom","none");
            $(".question_click").css("border-bottom","2px solid #f2f2f2");
            $(".risk_click").css("border-bottom","none");
            $(".userguide_know").hide();
            $(".userguide_question").show();
            $(".userguide_risk").hide();
        });
        $(".risk_click").click(function(){
            $(".know_click").css("border-bottom","none");
            $(".question_click").css("border-bottom","none");
            $(".risk_click").css("border-bottom","2px solid #f2f2f2");
            $(".userguide_know").hide();
            $(".userguide_question").hide();
            $(".userguide_risk").show();
        });
        $(".know_click").click(function(){
            $(".know_click").css("border-bottom","2px solid #f2f2f2");
            $(".question_click").css("border-bottom","none");
            $(".risk_click").css("border-bottom","none");
            $(".userguide_know").show();
            $(".userguide_question").hide();
            $(".userguide_risk").hide();
        })
    }
    function aboutUs() {
        $(".team_click").click(function(){
            $(".company_click").css("border-bottom","none");
            $(".team_click").css("border-bottom","2px solid #f2f2f2");
            $(".advt_click").css("border-bottom","none");
            $(".us_click").css("border-bottom","none");
            $(".aboutus_company").hide();
            $(".aboutus_team").show();
            $(".aboutus_advt").hide();
            $(".aboutus_us").hide();
        });
        $(".advt_click").click(function(){
            $(".company_click").css("border-bottom","none");
            $(".team_click").css("border-bottom","none");
            $(".advt_click").css("border-bottom","2px solid #f2f2f2");
            $(".us_click").css("border-bottom","none");
            $(".aboutus_company").hide();
            $(".aboutus_team").hide();
            $(".aboutus_advt").show();
            $(".aboutus_us").hide();
        });
        $(".us_click").click(function(){
            $(".company_click").css("border-bottom","none");
            $(".team_click").css("border-bottom","none");
            $(".advt_click").css("border-bottom","none");
            $(".us_click").css("border-bottom","2px solid #f2f2f2");
            $(".aboutus_company").hide();
            $(".aboutus_team").hide();
            $(".aboutus_advt").hide();
            $(".aboutus_us").show();
        });
        $(".company_click").click(function(){
            $(".company_click").css("border-bottom","2px solid #f2f2f2");
            $(".team_click").css("border-bottom","none");
            $(".advt_click").css("border-bottom","none");
            $(".us_click").css("border-bottom","none");
            $(".aboutus_company").show();
            $(".aboutus_team").hide();
            $(".aboutus_advt").hide();
            $(".aboutus_us").hide();
        });
    }

})();