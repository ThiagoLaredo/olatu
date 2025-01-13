import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

export const initPageOpenAnimations = () => {
    // Define os elementos que terão animações de abertura com a classe 'page-open-animate'
    const pageOpenElements = document.querySelectorAll(".page-open-animate");
    if (pageOpenElements.length > 0) {
        gsap.set(pageOpenElements, { opacity: 0 });

        gsap.to(pageOpenElements, {
            opacity: 1,
            duration: 0.5,
            delay: 2,
            stagger: 0.2,
            ease: "power1.inOut",
        });
    }

    // Sequência de animações na `.intro`
    const introElement = document.querySelector(".intro");
    if (introElement) {
        const introTimeline = gsap.timeline();

        introTimeline.fromTo(
            introElement,
            { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", opacity: 0 },
            {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                onComplete: () => {
                    introElement.style.clipPath = "none";
                },
            }
        );

        // Animações sequenciais dentro da intro
        const introInfoH1 = introElement.querySelector(".intro_info h1");
        const introInfoP = introElement.querySelector(".intro_info p");
        const btnVazado = introElement.querySelector(".btn-vazado");
        const imgMeditation = introElement.querySelector(".img-meditation");
        const consoleContainer = introElement.querySelector(".console-container");

        if (introInfoH1) {
            introTimeline.fromTo(
                introInfoH1,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
                "-=1"
            );
        }

        if (introInfoP) {
            introTimeline.fromTo(
                introInfoP,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
                "-=0.5"
            );
        }

        if (btnVazado) {
            introTimeline.fromTo(
                btnVazado,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
                "-=0.5"
            );
        }

        if (imgMeditation) {
            introTimeline.fromTo(
                imgMeditation,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
                "-=0.5"
            );
        }

        if (consoleContainer) {
            introTimeline.fromTo(
                consoleContainer,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
            );
        }
    }

    // Animações antigas: logo e menu
    const logoElement = document.querySelector("[data-menu='logo']");
    const menuItems = document.querySelectorAll("#menu > li > a, #menu > li > span");
    const contactInfo = document.querySelector(".contact-info");

    const logoAndMenuTimeline = gsap.timeline({ delay: 0.5 });

    if (logoElement) {
        logoAndMenuTimeline.fromTo(
            logoElement,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        );
    }

    if (menuItems.length > 0) {
        logoAndMenuTimeline.fromTo(
            menuItems,
            { opacity: 0, y: -20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                stagger: 0.2,
            }
        );
    }

    if (contactInfo) {
        logoAndMenuTimeline.fromTo(
            contactInfo,
            { opacity: 0, y: -10 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power1.inOut" }
        );
    }
};

export const initScrollAnimations = () => {
    // Seleciona todas as sections e o footer, exceto a introdução
    const sections = document.querySelectorAll('section:not(.introducao), footer');
    if (sections.length > 0) {
      sections.forEach(section => {
        const elements = section.querySelectorAll('.animate-me');
  
        elements.forEach(element => {
          // Animação de baixo para cima
          if (element.classList.contains('animate-bottom')) {
            gsap.fromTo(
              element,
              { opacity: 0, y: 50 }, // Inicial: deslocado 50px para baixo
              {
                scrollTrigger: {
                  trigger: element,
                  start: "top 80%",
                  end: "bottom 20%",
                  toggleActions: "play none none none",
                },
                opacity: 1,
                y: 0, // Final: posição original
                duration: 1,
                ease: "power1.out",
              }
            );
          }
  
          // Animação da direita para a esquerda
          else if (element.classList.contains('animate-right')) {
            gsap.fromTo(
              element,
              { opacity: 0, x: 50 }, // Inicial: deslocado 50px à direita
              {
                scrollTrigger: {
                  trigger: element,
                  start: "top 80%",
                  end: "bottom 20%",
                  toggleActions: "play none none none",
                },
                opacity: 1,
                x: 0, // Final: posição original
                duration: 1,
                ease: "power1.out",
              }
            );
          }
  
          // Animação da esquerda para a direita
          else if (element.classList.contains('animate-left')) {
            gsap.fromTo(
              element,
              { opacity: 0, x: -50 }, // Inicial: deslocado 50px à esquerda
              {
                scrollTrigger: {
                  trigger: element,
                  start: "top 80%",
                  end: "bottom 20%",
                  toggleActions: "play none none none",
                },
                opacity: 1,
                x: 0, // Final: posição original
                duration: 1,
                ease: "power1.out",
              }
            );
          }
        });
      });
    } else {
      console.warn("Nenhuma section ou footer (exceto .introducao) foi encontrada.");
    }
  };
  
  