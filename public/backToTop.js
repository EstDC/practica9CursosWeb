const backToTopButton = document.getElementById('back-to-top');

function toggleBackToTopButton() {
  if (window.scrollY > 200) {
    backToTopButton.classList.remove('opacity-0', 'invisible', 'translate-y-2');
    backToTopButton.classList.add('opacity-100', 'visible', 'translate-y-0');
  } else {
    backToTopButton.classList.add('opacity-0', 'invisible', 'translate-y-2');
    backToTopButton.classList.remove('opacity-100', 'visible', 'translate-y-0');
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', toggleBackToTopButton);
backToTopButton.addEventListener('click', scrollToTop);
