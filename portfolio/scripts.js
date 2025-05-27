// Dark/Light Mode Toggle
const darkModeButton = document.querySelector("#dark-mode");
const lightModeButton = document.querySelector("#light-mode");

darkModeButton?.addEventListener("click", function () {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    console.log("Dark mode activated");
});

lightModeButton?.addEventListener("click", function () {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    console.log("Light mode activated");
});

// Test Variables (for dev/testing)
let a = "letter a";
// document.write(a); // Not recommended
let car = "lambo";

// Set text in an input field if it exists
let test = "hello";
const mytext = document.getElementById("mytext");
if (mytext) {
    mytext.value = test;
}

// Return input value from a field if it exists
function returnText() {
    let input = document.getElementById("userInput")?.value;
    return input;
}

// Gallery Hover Overlay Script
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlay-img");
const galleryItems = document.querySelectorAll(".gallery-item img");

galleryItems.forEach((img) => {
    img.addEventListener("mouseenter", () => {
        overlayImg.src = img.src;
        overlay.style.transform = "translateY(0)";
        overlay.style.opacity = "1";
    });

    img.addEventListener("mouseleave", () => {
        overlay.style.transform = "translateY(-100%)";
        overlay.style.opacity = "0";
    });
});
