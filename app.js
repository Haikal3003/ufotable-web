const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger__menu');
const menu = document.querySelector('.navbar__links');
const closeBtn = document.getElementById('close');
const loader = document.querySelector('.loader');
const body = document.querySelector('body');
const sections = document.querySelectorAll('section');
const navlink = document.querySelectorAll('.navbar__links a');

// navbar
hamburger.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.add('show');
});

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.remove('show');
});

// navbar sticky
window.onscroll = () => {
  let current = '';
  // navbar sticky
  if (window.pageYOffset > 10) {
    navbar.classList.add('shadow');
  } else {
    navbar.classList.remove('shadow');
  }

  //section scroll
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - sectionHeight / 5) {
      current = section.getAttribute('id');
    }
  });

  // nav
  navlink.forEach((li) => {
    li.classList.remove('links__active');
    if (li.classList.contains(current)) {
      li.classList.add('links__active');
    }
  });
};

// loader

window.addEventListener('load', () => {
  setTimeout(() => {
    loader.classList.add('active');
    body.classList.remove('hidden');
  }, 7000);
});
