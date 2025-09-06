// dynamic Image Sizing
(function () {
    function sizeImagePair(pair) {
        const imgs = pair.querySelectorAll("img");
        if (imgs.length < 2) return;

        const [img1, img2] = imgs;

        // Wait for both images to load
        Promise.all([img1, img2].map(img => new Promise(resolve => {
            if (img.complete && img.naturalWidth) resolve();
            else img.addEventListener("load", resolve, { once: true });
        }))).then(() => {
            const containerWidth = pair.clientWidth;
            const gap = parseFloat(getComputedStyle(pair).gap) || 16; // default 1rem ~16px
            const maxAvailableWidth = containerWidth - gap;

            const ratio1 = img1.naturalWidth / img1.naturalHeight;
            const ratio2 = img2.naturalWidth / img2.naturalHeight;

            let H = maxAvailableWidth / (ratio1 + ratio2);

            const maxHeight = window.innerHeight * 0.7;
            if (H > maxHeight) H = maxHeight;

            let w1 = H * ratio1;
            let w2 = H * ratio2;

            // Safety check if still too wide
            if (w1 + w2 + gap > containerWidth) {
                const scale = (containerWidth - gap) / (w1 + w2);
                w1 *= scale;
                w2 *= scale;
                H *= scale;
            }

            img1.style.width = `${w1}px`;
            img2.style.width = `${w2}px`;
            img1.style.height = `${H}px`;
            img2.style.height = `${H}px`;
        });
    }

    function initPairs() {
        const pairs = document.querySelectorAll(".image-pair");
        pairs.forEach(pair => {
            sizeImagePair(pair);
            window.addEventListener("resize", () => sizeImagePair(pair));
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initPairs);
    } else {
        initPairs();
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    // Create the overlay element
    const overlay = document.createElement('div');
    overlay.className = 'image-lightbox-overlay';
    const overlayImg = document.createElement('img');
    overlay.appendChild(overlayImg);
    document.body.appendChild(overlay);

    // Clicking overlay closes it
    overlay.addEventListener('click', () => {
        overlay.classList.remove('active');
    });

    // Make all images inside .image-text-pair clickable
    document.querySelectorAll('.image-text-pair img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => {
            overlayImg.src = img.src;
            overlay.classList.add('active');
        });
    });
});
