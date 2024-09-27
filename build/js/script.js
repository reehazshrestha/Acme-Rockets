const hamburgerBtn = document.getElementById('hamburger-open-button');
const initApp = () => {
 
  const mobileMenu = document.getElementById('mobile-menu');

  const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
    hamburgerBtn.classList.toggle('toggle-btn')
  };

  hamburgerBtn.addEventListener('click', toggleMenu);
  mobileMenu.addEventListener('click', toggleMenu);
};

document.addEventListener('DOMContentLoaded', initApp);

const mainNav = document.getElementById('main-nav');
const nav = document.getElementById('footer-nav');
let year = document.getElementById('year');
let currentYear = new Date();

year.textContent = currentYear.getFullYear();

function logScreenSize() {
  const width = window.innerWidth;
  return width;
}
logScreenSize();

function logic() {
  let screen = logScreenSize();

  if (screen >= 768) {
    hamburgerBtn.classList.add('hidden')
    mainNav.classList.add('block');
    mainNav.classList.remove('hidden');
    nav.classList.add('flex');
    nav.classList.remove('hidden');
  }
  else {
    hamburgerBtn.classList.add('flex');
    hamburgerBtn.classList.remove('hidden');
    mainNav.classList.add('hidden');
    mainNav.classList.remove('block');
    nav.classList.add('hidden');
    nav.classList.remove('flex');
  }
}

window.addEventListener('resize', logic);
logic();
