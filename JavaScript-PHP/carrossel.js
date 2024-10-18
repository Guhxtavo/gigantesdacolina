const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

let counter = 0;
const itemWidth = carouselItems[0].clientWidth;
const totalItems = carouselItems.length;

// Função para mover para o próximo slide
const moveToNextSlide = () => {
  if (counter >= totalItems - 1) {
    counter = 0;
  } else {
    counter++;
  }
  updateSlidePosition();
};

// Função para mover para o slide anterior
const moveToPrevSlide = () => {
  if (counter <= 0) {
    counter = totalItems - 1;
  } else {
    counter--;
  }
  updateSlidePosition();
};

// Atualiza a posição do slide no carrossel
const updateSlidePosition = () => {
  carouselSlide.style.transform = `translateX(${-counter * itemWidth}px)`;
};

// Event listeners para os botões de navegação
nextBtn.addEventListener('click', () => {
  moveToNextSlide();
  clearInterval(carouselInterval); // Pára o carrossel automático ao interagir com os botões
});

prevBtn.addEventListener('click', () => {
  moveToPrevSlide();
  clearInterval(carouselInterval); // Pára o carrossel automático ao interagir com os botões
});

// Carrossel automático
let carouselInterval = setInterval(moveToNextSlide, 3000); // Troca de slide a cada 3 segundos

// Pausa o carrossel quando o cursor está sobre ele
carouselSlide.addEventListener('mouseenter', () => {
  clearInterval(carouselInterval);
});

// Reinicia o carrossel quando o cursor sai dele
carouselSlide.addEventListener('mouseleave', () => {
  carouselInterval = setInterval(moveToNextSlide, 3000);
});
