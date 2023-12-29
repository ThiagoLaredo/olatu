document.addEventListener('DOMContentLoaded', function () {
  function initializeSwiper() {
    var swiper = new Swiper(".mySwiper", {
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
        init: function () {
          this.pagination.el.style.display = 'none';
          hideProjectMenu();
        },
        slideChange: function () {
          let currentSlideIndex = this.realIndex;
      
          // Remove 'active' class from all menu items
          document.querySelectorAll('.project-menu-item').forEach(function (menuItem) {
              menuItem.classList.remove('active');
          });
      
          // Check if swiper is defined
          if (swiper && swiper.slides && swiper.slides[currentSlideIndex]) {
              // Get the hash value of the current slide
              let currentSlideHash = swiper.slides[currentSlideIndex].getAttribute('data-hash');
      
              // Find the corresponding menu item and add 'active' class
              let correspondingMenuItem = document.querySelector(`.project-menu-item[href="#${currentSlideHash}"]`);
              if (correspondingMenuItem) {
                  correspondingMenuItem.classList.add('active');
              }
          }
      
          if (currentSlideIndex >= 1) {
              this.pagination.el.style.display = 'flex';
          } else {
              this.pagination.el.style.display = 'none';
          }
      },
      },
    });

    var pagination = document.querySelector('.pagination');
    var menuLateral = document.querySelector('.menu-lateral');
    var projectMenu = document.querySelector('.project-menu-hover');

    if (menuLateral) {
      menuLateral.addEventListener('mouseenter', function () {
        hidePagination();
        showProjectMenu();
      });

      menuLateral.addEventListener('mouseleave', function () {
        hideProjectMenu();
        showPagination();
      });
    }

    if (pagination) {
      pagination.addEventListener('mouseenter', function () {
        hidePagination();
        showProjectMenu();
      });
      pagination.addEventListener('mouseleave', function () {
        hideProjectMenu();
        showPagination();
      });
    }

    function hideProjectMenu() {
      if (projectMenu) {
        projectMenu.classList.remove('show-element');
        pagination.style.display = 'flex';

      }
    }

    function hidePagination() {
      if (pagination) {
        pagination.classList.remove('show-element');
      }
    }

    function showPagination() {
      if (pagination) {
        pagination.classList.add('show-element');

      }
    }

    function showProjectMenu() {
      if (projectMenu) {
        projectMenu.classList.add('show-element');
        pagination.style.display = 'none';

      }
    }
  }


  initializeSwiper();
});

