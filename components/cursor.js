class CustomCursor extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.5);
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
          mix-blend-mode: difference;
          transition: transform 0.1s ease, width 0.3s ease, height 0.3s ease;
        }
        .cursor.hover {
          width: 40px;
          height: 40px;
          background: rgba(99, 102, 241, 0.8);
        }
      </style>
      <div class="cursor"></div>
    `;

    const cursor = this.shadowRoot.querySelector('.cursor');
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
  }
}

customElements.define('custom-cursor', CustomCursor);