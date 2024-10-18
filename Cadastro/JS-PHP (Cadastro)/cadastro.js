document.addEventListener("DOMContentLoaded", function() {
    const carouselImages = document.querySelector('.carousel-images');
    const carouselImageWidth = document.querySelector('.carousel-image').clientWidth;
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % 3;
        carouselImages.style.transform = `translateX(${-currentIndex * carouselImageWidth}px)`;
    }

    setInterval(nextSlide, 3000); // Avança para a próxima imagem a cada 3 segundos
});
