var slideIndex = 1;
showSlides(slideIndex);

profSlides(0);


function showSlides(n){
  var reviewlist = document.getElementsByClassName("review-entry");
  var i;
  for (i = 0; i < reviewlist.length; i++) {
      reviewlist[i].style.display = "none";
  }

  for (i=0;i<2;i++){
    if (n > reviewlist.length) {n-= reviewlist.length}
    if (n < 1) {n += reviewlist.length}
    reviewlist[n-1].style.display = "inline-grid";
    n++;
  }
slideIndex++;
}
function plusSlides(n){
  var reviewlist = document.getElementsByClassName("review-entry");
if (n<0){
  slideIndex=slideIndex-3;
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
  var reviewlist = document.getElementsByClassName("prof-review");
  var dots = document.getElementsByClassName("dot");
  console.log(dots.length);
  for (i = 0; i < reviewlist.length; i++) {
      reviewlist[i].style.display = "none";
      dots[i].className=("dot");
  }
if (n==0){
  reviewlist[0].style.display = "block";
  dots[0].className += " active";
}else if (n==1){
  reviewlist[1].style.display = "block";
  dots[1].className += " active";
}
}
