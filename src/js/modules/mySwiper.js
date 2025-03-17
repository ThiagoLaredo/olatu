import Swiper from 'swiper';
import { Navigation, Pagination, Mousewheel, HashNavigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';

export class MySwiperProjetos {
  constructor() {
    this.swiper = null;
    this.initializeSwiper(); // Chamando dentro do construtor
  }

  initializeSwiper() {

    // Verifica se .mySwiper existe na página
    const container = document.querySelector('.mySwiper');
    if (!container) return;

    console.log('Initializing Swiper Projetos...');
    this.swiper = new Swiper('.mySwiper', {
      modules: [Navigation, Pagination, Mousewheel, HashNavigation],
      direction: 'vertical',
      speed: 1000,
      mousewheel: true,
      preventClicks: false,
      preventClicksPropagation: false,
      hashNavigation: {
        watchState: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      on: {
        slideChange: () => {
          console.log('Slide changed');
        },
      },
    });
    console.log('Swiper initialized:', this.swiper);

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

/**
 * Classe para o Slider de Depoimentos (horizontal, com setas)
 */
export class MySwiperDepoimentos {
  constructor() {
    this.swiper = null;
    this.initializeSwiper();
  }

  initializeSwiper() {
    const container = document.querySelector('.depoimentosSwiper');
    if (!container) return;

    console.log('Initializing Swiper Depoimentos...');
    this.swiper = new Swiper('.depoimentosSwiper', {
      modules: [Navigation, Pagination],
      direction: 'horizontal',
      slidesPerView: 3, // Padrão: 3 slides para telas maiores
      spaceBetween: 20,
      speed: 600,

      breakpoints: {
        0: { // Para telas pequenas (mobile)
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: { // Para tablets e telas médias
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: { // Para telas grandes
          slidesPerView: 3,
          spaceBetween: 20,
        }
      },

      // Setas de navegação
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // Paginação (bullets)
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    console.log('Depoimentos Swiper initialized:', this.swiper);
  }
}


/**
 * Classe para Slider de Desenvolvimento (horizontal, só paginação)
 */
export class MySwiperDesenvolvimento {
  constructor() {
    this.swiper = null;
    this.initializeSwiper();
  }

  initializeSwiper() {
    const container = document.querySelector('.desenvolvimentoSwiper');
    if (!container) return;

    console.log('Initializing Swiper Desenvolvimento...');
    this.swiper = new Swiper('.desenvolvimentoSwiper', {
      modules: [Pagination, Autoplay],
      direction: 'horizontal',
      speed: 600,
      // sem setas, só paginação
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true, // Habilita o loop infinito
      autoplay: {
        delay: 3000, // Tempo em milissegundos entre os slides (3 segundos)
        disableOnInteraction: false, // Continua o autoplay mesmo após interação do usuário
      },
    });

    console.log('Desenvolvimento Swiper initialized:', this.swiper);
  }
}
