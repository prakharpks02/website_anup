function on() {
    document.getElementById("homeOverlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("homeOverlay").style.display = "none";
  }



  // function green(){
  //   document.getElementById("greenButton").style.backgroundColor = "green";
  // }


  $('#step-menu li').on('click', function() {  
    $("#step-menu li.active").removeClass('active');
   
   $(this).addClass('active');
 })