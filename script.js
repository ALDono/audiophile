const btnHamburger = document.getElementById("btnHamburger");
    const navigationLinks = document.querySelector("#shopLinksNav")
    let navActive = false;
    btnHamburger.addEventListener("click", function(){
      if(navActive === false){
        navActive = true;
        navigationLinks.style.display = "flex";
      }else{
        navActive = false;
        navigationLinks.style.display = "none";
      }
    })