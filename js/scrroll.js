$(function(){




})//jquery

$(window).scroll(function(){

    var nowScroll = $(window).scrollTop();

    let txt = $(".scroll").text(nowScroll);

    $(".world").css({"background-position" : -1*nowScroll })

    if(nowScroll >= 500){
        $(".title").addClass("show")
    }else{
        $(".title").removeClass("show")

    }

})//scroll