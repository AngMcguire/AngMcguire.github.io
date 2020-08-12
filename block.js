var slideIndex = 1;
showSlides(slideIndex);
var x = window.matchMedia("(max-width: 1000px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes





function myFunction(x) {
  if (x.matches) {
    document.getElementById("home").style.color="blue";
    var stylesheet=document.getElementById("sheet");
    stylesheet.href="block.css";

    /* Change Prof-review Slides*/
    document.getElementsByClassName("review-title").className="review-title fade";
    var profreviews =document.getElementsByClassName("prof-review");
    for (var i=0;i<profreviews.length;i++){
      profreviews[i].style.display="none";
    }
    //document.getElementsByClassName("review-subgrid").style.display="none";
    document.getElementById("third-dot").style.display="inline-block";



    profSlides(0);
    slideIndex=1;
    showSlides(1);
    // If media query matches
  } else {
    document.getElementById("home").style.color="";
    var stylesheet=document.getElementById("sheet");
    stylesheet.href="index.css";
    document.getElementById("third-dot").style.display="none";
    document.getElementById("review-subgrid").style.display="block";
    profSlides(1);
    slideIndex=1
    showSlides(1);

  }
}

function showSlides(n){
  var reviewlist = document.getElementsByClassName("review-entry");
  var i;
  for (i = 0; i < reviewlist.length; i++) {
      reviewlist[i].style.display = "none";
  }

if (document.getElementById("home").style.color=="blue"){
  if (n > reviewlist.length) {n-= reviewlist.length}
  if (n < 1) {n += reviewlist.length}
  reviewlist[n-1].style.display = "inline-grid";

}else{
  for (i=0;i<2;i++){
    if (n > reviewlist.length) {n-= reviewlist.length}
    if (n < 1) {n += reviewlist.length}
    reviewlist[n-1].style.display = "inline-grid";
    n++;
  }
  slideIndex++;
}


}
function plusSlides(n){
  var reviewlist = document.getElementsByClassName("review-entry");


if (n<0){
  if (document.getElementById("home").style.color=="blue"){
    slideIndex=slideIndex-1;
  }else {
    slideIndex=slideIndex-3;
  }
}else {
  slideIndex++;
}
console.log(slideIndex);

  if (slideIndex > reviewlist.length) {slideIndex-= reviewlist.length}
  if (slideIndex < 1) {slideIndex += reviewlist.length}
  console.log(slideIndex);
  showSlides(slideIndex);
}


function profSlides(n){
  var reviewTitle=document.getElementById("review-title");
  console.log(reviewTitle.length);
  var reviewlist = document.getElementsByClassName("prof-review");
  console.log(n);
  var dots = document.getElementsByClassName("dot");
  console.log(dots.length);


if (document.getElementById("home").style.color=="blue"){
  reviewTitle.style.display="none";
}else {
  reviewTitle.style.display="block";
}

  dots[2].className=("dot");
  for (i = 0; i < reviewlist.length; i++) {
      reviewlist[i].style.display = "none";
      dots[i].className=("dot");
  }

if (n==0){
  reviewTitle.style.display = "block";
  dots[0].className += " active";
}else if (n==1){
  document.getElementById("review-subgrid").style.display="block";
  reviewlist[0].style.display = "block";
  dots[1].className += " active";
}else if (n==2){
  document.getElementById("review-subgrid").style.display="block";
  reviewlist[1].style.display = "block";
  dots[2].className += " active";
}
}
