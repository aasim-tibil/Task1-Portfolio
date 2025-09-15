document.addEventListener('DOMContentLoaded', () => {
    const hamMenu = document.querySelector('.hamMenu');
    const navLinks = document.querySelector('.nav-links');
    
    hamMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    document.addEventListener('click', (event) => {
        const isClickInsideNav = navLinks.contains(event.target) || hamMenu.contains(event.target);
        if (!isClickInsideNav && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                navLinks.classList.remove('active');
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle && window.innerWidth > 600) {
        const originalText = heroTitle.textContent;
        heroTitle.innerHTML = `<span class="typewriter">${originalText}</span>`;
    }

});