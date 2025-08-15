
 $(window).scroll(function(){
            let top = $(window).scrollTop();
            // console.log("scrollTop :" , top) 2100
            if(top >= 3800){
                $(".mouse").css({"display" : "none"})
            }else{
               $(".mouse").css({"display" : "block"})
            }
        })//

    