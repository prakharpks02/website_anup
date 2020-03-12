function parallax(){
    var tie = document.getElementById('tie');
    var deathstar = document.getElementById('deathstar');
    
    tie.style.top = (window.pageYOffset / 3) + 'px';
    tie.style.left = -(window.pageYOffset / 2) + 'px';
    deathstar.style.top = -(window.pageYOffset / 3) + 'px';
    deathstar.style.right = -(window.pageYOffset) + 'px';
  }
  
  window.addEventListener("scroll", parallax, false);