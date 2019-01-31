/*-----------------------Slides-----------------------*/
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

/*-----------------------Togl-----------------------*/
let toglStatu = false;

let myTogl = function(){
  let gethomnav = document.querySelector(".hom-navim");
  let gethomnavfirst = document.querySelector(".hom-nav-first");
  let gethomnavlast = document.querySelector(".hom-nav-last");
  // for ikon
  let getLine1 = document.querySelector(".lineOne");
  let getLine2 = document.querySelector(".lineTwo");
  let getLine3 = document.querySelector(".lineThree");

  if(toglStatu === false){
    gethomnavfirst.style.visibility= "visible";
    gethomnavlast.style.visibility= "visible";
    gethomnav.style.height= "auto";

    toglStatu = true;
    // for ikon
    getLine1.style.transform= "rotate(-45deg) translate(-6px, 6px)";
    getLine2.style.opacity= "0";
    getLine3.style.transform= "rotate(45deg) translate(-4px, -4px)";
  }
  else if(toglStatu === true){
    gethomnavfirst.style.visibility= "hidden";
    gethomnavlast.style.visibility= "hidden";    
    gethomnav.style.height= "55px";

    toglStatu = false;
     // for ikon
     getLine1.style.transform= "rotate(0) translate(0, 0)";
     getLine2.style.opacity= "1";
     getLine3.style.transform= "rotate(0) translate(0, 0)";
   }
}
