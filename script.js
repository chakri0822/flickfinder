let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

document.querySelector('.next').addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % totalSlides;
  updateSlidePosition();
});

document.querySelector('.prev').addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
});

function updateSlidePosition() {
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}
