const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
let currentIndex = 0;
const totalImages = images.length;

function changeSlide() {
    currentIndex++;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

setInterval(changeSlide, 2000);
