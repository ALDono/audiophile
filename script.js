const btnHamburger = document.getElementById("btnHamburger");
    const navigationLinks = document.getElementById("navigationLinks");
    let navActive = false;
    btnHamburger.addEventListener("click", function(){
      if(navActive === false){
        navActive = true;
        navigationLinks.style.display = "block";
      }else{
        navActive = false;
        navigationLinks.style.display = "none";
      }
    })