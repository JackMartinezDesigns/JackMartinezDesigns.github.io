// Track the slide index for each slideshow on the page
let slideIndex = [1, 1, 1];
// Define the class names or group identifiers for each slideshow container
let slideshowId = ["slideshow-container-1", "slideshow-container-2", "slideshow-container-3"];

// If you prefer grouping by classes, we can target them by container index:
function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
    showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
    let i;
    // Find all slideshow containers on the page
    let containers = document.getElementsByClassName("slideshow-container");
    let slides = containers[no].getElementsByClassName("mySlides");
    let dots = containers[no].parentElement.getElementsByClassName("dot"); // or container-specific dots

    if (n > slides.length) { slideIndex[no] = 1; }
    if (n < 1) { slideIndex[no] = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // If your dots are grouped per slideshow section, select them properly:
    // This assumes your dots are grouped in sibling .slide-dots divs corresponding to the containers
    let dotContainers = document.getElementsByClassName("slide-dots");
    let currentDots = dotContainers[no].getElementsByClassName("dot");

    for (i = 0; i < currentDots.length; i++) {
        currentDots[i].className = currentDots[i].className.replace(" active", "");
    }

    slides[slideIndex[no] - 1].style.display = "block";
    if (currentDots[slideIndex[no] - 1]) {
        currentDots[slideIndex[no] - 1].className += " active";
    }
}

// Initialize all slideshows on page load
window.onload = function () {
    for (let i = 0; i < slideIndex.length; i++) {
        showSlides(slideIndex[i], i);
    }
};