'use strict';

let backToTop = document.querySelector('#backToTop');

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
  document.window.scrollTop = 0;
  location.reload();
};

window.addEventListener('scroll', () => {
  window.scrollY > 59
    ? (backToTop.style.opacity = '1')
    : (backToTop.style.opacity = '0');
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
