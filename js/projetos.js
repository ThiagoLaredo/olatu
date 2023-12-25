document.addEventListener('DOMContentLoaded', function () {
  function initializeSwiper() {
    var swiper = new Swiper(".mySwiper", {
      direction: "vertical",
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
        // init: function () {
        //   this.pagination.el.style.display = 'none';
        //   hideProjectMenu();
        // },
        slideChange: function () {
          let currentSlideIndex = this.realIndex;

          // Remove 'active' class from all menu items
          document.querySelectorAll('.project-menu-item').forEach(function (menuItem) {
            menuItem.classList.remove('active');
          });

          // Get the hash value of the current slide
          let currentSlideHash = swiper.slides[currentSlideIndex].getAttribute('data-hash');

          // Find the corresponding menu item and add 'active' class
          let correspondingMenuItem = document.querySelector(`.project-menu-item[href="#${currentSlideHash}"]`);
          if (correspondingMenuItem) {
            correspondingMenuItem.classList.add('active');
          }

          // if (currentSlideIndex >= 1) {
          //   this.pagination.el.style.display = 'flex';
          // } else {
          //   this.pagination.el.style.display = 'none';
          // }
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
        projectMenu.style.display = 'none';
      }
    }

    function hidePagination() {
      if (pagination) {
        pagination.style.display = 'none';
      }
    }

    function showPagination() {
      if (pagination) {
        pagination.style.display = 'flex';
      }
    }

    function showProjectMenu() {
      if (projectMenu) {
        projectMenu.style.display = 'flex';
      }
    }
  }

  initializeSwiper();
});
