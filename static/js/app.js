
class Controller {
  constructor() {
    this.elements = {
      navBurger: document.getElementById('navbox__burgercontainer'),
      navBar: document.querySelector('.navbox__navbar'),
      navBox: document.querySelector('.navbox')
    };
    this.init();
  }

  init() {
    this.navBarListener();
  }

  navBarListener() {
    this.elements.navBurger.addEventListener('click', function navToggle() {
      this.classList.toggle('open');
      this.elements.navBar.classList.toggle('open');
      this.elements.navBox.classList.toggle('open');
    });
  }
}


// script for close navbar on scroll
let didScroll = false;

function toggleNavbar() {
  didScroll = true;
}

window.onscroll = toggleNavbar;

setInterval(() => {
  // opens navbar at top of the page
  if (didScroll === true && window.pageYOffset <= 100) {
    didScroll = false;
    document.getElementById('navbox__burgercontainer').classList.add('open');
    document.querySelector('.navbox__navbar').classList.remove('open');
    document.querySelector('.navbox').classList.add('open');
    // closes navbar on scrolling if not on top of page
  } else if (didScroll) {
    didScroll = false;
    document.getElementById('navbox__burgercontainer').classList.remove('open');
    document.querySelector('.navbox__navbar').classList.add('open');
    document.querySelector('.navbox').classList.remove('open');
  }
}, 250);

// Script for onscroll in viewport Animations
const toolsIcons = document.querySelectorAll('.fadeInUp');
const contactSection = document.querySelector('.contact__content');

// checks if an element entered viewport
function isInViewport(element) {
  const bounding = element.getBoundingClientRect();
  return (
    bounding.top >= 0
    && bounding.left >= 0
    && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    && bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// triggers animation for elements that entered the viewport
setInterval(() => {
  toolsIcons.forEach((icon) => {
    if (isInViewport(icon)) icon.classList.add('fadeInUpTriggered');
  });
  if (isInViewport(contactSection)) contactSection.classList.add('slideInTriggered');
}, 150);


const control = new Controller();
