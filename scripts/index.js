function openBox(image){
    var fullImage = document.getElementById("fullImage");
    // var imgDescription = document.getElementById("imgDescription");
    fullImage.src = image.src;
    if(image.alt === 'tallImage' && screen.width < 767){
        $('#fullImage').css({"height" : "98%", "width" : "80%" , "margin" : "5px auto"});
    }
    if(image.alt === 'tallImage' && screen.width > 767){
        $('#fullImage').css({"height" : "98%", "width" : "30%" , "margin" : "5px auto"});
    }
    if(image.alt === 'wideImage' && screen.width < 767){
        $('#fullImage').css({"height" : "60%", "width" : "90%" , "margin" : "150px auto"});
    }
    if(image.alt === 'wideImage' && screen.width > 767){
        $('#fullImage').css({"height" : "80%", "width" : "70%" , "margin" : "50px auto"});
    }
    if(image.alt === 'mediumImage' && screen.width < 767){
        $('#fullImage').css({"height" : "40%", "width" : "90%" , "margin" : "100px auto"});
    }
    if(image.alt === 'mediumImage' && screen.width > 767){
        $('#fullImage').css({"height" : "60%", "width" : "60%" , "margin" : "100px auto"});
    }
    // imgDescription.innerText = image.alt;
    fullImage.parentElement.style.display = "block";
}


$(window).scroll(function () {
    $('.anim').each(function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        if( elementBottom > viewportTop && elementTop < viewportBottom){
            $(this).addClass("animation");
        }else{
            $(this).removeClass("animation");
        }
    });
});



// function myFunction(){
//     if (screen.width <= 768) { 
//         $('#hours-section-logo').attr("src","../images/Capture.JPG");   
//     }   
//     else{
//         $('#hours-section-logo').attr("src","../images/Untitled-1_company_logo.png");
//     }  
// }


$(window).on("load",function() {
    $("#container").css("display", "none");
  });


$("#dropdown").on("click" , function (){
    $("#dropdown-list").toggle();
})





