let currentIndex = 0;

function changeSlide(direction) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  // Clear current positional classes from all slides
  slides.forEach(slide => {
    slide.classList.remove('active', 'next', 'prev');
  });

  // Calculate new center (active) index with infinite loop handling
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

  // Calculate previous and next indices safely around the array loop
  const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  const nextIndex = (currentIndex + 1) % totalSlides;

  // Assign classes to trigger the CSS transition
  slides[currentIndex].classList.add('active');
  slides[nextIndex].classList.add('next');
  slides[prevIndex].classList.add('prev');
}
