document.addEventListener("DOMContentLoaded", function () {
    // Define galleries
    const galleries = {
        zines: [
            "/portfolio/page-10/Images for Page 10/Zines Themselves/IMG_4490.png",
            "/portfolio/page-10/Images for Page 10/Zines Themselves/Jack Martinez-Documentation Book-Letterpress Printing.jpeg",
            "/portfolio/page-10/Images for Page 10/Zines Themselves/Jack Martinez-Documentation Book-Pamphlets + Collaborative Book.jpeg",
            "/portfolio/page-10/Images for Page 10/Zines Themselves/Jack Martinez-Documentation Book-Zines 2.jpeg",
            "/portfolio/page-10/Images for Page 10/Zines Themselves/Jack Martinez-Documentation Book-Zines.jpeg",
            "/portfolio/page-10/Images for Page 10/Zines Themselves/Snow Zine Reverse-01.jpg",
            "/portfolio/page-10/Images for Page 10/Zines Themselves/Snow Zine-01.jpg",
            "/portfolio/page-10/Images for Page 10/Zines Themselves/ZInes (Images)_Page_03.jpg",
            "/portfolio/page-10/Images for Page 10/Zines Themselves/ZInes (Images)_Page_15.jpg",
            "/portfolio/page-10/Images for Page 10/Zines Themselves/ZInes (Images)_Page_13.jpg",
            "/portfolio/page-10/Images for Page 10/Zines Themselves/Scavenger Hunt Zine.png",
            "/portfolio/page-10/Images for Page 10/Zines Themselves/ZInes (Images)_Page_28.jpg",
            "/portfolio/page-10/Images for Page 10/Zines Themselves/ZInes (Images)_Page_29.jpg",
            "/portfolio/page-10/Images for Page 10/Zines Themselves/Mutual Aid Zine.png",
            "/portfolio/page-10/Images for Page 10/Zines Themselves/ZInes (Images)_Page_30.jpg",
            "/portfolio/page-10/Images for Page 10/Zines Themselves/ZInes (Images)_Page_11.jpg",
            "/portfolio/page-10/Images for Page 10/Zines Themselves/IMG_0329.jpeg",
            "/portfolio/page-10/Images for Page 10/Zines Themselves/ZInes (Images)_Page_31.jpg"
        ],
        patchworking: [
            "/portfolio/page-7/Images for Page 7/images for zine click though/Patchworks Kit Zine Stills0000.jpg",
            "/portfolio/page-7/Images for Page 7/images for zine click though/Patchworks Kit Zine Stills0001.jpg",
            "/portfolio/page-7/Images for Page 7/images for zine click though/Patchworks Kit Zine Stills0002.jpg",
            "/portfolio/page-7/Images for Page 7/images for zine click though/Patchworks Kit Zine Stills0003.jpg",
            "/portfolio/page-7/Images for Page 7/images for zine click though/Patchworks Kit Zine Stills0004.jpg",
            "/portfolio/page-7/Images for Page 7/images for zine click though/Patchworks Kit Zine Stills0005.jpg",
            "/portfolio/page-7/Images for Page 7/images for zine click though/Patchworks Kit Zine Stills0006.jpg",
            "/portfolio/page-7/Images for Page 7/images for zine click though/Patchworks Kit Zine Stills0007.jpg",
            "/portfolio/page-7/Images for Page 7/images for zine click though/Patchworks Kit Zine Stills0008.jpg",
            "/portfolio/page-7/Images for Page 7/images for zine click though/Patchworks Kit Zine Stills0009.jpg",
            "/portfolio/page-7/Images for Page 7/images for zine click though/Patchworks Kit Zine Stills0010.jpg",
            "/portfolio/page-7/Images for Page 7/images for zine click though/Patchworks Kit Zine Stills0011.jpg"
        ]
    };

    // A helper to attach cycling behavior to any gallery
    function setupGallery(imgId, imageArray) {
        let currentIndex = 0;
        const imgElement = document.getElementById(imgId);

        if (!imgElement) return; // skip if not found

        // Click to advance
        imgElement.addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % imageArray.length;
            imgElement.src = imageArray[currentIndex];
        });

        // Keyboard arrows (only active if this image has focus)
        document.addEventListener("keydown", e => {
            if (document.activeElement !== imgElement) return;

            if (e.key === "ArrowRight") {
                currentIndex = (currentIndex + 1) % imageArray.length;
                imgElement.src = imageArray[currentIndex];
            }
            if (e.key === "ArrowLeft") {
                currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
                imgElement.src = imageArray[currentIndex];
            }
        });
    }

    // Attach galleries (make sure your HTML IDs match)
    setupGallery("galleryImageZines", galleries.zines);
    setupGallery("galleryImagePatchworking", galleries.patchworking);
});
