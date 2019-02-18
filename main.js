//document.addEventListener('DOMContentLoaded', function(){
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

  //-----------------------------------ADD Comments---------------
  var cmnts = [];
  function takeAllComments(){
    if (localStorage.AllComments) {
      cmnts = JSON.parse(localStorage.AllComments);
      for (var i = 0; i < cmnts.length; i++) {
        prepareCommentsHtmlCss(cmnts[i]);
      }
    }
  }

  document.querySelector('#addCom').addEventListener("submit", function(e){
    e.preventDefault();
    let texP=document.querySelector('#takeCom').value;
    cmnts.push(texP);

    localStorage.AllComments=JSON.stringify(cmnts);

    prepareCommentsHtmlCss(texP);
  })

  function prepareCommentsHtmlCss(texP){
    let spanDislike=document.createElement('span');
    let buttonDislike=document.createElement('button');
    let liDislike=document.createElement('li');
    let spanLike=document.createElement('span');
    let buttonLike=document.createElement('button'); //butonlara isim eklemelisin
    let liLike=document.createElement('li');
    let ulComments=document.createElement('ul');
    let like=document.createTextNode('Like');
    let dLike=document.createTextNode('Dislike');
    let divLikeDisLike=document.createElement('div');
    let spanCount=document.createElement('span');
    let count=document.createTextNode('0');
    spanCount.appendChild(count);
    let spanCountL=document.createElement('span');
    let countL=document.createTextNode('0');
    spanCountL.appendChild(countL);

    let commentP=document.createElement('p');
    let commentPDiv=document.createElement('div');

    let commentBoxDiv=document.createElement('div');

    //--addClasses--
    commentBoxDiv.classList.add('commentsBox');
    commentPDiv.classList.add('comments');
    divLikeDisLike.classList.add('commentsIcons');
    spanCount.classList.add('btnSpan');
    spanCountL.classList.add('btnSpan');
    buttonLike.classList.add('likeDislike');
    buttonDislike.classList.add('likeDislike');

    buttonDislike.style.marginLeft='10px';

    //--addElements--
    spanLike.appendChild(like);
    buttonLike.appendChild(spanLike);
    liLike.appendChild(buttonLike);
    liLike.appendChild(spanCountL);
    spanDislike.appendChild(dLike);
    buttonDislike.appendChild(spanDislike);
    liDislike.appendChild(buttonDislike);
    liDislike.appendChild(spanCount);

    ulComments.appendChild(liLike);
    ulComments.appendChild(liDislike);
    divLikeDisLike.appendChild(ulComments);

    commentP.textContent=texP;
    commentPDiv.appendChild(commentP);

    commentBoxDiv.appendChild(commentPDiv);
    commentBoxDiv.appendChild(divLikeDisLike);
    // if eklenebilir...

    let sectionRightDiv=document.querySelector('#sr');
    let insertPlace=document.querySelector('#formDiv');
    sectionRightDiv.insertBefore(commentBoxDiv, insertPlace);
  }

 //-----------------------------LIKEDISLIKE------------------------
 document.querySelector('#sr').addEventListener('click', function(e){
   if (e.target.className == 'likeDislike') {
      if(e.target.firstChild.textContent== 'Like'){
        let incrmnt= 1 + parseInt(e.target.nextSibling.textContent);
        e.target.nextSibling.textContent=incrmnt;
      }else {
        let incrmnt= 1 + parseInt(e.target.nextSibling.textContent);
        e.target.nextSibling.textContent=incrmnt;
      }
   }
 })
/*
 let likeDislike = document.getElementsByClassName('likeDislike');
 let btnspan = document.querySelectorAll('#sr .commentsIcons .btnSpan');
 document.querySelector('#sr').addEventListener('click', function(){
      let incrmnt= 1 + parseInt(btnspan[0].textContent);
      btnspan[0].textContent=incrmnt;
 })
 document.querySelector('#sr').addEventListener('click', function(){
    let incrmnt= 1 + parseInt(btnspan[1].textContent);
    btnspan[1].textContent=incrmnt;
 }) */
