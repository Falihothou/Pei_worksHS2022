$(document) .ready(function(){

    // TOP
    $('.back_top').click(function () { 

        $('html , body').animate({ scrollTop:0 } , 500); 
    });


    // 輪播...做不出來，只能做點，點點變化
    // 原本點點是用ul>li做，但class下在a，.siblings兄弟曾選不到包在另一個li內的a連結，又因為a連結是色塊沒圖，如果class下在li就點擊不到東西Q口Q，只好換成div>a

    $(".comment_page").click(function(e){
        e.preventDefault();

        $(this).addClass('comment_page_on');
        $(this).siblings().removeClass("comment_page_on");
        
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