// === Dark/Light Mode Toggle ===
const darkModeButton = document.querySelector("#dark-mode");
const lightModeButton = document.querySelector("#light-mode");

darkModeButton?.addEventListener("click", () => {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    console.log("Dark mode activated");
});

lightModeButton?.addEventListener("click", () => {
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
    return document.getElementById("userInput")?.value;
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

// === Simple Lightbox for .image-text-pair images ===
document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.createElement("div");
    overlay.classList.add("image-lightbox-overlay");
    const overlayImg = document.createElement("img");
    overlay.appendChild(overlayImg);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => {
        overlay.classList.remove("active");
    });

    document.querySelectorAll(".image-text-pair img").forEach((img) => {
        img.style.cursor = "zoom-in";
        img.addEventListener("click", () => {
            overlayImg.src = img.src;
            overlay.classList.add("active");
        });
    });
});

// === Interactive Gallery with Captions ===
function initInteractiveGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    let overlay = document.querySelector('.gallery-overlay');

    // Create overlay if it doesn't exist
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.classList.add('gallery-overlay');
        overlay.innerHTML = `
            <div class="overlay-content">
                <img id="overlay-img" src="" alt="">
                <div id="overlay-caption"></div>
            </div>
        `;
        document.body.appendChild(overlay);
    }

    const overlayImg = overlay.querySelector('#overlay-img');
    const overlayCaption = overlay.querySelector('#overlay-caption');

    // Show image in overlay when clicking gallery item
    galleryItems.forEach(img => {
        img.addEventListener('click', () => {
            overlayImg.src = img.src;
            overlayImg.alt = img.alt || '';
            overlayCaption.textContent = img.alt || '';
            overlay.classList.add('active');
        });
    });

    // Close overlay when clicking anywhere in overlay
    overlay.addEventListener('click', (e) => {
        overlay.classList.remove('active');
    });

    // Press ESC to close overlay
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            overlay.classList.remove('active');
        }
    });
}

// Initialize after DOM is ready
document.addEventListener('DOMContentLoaded', initInteractiveGallery);
