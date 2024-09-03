// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling for navigation links
    const smoothScroll = (target) => {
        const element = document.querySelector(target);
        window.scrollTo({
            top: element.offsetTop - 70,
            behavior: 'smooth'
        });
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            smoothScroll(this.getAttribute('href'));
        });
    });

    // Change header background on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Form submission
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Mesajınız gönderildi! Size en kısa sürede dönüş yapacağız.');
            this.reset();
        });
    }

    // Image lazy loading for gallery
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    image.removeAttribute('data-src');
                    imageObserver.unobserve(image);
                }
            });
        });

        lazyImages.forEach(image => imageObserver.observe(image));
    }

    // Mobile menu toggle
    const menuToggle = document.createElement('button');
    menuToggle.innerHTML = '&#9776;'; // Hamburger icon
    menuToggle.classList.add('menu-toggle');
    document.querySelector('header .container').prepend(menuToggle);

    const nav = document.querySelector('header nav');
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
});
