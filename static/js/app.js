class Controller {
  constructor() {
    this.elements = {
      navBurger: document.getElementById('navbox__burgercontainer'),
      navBar: document.querySelector('.navbox__navbar'),
      navBox: document.querySelector('.navbox'),
      herosite: document.querySelector('.herosite'),
      toolsIcons: document.querySelectorAll('.fadeInUp'),
      contactSection: document.querySelector('.contact__content')
    };
    this.init();
  }

  init() {
    this.navBarClickListener();
    this.navBarScrollListener();
    this.iconScrollListener();
    this.setHeroHeight();
  }

  // fix 100vh problems in mobile browsers
  setHeroHeight() {
    this.elements.herosite.style.height = window.innerHeight + 'px';
  }

  // listens to clicks on the navbar burger icon
  navBarClickListener() {
    this.elements.navBurger.addEventListener('click', () => {
      this.elements.navBurger.classList.toggle('open');
      this.elements.navBar.classList.toggle('open');
      this.elements.navBox.classList.toggle('open');
    });
  }

  // listens to scroll event to open/close navbar
  navBarScrollListener() {
    let didScroll = false;

    function toggleNavbar() {
      didScroll = true;
    }

    window.onscroll = toggleNavbar;

    setInterval(() => {
      // opens navbar at top of the page
      if (didScroll === true && window.pageYOffset <= 100) {
        didScroll = false;
        this.elements.navBurger.classList.add('open');
        this.elements.navBar.classList.remove('open');
        this.elements.navBox.classList.add('open');
        // closes navbar on scrolling if not on top of page
      } else if (didScroll) {
        didScroll = false;
        this.elements.navBurger.classList.remove('open');
        this.elements.navBar.classList.add('open');
        this.elements.navBox.classList.remove('open');
      }
    }, 250);
  }

  // triggers interval to fade in skill icons that enter screen area
  iconScrollListener() {
    // checks if an element entered viewport
    function isInViewport(element) {
      const bounding = element.getBoundingClientRect();
      return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // triggers animation for elements that entered the viewport
    setInterval(() => {
      this.elements.toolsIcons.forEach(icon => {
        if (isInViewport(icon)) icon.classList.add('fadeInUpTriggered');
      });
      if (isInViewport(this.elements.contactSection)) {
        this.elements.contactSection.classList.add('slideInTriggered');
      }
    }, 150);
  }
}

const control = new Controller();
