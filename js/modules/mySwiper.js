export default class MySwiper {
  constructor() {
    this.swiper = null;

    document.addEventListener('DOMContentLoaded', () => {
      this.initializeSwiper();
    });
  }

  initializeSwiper() {
    this.swiper = new Swiper(".mySwiper", {
      direction: "vertical",
      speed: 1000,
      mousewheel: true,
      preventClicks: false,
      preventClicksPropagation: false,
      hashNavigation: {
        watchState: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: false,
      },
      on: {
        slideChange: this.slideChange.bind(this),
      },
    });

    const pagination = document.querySelector('.pagination');
    const menuLateral = document.querySelector('.menu-lateral');

    if (menuLateral) {
      menuLateral.addEventListener('mouseenter', () => {
        this.hidePagination();
        this.showProjectMenu();
      });

      menuLateral.addEventListener('mouseleave', () => {
        this.hideProjectMenu();
        this.showPagination();
      });
    }

    if (pagination) {
      pagination.addEventListener('mouseenter', () => {
        this.hidePagination();
        this.showProjectMenu();
      });
      pagination.addEventListener('mouseleave', () => {
        this.hideProjectMenu();
        this.showPagination();
      });
    }
  }

  slideChange() {
    // Check if swiper is defined and initialized
    if (this.swiper && this.swiper.slides) {
      let currentSlideIndex = this.swiper.realIndex;
  
      // Remove 'active' class from all menu items
      document.querySelectorAll('.project-menu-item').forEach(function (menuItem) {
        menuItem.classList.remove('active');
      });
  
      // Check if the current slide index is valid
      if (this.swiper.slides[currentSlideIndex]) {
        // Get the hash value of the current slide
        let currentSlideHash = this.swiper.slides[currentSlideIndex].getAttribute('data-hash');
  
        // Find the corresponding menu item and add 'active' class
        let correspondingMenuItem = document.querySelector(`.project-menu-item[href="#${currentSlideHash}"]`);
        if (correspondingMenuItem) {
          correspondingMenuItem.classList.add('active');
        }
      }
  
      if (currentSlideIndex >= 1) {
        this.swiper.pagination.el.style.display = 'flex';
      } else {
        this.swiper.pagination.el.style.display = 'none';
      }
    }
  }
  

  hideProjectMenu() {
    const projectMenu = document.querySelector('.project-menu-hover');
    const pagination = document.querySelector('.pagination');

    if (projectMenu) {
      projectMenu.classList.remove('show-element');
      pagination.style.display = 'flex';
    }
  }

  hidePagination() {
    const pagination = document.querySelector('.pagination');
    if (pagination) {
      pagination.classList.remove('show-element');
    }
  }

  showPagination() {
    const pagination = document.querySelector('.pagination');
    if (pagination) {
      pagination.classList.add('show-element');
    }
  }

  showProjectMenu() {
    const projectMenu = document.querySelector('.project-menu-hover');
    const pagination = document.querySelector('.pagination');

    if (projectMenu) {
      projectMenu.classList.add('show-element');
      pagination.style.display = 'none';
    }
  }
}




