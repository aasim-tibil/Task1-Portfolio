document.addEventListener('DOMContentLoaded', function() {
    const hamMenu = document.querySelector('.hamMenu');
    const navLinks = document.querySelector('.nav-links');
    
    hamMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    document.addEventListener('click', function(event) {
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
});