let currentSlide = 0;
let slideInterval = null;

function showSlide(index) {
  const slides = document.querySelectorAll('#hero-slideshow .slide-item');
  const dots = document.querySelectorAll('#slide-indicators button');
  const counter = document.getElementById('slide-counter-badge');

  if (!slides.length) return;

  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  slides.forEach((slide, i) => {
    if (i === currentSlide) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });

  if (dots.length) {
    dots.forEach((dot, i) => {
      if (i === currentSlide) {
        dot.className =
          'h-2 rounded-full transition-all duration-300 bg-emerald-400 w-8';
      } else {
        dot.className =
          'h-2 rounded-full transition-all duration-300 bg-white/40 w-3 hover:bg-white/70';
      }
    });
  }

  if (counter) {
    counter.textContent = `0${currentSlide + 1} / 0${slides.length}`;
  }
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function goToSlide(index) {
  showSlide(index);
  resetSlideshowTimer();
}

function startSlideshow() {
  slideInterval = setInterval(nextSlide, 5000);
}

function resetSlideshowTimer() {
  clearInterval(slideInterval);
  startSlideshow();
}

showSlide(0);
startSlideshow();