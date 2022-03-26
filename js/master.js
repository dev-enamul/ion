 var menuIconWidth = $(".menu_icon").outerWidth();
 var menutextWidth = $(".close_btn").outerWidth();
 var subMenuOneWidth = $(".sub_menu_1_item").outerWidth();
  
  $(".sub_menu").css("left",menutextWidth);
  $(".sub_menu_2").css("left",subMenuOneWidth);

  var countClick = 1;
 
  $(".close_btn, .close_icon").click(function(){
      if(countClick == 0){
        $(".menu_text").animate({
            opacity: '0',
            left:'-10px'
              });
            countClick = 1;
      }else{
        $(".menu_text").animate({
            opacity: '100%',
            left:menuIconWidth
             });
            countClick = 0;
      }
      
  });

   
 
 
 