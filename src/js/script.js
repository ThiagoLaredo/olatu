import ScrollSuave from './modules/scroll-suave.js';
import MenuMobile from './modules/menu-mobile.js';
import MySwiper from './modules/mySwiper.js';
import ConsoleTextEffect from './modules/text-effect.js';
import { initPageOpenAnimations, initScrollAnimations } from './modules/animations.js';

import "../css/global.css";
import "../css/header.css";
import "../css/introducao.css";
import "../css/text-typing.css";
import "../css/clientes.css";
import "../css/oque.css";
import "../css/cases.css";
import "../css/desenvolvimento.css";
import "../css/como.css";
import "../css/depoimentos.css";
import "../css/quem.css";
import "../css/contato.css";
import "../css/portifolio.css";
import "../css/menu-mobile.css";
import "../css/componentes.css";
import "../css/tipografia.css";
import "../css/cores.css";
import "../css/projetos.css";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();


const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

new MySwiper();
// Animações de abertura de página e scroll
initPageOpenAnimations();
initScrollAnimations();

const targetElement = document.getElementById('text-effect');

if (targetElement) {
  const textEffect = new ConsoleTextEffect(['Site', 'E-commerce', 'Design'], 'text-effect', ['#64d97b', '#64d97b', '#64d97b']);
  console.log(textEffect);
} else {
  console.error('Target element not found. The script will not be executed.');
}

// document.addEventListener('DOMContentLoaded', function() {
  // Your code here
  // const textEffect = new ConsoleTextEffect(['Site', 'E-commerce', 'Design'], 'text-effect', ['#64d97b', '#64d97b', '#64d97b']);
  // console.log(textEffect);
// });
