// Arquivo: script.js

// Carrossel simples com rolagem automática
const carousel = document.getElementById('carousel');
let scrollAmount = 0;
const scrollStep = 300;
const delay = 3000;

function autoScroll() {
  if (carousel.scrollWidth - carousel.clientWidth === scrollAmount) {
    scrollAmount = 0;
  } else {
    scrollAmount += scrollStep;
  }
  carousel.scrollTo({
    top: 0,
    left: scrollAmount,
    behavior: 'smooth'
  });
}

let startAutoScroll = setInterval(autoScroll, delay);

// Pausar ao passar o mouse
carousel.addEventListener('mouseenter', () => {
  clearInterval(startAutoScroll);
});

carousel.addEventListener('mouseleave', () => {
  startAutoScroll = setInterval(autoScroll, delay);
});



