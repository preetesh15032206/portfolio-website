class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(10px);
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          border-bottom: 1px solid rgba(99, 102, 241, 0.2);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        nav.scrolled {
          padding: 1rem 1.5rem;
          background: rgba(15, 23, 42, 0.95);
          border-bottom: 1px solid rgba(99, 102, 241, 0.3);
        }
.logo {
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          background: linear-gradient(to right, #6366f1, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
        }
        
        a:hover {
          color: white;
          text-shadow: 0 0 10px rgba(99, 102, 241, 0.7);
        }
        
        a::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #6366f1, #10b981);
          transition: width 0.3s ease, opacity 0.3s ease;
          opacity: 0;
        }
        
        a:hover::before {
          width: 100%;
          opacity: 1;
        }
        
        a.active {
          color: white;
        }
        
        a.active::before {
          width: 100%;
          opacity: 1;
        }
.mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block;
          }
          .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(17, 24, 39, 0.95);
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;
          }
          .nav-links.active {
            display: flex;
          }
        }
      </style>
      <nav>
        <div class="logo">Preetesh Kumar</div>
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#contact">Contact</a></li>
</ul>
</nav>
    `;

    // Mobile menu toggle
    const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const navLinks = this.shadowRoot.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileMenuBtn.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.setAttribute('data-feather', 'x');
      } else {
        icon.setAttribute('data-feather', 'menu');
      }
      feather.replace();
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);