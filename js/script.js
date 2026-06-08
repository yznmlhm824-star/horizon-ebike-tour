// ===== MOBILE MENU TOGGLE =====
const menuIcon = document.getElementById('menuIcon');
const navMenu = document.getElementById('navMenu');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuIcon.setAttribute('aria-expanded', navMenu.classList.contains('open'));
});

// Close menu when link clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuIcon.setAttribute('aria-expanded', 'false');
    });
});

// ===== SCROLL TO TOP BUTTON =====
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// ===== ACTIVE NAV LINK =====
window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===== REVEAL ANIMATION =====
const revealElements = document.querySelectorAll('.reveal');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

revealElements.forEach(element => {
    observer.observe(element);
});

// ===== TOAST NOTIFICATION =====
function showToast(message = 'تم بنجاح!', duration = 3000) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// ===== FORM HANDLING =====
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic validation
            let isValid = true;
            form.querySelectorAll('input, textarea, select').forEach(field => {
                if (!field.value.trim()) {
                    field.classList.add('error');
                    isValid = false;
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (isValid) {
                showToast('شكراً لحجزك! سنتواصل معك قريباً.');
                form.reset();
            } else {
                showToast('الرجاء ملء جميع الحقول المطلوبة');
            }
        });
    }
});

// ===== SMOOTH SCROLL LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== CURRENCY FORMATTER =====
function formatCurrency(amount) {
    return new Intl.NumberFormat('ar-SY', {
        style: 'currency',
        currency: 'SYP'
    }).format(amount);
}

// ===== TESTIMONIALS SLIDER (if needed) =====
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');

function showSlide(n) {
    slides.forEach(slide => slide.style.display = 'none');
    if (slides[n]) {
        slides[n].style.display = 'block';
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto-advance slides every 5 seconds
if (slides.length > 0) {
    setInterval(nextSlide, 5000);
}

// ===== COUNTDOWN TIMER =====
function startCountdown(targetDate) {
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = new Date(targetDate).getTime() - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        const countdownElement = document.getElementById('countdown');
        if (countdownElement) {
            countdownElement.innerHTML = `${days}د ${hours}س ${minutes}د ${seconds}ث`;
        }
        
        if (distance < 0) {
            clearInterval(timer);
            if (countdownElement) {
                countdownElement.innerHTML = 'انتهت الرحلة!';
            }
        }
    }, 1000);
}

// ===== LAZY LOAD IMAGES =====
if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===== SHARE FUNCTIONALITY =====
function shareToSocial(platform, url, title) {
    let shareUrl = '';
    
    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
            break;
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${title} ${url}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

// ===== PAGE LOAD ANIMATIONS =====
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ===== CONSOLE MESSAGE =====
console.log('%c✨ أُفق | HORIZON ✨', 'color: #c8a45a; font-size: 20px; font-weight: bold;');
console.log('%cرحلات دراجات هوائية مستدامة في قلب سورية', 'color: #0e2d1a; font-size: 14px;');
console.log('%cwww.horizon-ebike.sy', 'color: #c8a45a; font-size: 12px;');
