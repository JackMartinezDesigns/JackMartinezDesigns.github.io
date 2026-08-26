let slideIndex = 1;

showSlides(slideIndex);

// Next / previous controls
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
    let captions = document.getElementsByClassName("myCaption");

    // Loop back to first slide
    if (n > slides.length) {
        slideIndex = 1;
    }

    // Loop to last slide
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove active state from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Hide all captions
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }

    // Show current slide
    slides[slideIndex - 1].style.display = "block";

    // Activate current dot
    dots[slideIndex - 1].className += " active";

    // Show current caption
    captions[slideIndex - 1].style.display = "block";
}