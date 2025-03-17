export default class DepoimentosExpandir {
  constructor(selector, maxChars = 200) {
    this.depoimentos = document.querySelectorAll(selector);
    this.maxChars = maxChars;
    this.init();
  }

  init() {
    this.depoimentos.forEach(depoimento => {
      const textoCompleto = depoimento.textContent.trim();

      if (textoCompleto.length <= this.maxChars) {
        return; // Se o texto já for curto, não precisa criar a lógica
      }

      // Cortando o texto para criar o resumo
      let textoResumido = textoCompleto.slice(0, this.maxChars).trim();

      // Verificando se o texto resumido precisa de "..."
      const precisaDePontos = !/[.,!?]$/.test(textoResumido);
      if (precisaDePontos) {
        textoResumido += '...';
      }

      // Criando os elementos
      depoimento.innerHTML = '';

      const spanResumido = document.createElement('span');
      spanResumido.classList.add('texto-resumido');
      spanResumido.textContent = textoResumido;

      const spanCompleto = document.createElement('span');
      spanCompleto.classList.add('texto-completo');
      spanCompleto.textContent = textoCompleto.slice(this.maxChars).trim();
      spanCompleto.style.display = 'none'; // Inicialmente oculto

      const botao = document.createElement('button');
      botao.textContent = 'Leia mais';
      botao.classList.add('btn-leia-mais');

      // Adicionando os elementos ao DOM
      depoimento.appendChild(spanResumido);
      depoimento.appendChild(spanCompleto);
      depoimento.appendChild(botao);

      // Evento para alternar entre "Leia mais" e "Mostrar menos"
      botao.addEventListener('click', () => {
        const estaExpandido = spanCompleto.style.display === 'inline';

        if (estaExpandido) {
          // Se expandido, oculta o texto completo e exibe o resumido
          spanResumido.style.display = 'inline';
          spanCompleto.style.display = 'none';
          botao.textContent = 'Leia mais'; // Muda para "Leia mais"
        } else {
          // Se não expandido, exibe o texto completo e oculta o resumido
          spanResumido.style.display = 'none';
          spanCompleto.style.display = 'inline';
          botao.textContent = 'Mostrar menos'; // Muda para "Mostrar menos"
        }
      });
    });
  }
}
