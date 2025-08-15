$(function () {

    var check = false;

    setInterval(function () {
        if (check == true){
            $(".world").css({"background-position" : "-=10"})
        }
    }, 30)//
    
    $(".button").click(function(){
        if(check == true){
            check = false;
            $(".button").removeClass("active");
            $(".button").addClass("start");
        }else{
            check = true;
            $(".button").addClass("active");
            $(".button").removeClass("start");
        }
    })//
    
    $(window).keydown(function(e){
    //    console.log(e)
        if(e.keyCode == 65){
            $(".button").click();
        }
    })
}) //jquery

