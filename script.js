
// Typing animation for hero section
function typeWriter(element, text, i = 0) {
    if (i < text.length) {
        element.innerHTML = text.substring(0, i+1) + '<span class="typing-cursor">|</span>';
        setTimeout(() => typeWriter(element, text, i+1), 100);
    } else {
        element.innerHTML = text;
        document.querySelector('.typing-cursor').style.display = 'none';
    }
}

// Initialize typing animation
document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.querySelector('.typing-name');
    const titleElement = document.querySelector('.typing-title');
    
    if (nameElement) {
        typeWriter(nameElement, 'Preetesh Kumar');
    }
    
    if (titleElement) {
        setTimeout(() => {
            typeWriter(titleElement, 'AI Engineer & Full-Stack Developer');
        }, 1500);
    }
});

// Smooth scrolling with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const headerHeight = document.querySelector('custom-navbar').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const navbar = document.querySelector('custom-navbar');
        const shadowRoot = navbar.shadowRoot;
        const mobileMenu = shadowRoot.querySelector('.nav-links');
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            const icon = shadowRoot.querySelector('.mobile-menu-btn i');
            icon.setAttribute('data-feather', 'menu');
            feather.replace();
        }
    });
});

// Form submission with animation
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="animate-spin">⏳</span> Sending...';
        
        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Show success animation
            submitBtn.innerHTML = '✓ Sent!';
            submitBtn.style.backgroundColor = '#10b981';
            
            // Reset form
            form.reset();
            
            // Reset button after delay
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.backgroundColor = '';
                submitBtn.disabled = false;
            }, 3000);
        } catch (error) {
            submitBtn.innerHTML = '✗ Error';
            submitBtn.style.backgroundColor = '#ef4444';
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.backgroundColor = '';
                submitBtn.disabled = false;
            }, 3000);
        }
    });
}
// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const animationType = entry.target.dataset.animation || 'fade-up';
            
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            if (animationType === 'fade-up') {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                entry.target.style.transition = 'all 0.6s ease-out';
            } else if (animationType === 'zoom-in') {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'scale(0.95)';
                entry.target.style.transition = 'all 0.6s ease-out';
            }
            
            setTimeout(() => {
                if (animationType === 'fade-up') {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                } else if (animationType === 'zoom-in') {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                }
            }, 100);
            
            // Animate skill bars
            if (entry.target.id === 'skills') {
                const skillBars = entry.target.querySelectorAll('.skill-bar');
                skillBars.forEach(bar => bar.classList.add('show'));
            }
        }
    });
}, observerOptions);
// Observe all sections and animated elements
document.querySelectorAll('section, .animate-on-scroll').forEach(section => {
    observer.observe(section);
});

// Hover effects for cards
document.querySelectorAll('.card-effect').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('glow');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('glow');
    });
});

// Initialize particle background
document.addEventListener('DOMContentLoaded', () => {
    VANTA.NET({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x6366f1,
        backgroundColor: 0x111827,
        points: 15.00,
        maxDistance: 25.00,
        spacing: 20.00
    });
});

// Social icons animation
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'translateY(-5px) scale(1.2)';
        icon.style.filter = 'drop-shadow(0 0 8px rgba(99, 102, 241, 0.8))';
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = '';
        icon.style.filter = '';
    });
});
