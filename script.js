const btnHamburger = document.querySelector("#btnHamburger");
const navigationLinks = document.querySelector("#shopLinksNav");
const darken = document.querySelector("#darken");
let navActive = false;
btnHamburger.addEventListener("click", function(){
  if(navActive === false){
    navActive = true;
    navigationLinks.style.display = "flex";
    darken.style.display = "block";
  }else{
    navActive = false;
    navigationLinks.style.display = "none";
    darken.style.display = "none";
  }
})

darken.addEventListener("click",function(){
  navActive = false;
  navigationLinks.style.display = "none";
  darken.style.display = "none";
})