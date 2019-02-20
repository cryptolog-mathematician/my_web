document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#digerilgi').addEventListener('click', function(e){
    e.preventDefault();
    if (document.querySelector('#dilgi').type=="text") {
      document.querySelector('#dilgi').type="hidden";
    } else {
        document.querySelector('#dilgi').type="text";
      }
  })
  document.querySelector('#digerbeceri').addEventListener('click', function(e){
    e.preventDefault();
    if (document.querySelector('#dbeceri').type=="text") {
      document.querySelector('#dbeceri').type="hidden";
    } else {
        document.querySelector('#dbeceri').type="text";
      }
  })
  //-------------RESET-----------------
  document.querySelector('#reset').addEventListener('click', function(){
    document.getElementById("dilgi").value="";
    document.getElementById("dbeceri").value="";
    document.getElementById("dilgi").type="hidden";
    document.getElementById("dbeceri").type="hidden";
  })
})


//-----------------myTogl----------------------
let toglStatu = true;

document.querySelector('#togl').addEventListener('click', function(){
  let gethomnav = document.querySelector(".hom-navim");
  let gethomnavfirst = document.querySelector(".hom-nav-first");
  let gethomnavlast = document.querySelector(".hom-nav-last");
  // for ikon
  let getLine1 = document.querySelector(".lineOne");
  let getLine2 = document.querySelector(".lineTwo");
  let getLine3 = document.querySelector(".lineThree");

  if(toglStatu === true){
    gethomnavfirst.style.visibility= "visible";
    gethomnavlast.style.visibility= "visible";
    gethomnav.style.height= "auto";

    toglStatu = false;
    // for ikon
    getLine1.style.transform= "rotate(-45deg) translate(-6px, 6px)";
    getLine2.style.opacity= "0";
    getLine3.style.transform= "rotate(45deg) translate(-4px, -4px)";
  }
  else if(toglStatu === false){
    gethomnavfirst.style.visibility= "hidden";
    gethomnavlast.style.visibility= "hidden";
    gethomnav.style.height= "55px";

    toglStatu = true;
    // for ikon
    getLine1.style.transform= "rotate(0) translate(0, 0)";
    getLine2.style.opacity= "1";
    getLine3.style.transform= "rotate(0) translate(0, 0)";
  }
})
