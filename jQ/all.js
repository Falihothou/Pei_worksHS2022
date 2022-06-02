$(document) .ready(function(){

    // TOP
    $('.back_top').click(function () { 

        $('html , body').animate({ scrollTop:0 } , 500); 
    });

    // 輪播...做不出來，只能做點，點點變化

    // $(".comment_page").click(function(e){
    //     e.preventDefault();

    //     $(this).addClass('comment_page_on');
    //     $(this).parent().siblings().find('a').removeClass("comment_page_on");
        
    // });

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

// 感謝助教提供的大法好
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