const galleryImages = document.querySelectorAll('.gallery-image');
const fullScreen = document.querySelector('.full-screen');
const fullScreenImage = document.querySelector('.full-screen-image');
const close = document.querySelector('.close');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentImage = 0;

galleryImages.forEach((image, index) => {
  image.addEventListener('click', () => {
    currentImage = index;
    fullScreen.style.display = 'flex';
    fullScreenImage.src = image.src;
    prev.style.display = 'block';
    next.style.display = 'block';
  });
});

close.addEventListener('click', () => {
  fullScreen.style.display = 'none';
  prev.style.display = 'none';
  next.style.display = 'none';
});

prev.addEventListener('click', () => {
  currentImage--;
  if (currentImage < 0) {
    currentImage = galleryImages.length - 1;
  }
  fullScreenImage.src = galleryImages[currentImage].src;
});

next.addEventListener('click', () => {
  currentImage++;
  if (currentImage > galleryImages.length - 1) {
    currentImage = 0;
  }
  fullScreenImage.src = galleryImages[currentImage].src;
});