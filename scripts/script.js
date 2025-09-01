// Slide Script: Slightly modified sample slides code from W3Schools
let slideIndex = 1;
let slideDiv = "featured-slide";
let slideDisplay = "flex";

try{
    showSlides(slideIndex);
}
catch (err){
    //do nothing
}

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}
function nextSlide(){
    plusSlides(1);
}
function prevSlide(){
    plusSlides(-1);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName(slideDiv);
    if (n > slides.length) {slideIndex = 1}                     //; Wraps/Loops back to first slide
    if (n < 1) {slideIndex = slides.length}                     //; Wraps/Loops to the last slide
    for (i = 0; i < slides.length; i++) {                       //; set display = none to all
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = slideDisplay;          //; set display block to the slide index
} 