$(document) .ready(function(){

    // TOP
    $('.back_top').click(function () { 

        $('html , body').animate({ scrollTop:0 } , 500); 
    });


    //選擇方案
    $('.cost_classList li a').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('cost_class_on');
        $(this).parent().siblings().find('a').removeClass('cost_class_on');
        if ($(this).text() == '>25000位') {
            const regex2 = /\>\d{5}/;
            const match2 = $(this).text().match(regex2);
            $('.highlight p').text(match2[0]);
            $('.month_base p').text('200');
            $('.month_pro p').text('1200');
        } else {
            const regex = /\d{5}/;
            const match = $(this).text().match(regex);
            $('.highlight p').text(match[0]);
            if (match[0] == '10000 ') {
                $('.month_base p').text('600');
                $('.month_pro p').text('1600');
            } else if (match[0] == '15000') {
                $('.month_base p').text('500');
                $('.month_pro p').text('1500');
            } else if (match[0] == '20000') {
                $('.month_base p').text('400');
                $('.month_pro p').text('1400');
            } else if (match[0] == '25000') {
                $('.month_base p').text('300');
                $('.month_pro p').text('1300');
            }
        }
    });



    // QA 網路上找的方法
    $(".QA_title").click(function(e){
        e.preventDefault();

        $(this).find("a")
        .toggleClass('active'); 
        

        var x =  $(this).find("p")
        if( x.css("display") == "none"  ){
            x.slideDown(); 
        }else{
            x.slideUp();
        };

        var x =  $(this).find(".icon_plus")
        if( x.css("display") == "block"  ){
            x.hide(); 
        }else{
            x.show();
        };

        var x =  $(this).find(".icon_minus")
        if( x.css("display") == "none"  ){
            x.show(); 
        }else{
            x.hide();
        };

    });

})




// 感謝校長與助教提供的大法好
function initSwiper() {
    /* 
    id="comment-swiper" 區塊是我想要使用 swiper 套件的範圍
    要抓取 id "#comment-swiper"
    */
    const swiper = new Swiper("#comment-swiper", {
      /*  預設要顯示幾個卡片 */
    slidesPerView: 1,
      /* 斷點設定 */
    breakpoints: {
        /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
        992: {
        slidesPerView: 3
        },
        /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
        767: {
        slidesPerView: 2
        },
        /* 更小時都顯示 1 欄 */
        0: {
        slidesPerView: 1
        }
    },
      /* 卡片元素的間隔 */
    spaceBetween: 16,
    pagination: {
        /* 我想將分頁圓點綁在哪個 class */
        el: ".swiper-pagination",
        /* 將輪播設定為可以點擊分頁圓點來切換圖片 */
        clickable: true
    }
    });
}

  /* 觸發自己定義的函式 */
initSwiper();