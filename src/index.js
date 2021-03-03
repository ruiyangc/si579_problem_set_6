/*
* SI579 001 WN21
* PS6 - Webpack
* Ruiyang Chang (ruiyangc)
* 03/03/2021
*/
// import * as moment from 'moment';
/*
* Event Listeners 1: Dark Mode
*/
const divButton = document.getElementById("dark-switch");
divButton.addEventListener("change", darkMode);

function darkMode(){
    let element = document.body;
    element.classList.toggle("dark-mode");
    let text = document.getElementById("dark-on/off");
    if (text.innerHTML === "Light") {
        text.innerHTML = "Darkness";
    } else {
        text.innerHTML = "Light";
    }
}

/*
* Event Listeners 2: Collapse
*/
let coll = document.getElementsByClassName("collapsible");

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", collapse);
}

function collapse(){
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

/*
* Event Listeners 3: Mouseover & Mouseout
*/
let task = document.getElementById("task");
task.addEventListener("mouseover", taskMouse);
task.addEventListener("mouseout", taskMouse);

function taskMouse(){
    const text = document.getElementById("task").textContent;
    if (text === "Assignment Task List") {
        document.getElementById("task").textContent = "Please See Here For A List Of My Works & Descriptions";
    }
    else {
        document.getElementById("task").textContent = "Assignment Task List";
    }
}

let carousel = document.getElementById("carousel");
carousel.addEventListener("mouseover", CarouselMouse);
carousel.addEventListener("mouseout", CarouselMouse);

function CarouselMouse(){
    const text = document.getElementById("carousel").textContent;
    if (text === "Image Carousel") {
        document.getElementById("carousel").textContent = "Final Fatansy XIV ENDWALKER Media";
    }
    else {
        document.getElementById("carousel").textContent = "Image Carousel";
    }
}


/*
* Optional: Image Carousel
*/
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/*
* PS5 Function 1: Current time
*/
var myVar = setInterval(Timer, 1000);
var moment = require('moment');

function Timer() {    
    document.getElementById("countdown").innerHTML = "Release " + moment("20210830", "YYYYMMDD").fromNow();
    document.getElementById("currentTime").innerHTML = moment().format("DD-MM-YYYY hh:mm:ss A");

}