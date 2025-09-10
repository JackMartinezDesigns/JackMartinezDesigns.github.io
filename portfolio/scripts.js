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

document.addEventListener("DOMContentLoaded", function () {
    // Array of images in your gallery
    const galleryImages = [
        "/portfolio/page-10/Images for Page 10/Zines Themselves/8-Fold Mutual Aid Zine.jpg",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/IMG_0329.jpeg",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/IMG_4490.png",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/Jack Martinez-Documentation Book-Letterpress Printing.jpeg",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/Jack Martinez-Documentation Book-Pamphlets + Collaborative Book.jpeg",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/Jack Martinez-Documentation Book-Zines 2.jpeg",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/Jack Martinez-Documentation Book-Zines.jpeg",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/Mutual Aid Zine.png",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/Scavenger Hunt Zine.png",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/Snow Zine Reverse-01.jpg",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/Snow Zine-01.jpg",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/Snow Zine-02.jpg",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/Snow Zine-03.jpg",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/Snow Zine-04.jpg",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/Snow Zine-05.jpg",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/Snow Zine-06.jpg",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/Snow Zine-07.jpg",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/Snow Zine-08.jpg",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/Snow Zine-09.jpg",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/Snow Zine-10.jpg",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/Snow Zine-11.jpg",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/Snow Zine-12.jpg",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/Snow Zine-13.jpg",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/Snow Zine-14.jpg",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/Snow Zine-15.jpg"
    ];

    let currentIndex = 0;
    const galleryImage = document.getElementById("galleryImage");

    galleryImage.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % galleryImages.length; // cycle
        galleryImage.src = galleryImages[currentIndex];
    });
});

document.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        galleryImage.src = galleryImages[currentIndex];
    }
    if (e.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        galleryImage.src = galleryImages[currentIndex];
    }
});
