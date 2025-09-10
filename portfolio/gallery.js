// === Dark/Light Mode Toggle ===
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
        "/portfolio/page-10/Images for Page 10/Zines Themselves/ZInes (Images)_Page_01.jpg",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/ZInes (Images)_Page_02.jpg",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/ZInes (Images)_Page_03.jpg",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/ZInes (Images)_Page_07.jpg",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/ZInes (Images)_Page_08.jpg",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/ZInes (Images)_Page_09.jpg",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/ZInes (Images)_Page_10.jpg",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/ZInes (Images)_Page_11.jpg",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/ZInes (Images)_Page_12.jpg",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/ZInes (Images)_Page_13.jpg",
        "/portfolio/page-10/Images for Page 10/Zines Themselves/ZInes (Images)_Page_15.jpg"
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
