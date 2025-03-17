import ScrollSuave from './modules/scroll-suave.js';
import MenuMobile from './modules/menu-mobile.js';
import DepoimentosExpandir from './modules/depoimentosExpandir.js';
import {
  MySwiperProjetos, 
  MySwiperDepoimentos, 
  MySwiperDesenvolvimento 
} from './modules/mySwiper.js';
import { initPageOpenAnimations, initScrollAnimations, ConsoleTextEffect } from './modules/animations.js';

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

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM completamente carregado.");

  // Inicializa o Scroll Suave
  const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
  scrollSuave.init();

  // Inicializa o Menu Mobile
  const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
  menuMobile.init();

  // Slider vertical de projetos
  new MySwiperProjetos();

  // Slider horizontal de depoimentos
  new MySwiperDepoimentos();

  // Slider horizontal de desenvolvimento
  new MySwiperDesenvolvimento();

  // Instanciar a classe para os depoimentos
  new DepoimentosExpandir('.texto-depoimento', 220);

  // Animações de abertura de página e scroll
  initPageOpenAnimations();
  initScrollAnimations();

  // Inicializa o efeito de texto digitado
  const targetElement = document.getElementById('text-effect');
  if (targetElement) {
    new ConsoleTextEffect(
      ['Criatividade', 'Inovação', 'Resultados'],
      'text-effect',
      ['#64d97b', '#64d97b', '#64d97b']
    );
  } else {
    console.error('Elemento de destino para o texto digitado não encontrado.');
  }
});