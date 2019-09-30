function mouseoverBox1(){
  $(".channel__banner__live--rectangle--outside--bg--21").bind("animationEnd", function(){
    $(this).removeClass("hovered")  
  })
  
  $(".channel__banner__live--rectangle--outside--bg--21").hover(function(){
    $(this).addClass("hovered");        
  })
}

