var images = Array.from(document.querySelectorAll(".images img"));
let boxTitle = document.getElementById("boxTitle");
let boxParent = document.getElementById("boxParent");
var numberImg;
//  slider
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function (e) {
    var imgSrc = e.target;
    numberImg = images.indexOf(e.target);
    boxParent.style.display = "flex";
    clickSrc = imgSrc.getAttribute("src");
    boxTitle.style.backgroundImage = `url(${clickSrc})`;
  });
}
function prev() {
  numberImg = numberImg - 1;
  if (numberImg < 0) {
    numberImg = images.length - 1;
  }
  var prev = images[numberImg].getAttribute("src");
  boxTitle.style.backgroundImage = `url(${prev})`;
}
function next() {
  numberImg = numberImg + 1;
  if (numberImg == images.length) {
    numberImg = 0;
  }
  var next = images[numberImg].getAttribute("src");
  boxTitle.style.backgroundImage = `url(${next})`;
}
function closeNone() {
  boxParent.style.display = "none";
}
document.addEventListener("keydown", function (e) {
  if (e.code == "Escape") {
    closeNone();
  }
  if (e.code == "ArrowRight") {
    next();
  }
  if (e.code == "ArrowLeft") {
    prev();
  }
});
// endSlider
$(window).scroll(function () {
  let nav = $("#navBar").offset().top;
  let iconJs = document.getElementById("iconJs");
  let h3Nab = $("#h3Nab").offset().top;
  let homeTwo = $("#homeTwo").offset().top;
  let imgMar = $("#imgMar").offset().top;
  let Facilities = $("#Facilities").offset().top;
  // opacity section homeTwo
  if (nav >= h3Nab - 75) {
    $("#navBar").css("backgroundColor", "rgba(0,0,0,0.7)");
    $("#homeTwo").css("opacity", "1");
    $(".nav-link").css("padding-right", "20px");
    $(".iconUpPadge").css("display" , "flex");
    iconJs.src = "../img/bakery-color.png";
  } else {
    $("#navBar").css("backgroundColor", "#8e7754");
    $("#homeTwo").css("opacity", "0");
    iconJs.src = "../img/bakery-light-1.png";
    $(".nav-link").css("padding-right", "0px");
    $(".iconUpPadge").css("display" , "none");

  }
  //   ******* end opacity section homeTwo
  // opacity section homeThree
  if (nav >= homeTwo + 50) {
    $("#three").css("opacity", "1");
  } else {
    $("#three").css("opacity", "0");
  }
  // end opacity section homeThree
  // margin AboutOne
  if (nav >= imgMar) {
    $(".mAbout").css("margin-left", "0px");
  } else {
    $(".mAbout").css("margin-left", "5000px");
  }
  // changeNumberh
  if(nav > Facilities ){
 
  }
  else{
    upNumber()


  }
});
 

// readyDocument
$(document).ready(function () {
  $(".tall-stack").fadeOut(2000, function () {
    $(".loader").fadeOut(1000, function () {
      $("#navBar").css("display", "flex");
      $(".brd , #settingParent").css("opacity", "1");
      $("#mood").css("display", "flex");
      $("body , html").css("overflow-y", "auto");
    });
  });
});
// changeColor
let boXColor = $(".colorDiv");
boXColor.eq(0).css("backgroundColor", "white");
boXColor.eq(1).css("backgroundColor", "green");
boXColor.eq(2).css("backgroundColor", "yellow");
boXColor.eq(3).css("backgroundColor", "blue");
boXColor.click(function () {
  let color = $(this).css("backgroundColor");
  $("  h1 , h2 , h3 , h4 , h5 , h6 ").css("color", color);
});
let left = document.getElementById("left");
var settingParent = document.getElementById("settingParent");
var outers = $("#outer").outerWidth();
settingParent.style.left = `-${outers}px`;
left.addEventListener("click", function () {
  if ($("#settingParent").css("left") == "0px") {
    settingParent.style.left = `-${outers}px`;
  } else {
    settingParent.style.left = "0px";
  }
});
// ******
// changeNumberUp
function upNumber(){
  let count  = 0;
  let countOne = 0;
  let countThree = 0;
  let countFour = 0 
  let page1 = document.getElementById("page1");
  let Home2 = document.getElementById("Home2");
  let fire3 = document.getElementById("fire3");
  let comment4 = document.getElementById("comment4");
  let countInterval = setInterval(() => {
   count++ ; 
   page1.innerHTML = count 
    if (count == "1523") {
      clearInterval(countInterval);
    }
  }, 1);
  // ****
  let countInterval2 = setInterval(() => {
    countOne ++ ; 
    Home2.innerHTML = countOne 
     if (countOne == "1698") {
       clearInterval(countInterval2);
     }
   }, 1);
  //  *******
  let countIntervalThree =setInterval(()=>{
    countThree ++ ;
  fire3.innerHTML = countThree;
  if(countThree == 1534){
    clearInterval(countIntervalThree)
  }
  } , 1)
  // ****
  let countIntervalFour = setInterval(()=>{
    countFour ++ 
    comment4.innerHTML= countFour ;
    if(countFour == 1723){
      clearInterval(countIntervalFour)
    }
  
  
  } , 1)



}
 


// ********
clickMood.addEventListener("click", function () {
  var mood = document.getElementById("mood");
  var iconeMood = $("#iconeMood").outerWidth();
  if ($("#mood").css("left") == "0px") {
    mood.style.left = `-${iconeMood}px`;
  } else {
    mood.style.left = `0px`;
  }
});
// mode

function darkMode() {
  $(
    "body , html , #aboutTwo , #Gallery , #Contact , .footerOne , .footerTwo , #three ,.AboutTwo"
  ).css("backgroundColor", "black");
  $("h1 ,h2 ,h3,h4 ,span").css("color", "white");
}
function lightMode() {
  $(
    "body , html , #aboutTwo , #Gallery , #Contact , .footerOne , .footerTwo , #three ,.AboutTwo"
  ).css("backgroundColor", "white");
  $("h1 ,h2 ,h3,h4 ,span").css("color", "black");
}
