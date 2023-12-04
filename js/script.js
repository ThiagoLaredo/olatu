import ScrollSuave from './modules/scroll-suave.js';
import MenuMobile from './modules/menu-mobile.js';
import ScrollAnima from './modules/scroll-anima.js';


const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();


