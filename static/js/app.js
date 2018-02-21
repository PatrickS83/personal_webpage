
window.onload = function () {
  document.getElementById('navbox__burgercontainer').addEventListener('click', function () {
    this.classList.toggle('open');
    document.querySelector('.navbox__navbar').classList.toggle('open');
    document.querySelector('.navbox').classList.toggle('open');
  });
};

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
  }
  // closes navbar on scrolling if not on top of page
  else if (didScroll) {
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
            && bounding.bottom <= (window.innerHeight * 1 || document.documentElement.clientHeight * 1)
            && bounding.right <= (window.innerWidth * 1 || document.documentElement.clientWidth * 1)
  );
}

// triggers animation for elements that entered the viewport
setInterval(() => {
  for (const icon of toolsIcons) {
    if (isInViewport(icon)) icon.classList.add('fadeInUpTriggered');
  }
  if (isInViewport(contactSection)) contactSection.classList.add('slideInTriggered');
}, 150);
