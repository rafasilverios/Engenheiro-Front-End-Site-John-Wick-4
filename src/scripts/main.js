const header = document.getElementById('header');
const link = header.querySelector('a');
const logo = document.getElementById('logo');

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
      // logo.src = './src/images/john-wick-4-logo-black.png';
      link.classList.add('header-scrolled');
    } else {
      header.classList.remove('scrolled');
      // logo.src = './src/images/john-wick-4-logo.png';
      link.classList.remove('header-scrolled');
    }
  });