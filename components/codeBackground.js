class CodeBackground extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
        }
        .code-symbol {
          position: absolute;
          color: rgba(99, 102, 241, 0.1);
          font-family: monospace;
          font-size: 1.2rem;
          animation: float 15s infinite linear;
        }
        @keyframes float {
          0% { transform: translateY(100vh) translateX(0); opacity: 0; }
          10% { opacity: 0.1; }
          90% { opacity: 0.1; }
          100% { transform: translateY(-10vh) translateX(20vw); opacity: 0; }
        }
      </style>
    `;

    const symbols = ['{}', '</>', ';', '=', '()', '[]', '=>', '//'];
    for (let i = 0; i < 30; i++) {
      const symbol = document.createElement('div');
      symbol.className = 'code-symbol';
      symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      symbol.style.left = `${Math.random() * 100}vw`;
      symbol.style.animationDuration = `${15 + Math.random() * 15}s`;
      symbol.style.animationDelay = `${Math.random() * 15}s`;
      this.shadowRoot.appendChild(symbol);
    }
  }
}

customElements.define('code-background', CodeBackground);