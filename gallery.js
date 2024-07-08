document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('#gallery ul li img');
    const featuredImage = document.querySelector('#gallery figure img');
    const figcaption = document.querySelector('#gallery figure figcaption');
    const body = document.querySelector('body');

    const backgroundColors = {
        'Yellow Flowers': 'yellow',
        'Pink Flowers': 'lightpink',
        'Purple Flowers': 'lavender',
        'Red Flowers': 'lightcoral',
        'White Flowers': 'whitesmoke'
    };

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const largeImageSrc = thumbnail.src.replace('-small', '-large');
            featuredImage.src = largeImageSrc;
            featuredImage.alt = thumbnail.alt;
            figcaption.textContent = thumbnail.alt;

            const backgroundColor = backgroundColors[thumbnail.alt] || 'white';
            body.style.backgroundColor = backgroundColor;
        });
    });
});
