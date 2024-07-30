window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) { 
        navbar.style.background = 'linear-gradient(90deg, rgba(253, 236, 236, 1) 50%, rgb(254 178 62 / 12%) 100%)';
    } else {
        navbar.style.background = 'initial'; 
    }
});