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

// === Gallery Overlay with Caption (Desktop + Mobile) ===
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlay-img");
const overlayCaption = document.getElementById("overlay-caption");
const galleryItems = document.querySelectorAll(".gallery-item img");

// Open overlay on click (works for mobile & desktop)
galleryItems.forEach((img) => {
    img.addEventListener("click", () => {
        overlayImg.src = img.src;
        overlayImg.alt = img.alt;
        overlayCaption.textContent = img.alt;
        overlay.classList.add("active");
    });
});

// Close overlay when clicking anywhere outside the image
overlay.addEventListener("click", (e) => {
    if (!overlayImg.contains(e.target)) {
        overlay.classList.remove("active");
    }
});

// Optional: Press ESC to close overlay (desktop only)
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        overlay.classList.remove("active");
    }
});

// for image expands: 
document.addEventListener('DOMContentLoaded', () => {
    // Create lightbox overlay
    const overlay = document.createElement('div');
    overlay.classList.add('image-lightbox-overlay');
    const overlayImg = document.createElement('img');
    overlay.appendChild(overlayImg);
    document.body.appendChild(overlay);

    // Close overlay on click
    overlay.addEventListener('click', () => {
        overlay.classList.remove('active');
    });

    // Make all images in .image-text-pair clickable
    document.querySelectorAll('.image-text-pair img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => {
            overlayImg.src = img.src;  // use the same src
            overlay.classList.add('active');
        });
    });
});
