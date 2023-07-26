const header = document.getElementById('header');
const link = header.querySelector('a');
const logo = document.getElementById('logo');
const outrosFilmes = document.querySelectorAll('[data-outro-filme]');
const filmesFranquiaContents = document.querySelectorAll('.filmes-franquia-content');

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
})

for (const content of filmesFranquiaContents) {
  content.addEventListener('click', abreOuFechaFilme);
}

function abreOuFechaFilme(event) {
  const classe = 'filme-snopse--is-open';
  const filmeSnopse = event.currentTarget.nextElementSibling;

  filmeSnopse.classList.toggle(classe);
}