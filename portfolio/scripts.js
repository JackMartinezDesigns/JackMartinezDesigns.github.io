// === Dark/Light Mode Toggle ===
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

// === Set test value in input (if present) ===
const mytext = document.getElementById("mytext");
if (mytext) {
    mytext.value = "hello";
}

// === Return input value from field (if needed elsewhere) ===
window.returnText = function () {
    const input = document.getElementById("userInput")?.value;
    return input;
};

// === Image Switcher ===
document.querySelectorAll(".image-switcher").forEach((switcher) => {
    const imageElement = switcher.querySelector("img");
    const imageList = switcher.dataset.images.split(",");
    let index = 0;

    switcher.addEventListener("click", () => {
        index = (index + 1) % imageList.length;
        imageElement.src = imageList[index];
    });
});

// === Gallery Hover Overlay with Caption ===
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlay-img");
const overlayCaption = document.getElementById("overlay-caption");
const galleryItems = document.querySelectorAll(".gallery-item img");

galleryItems.forEach((img) => {
    img.addEventListener("mouseenter", () => {
        overlayImg.src = img.src;
        overlayImg.alt = img.alt;
        overlayCaption.textContent = img.alt;
        overlay.classList.add("active");
    });

    img.addEventListener("mouseleave", () => {
        overlay.classList.remove("active");
    });
});