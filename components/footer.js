class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: rgba(15, 23, 42, 0.95);
          color: white;
          padding: 3rem 1.5rem;
          text-align: center;
          border-top: 1px solid rgba(99, 102, 241, 0.2);
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        
        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .footer-links a:hover {
          color: white;
          text-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
        }
        
        .footer-links a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #6366f1;
          transition: width 0.3s ease;
        }
        
        .footer-links a:hover::after {
          width: 100%;
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }
        
        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(99, 102, 241, 0.1);
          color: white;
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          background: rgba(99, 102, 241, 0.3);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(99, 102, 241, 0.3);
        }
        
        .copyright {
          margin-top: 2rem;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .footer-links {
            flex-direction: column;
            gap: 1rem;
          }
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="footer-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#achievements">Achievements</a>
            <a href="#contact">Contact</a>
</div>
<div class="social-links">
            <a href="#" class="social-icon" aria-label="LinkedIn">
              <i data-feather="linkedin"></i>
            </a>
            <a href="#" class="social-icon" aria-label="GitHub">
              <i data-feather="github"></i>
            </a>
            <a href="#" class="social-icon" aria-label="Twitter">
              <i data-feather="twitter"></i>
            </a>
            <a href="mailto:preetesh4153@gmail.com" class="social-icon" aria-label="Email">
              <i data-feather="mail"></i>
            </a>
          </div>
          
          <div class="copyright">
            &copy; ${new Date().getFullYear()} Preetesh Kumar. All rights reserved.
          </div>
        </div>
      </footer>
    `;

    // Initialize feather icons
    const observer = new MutationObserver(() => {
      if (this.shadowRoot.querySelector('[data-feather]')) {
        feather.replace();
        observer.disconnect();
      }
    });
    observer.observe(this.shadowRoot, { childList: true, subtree: true });
  }
}

customElements.define('custom-footer', CustomFooter);