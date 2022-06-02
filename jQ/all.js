$(document) .ready(function(){

    // TOP
    $('.back_top').click(function () { 

        $('html , body').animate({ scrollTop:0 } , 500); 
    });


    // 輪播...做不出來，只能做點，點點變化

    $(".comment_page").click(function(e){
        e.preventDefault();

        $(this).addClass('comment_page_on');
        $(this).parent().siblings().find('a').removeClass("comment_page_on");
        
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