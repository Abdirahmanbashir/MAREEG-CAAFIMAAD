
const header = document.querySelector('header');
const h1 = header.querySelector('h1');

// Uppercase the text 
h1.textContent = h1.textContent.toUpperCase();


        // Toggle Menu 
        function toggleMenu() {
            const menuList = document.getElementById('menu-list');
            menuList.classList.toggle('active');
            const toggleButton = document.getElementById('menu-toggle');
            toggleButton.classList.toggle('open');
        }

     
        const testimonialBtns = document.querySelectorAll('.testimonial-btn');
        testimonialBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                alert('Aqris Faahfaahin dheeri ah oo ku saabsan bukaankan.');
            });
        });
    