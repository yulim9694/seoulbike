$(function(){

    // 모바일

    // 모바일메뉴버튼 : 메뉴 아래로 슬라이드 + 메뉴 모양 변경

    $('.menu_btn').click(function(){
        $('nav').slideToggle(300);
        $(this).toggleClass('close');
    });

    $('nav .after').click(function(){
        $('nav').slideUp(300);
        $('.menu_btn').removeClass('close');
    });
    $(window).on("scroll", function(){
        $('nav').slideUp(300);
        $('.menu_btn').removeClass('close');
    }); //이게 맞는지 물어보기!


    // 배너 이미지 : 페이드인아웃
    let currentIndex = 0;

    setInterval(function(){
        let nextIndex = (currentIndex + 1) % 2; // 1 0 1 0

        $(".slider").eq(currentIndex).fadeOut(1000);
        $(".slider").eq(nextIndex).fadeIn(1000);

        currentIndex = nextIndex
    }, 6000);

    // intro : 스크롤시 애니메이션 주기
    
    AOS.init({
        duration: 2000,
    });


    // usage :  

    // 1. 모바일 : 스와이프 만들기
    
    function $swiper(){
        let swiper = new Swiper('.usage .swiper', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },  
        });
    }
    $swiper();
    
    

    // 2-1. pc : 스크롤 fix

    
    $(window).on("scroll", function() {
        let scr = $(this).scrollTop();
        let fixStart = $(".usage").offset().top;
        let fixEnd = $(".safety").offset().top - $(window).height();
        if(scr >= fixStart && scr < fixEnd) {
            $(".usage .pin").css({
                "position" : "fixed",
                "top" : 0,
                "left" : 0
            });
            
            let scrIndex = Math.round((scr - fixStart) / $(window).height());
            
            // if(scrIndex === 0) {
                
            // } else if(scrIndex === 1){
                
            // } else if(scrIndex === 2){
                
            // } else if(scrIndex === 3){
                
            // }
            
            let uImg = $('.usage .pin .u_wrap .u_img div');
            let uBnt = $('.usage .pin .u_wrap .u_btn ul li');
            $(uImg).eq(scrIndex).fadeIn().siblings().fadeOut();
            $(uBnt).eq(scrIndex).addClass("active").siblings().removeClass("active");

        } else if(scr >= fixEnd){
            $(".usage .pin").css({
                "position" : "absolute",
                "top" : "unset",
                "bottom" : 0,
                "left" : 0
            });
        } else if(scr < fixStart) {
            $(".usage .pin").css({
                "position" : "static",
                "top" : "unset",
                "bottom" : "unset",
                "left" : "unset"
            });
        }
    });

    // 2-2. pc : 클릭 해당요소 보이기

    let uBtn = $('.usage .u_wrap .u_btn ul li');
    let uImg = $('.usage .u_wrap .u_img div');

    uImg.hide().eq(0).show();
    uBtn.click(function(){
        const index = $(this).index();

        $(this).addClass("active").siblings().removeClass("active");
        uImg.eq(index).fadeIn().siblings().fadeOut();
    });

});