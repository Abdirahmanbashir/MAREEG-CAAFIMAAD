
// Smooth scrolling 
document.querySelectorAll('a').forEach(anchor => {
    if (anchor.getAttribute('href').startsWith("#")) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});
