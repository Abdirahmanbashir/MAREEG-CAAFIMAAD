
        // Toggle menu  on mobile
        function toggleMenu() {
            var menu = document.getElementById('menu-list');
            var button = document.getElementById('menu-toggle');
            if (menu.style.display === "block") {
                menu.style.display = "none";
                button.innerHTML = "☰"; // Show the hamburger icon
            } else {
                menu.style.display = "block";
                button.innerHTML = "×"; // Show the icon
            }
        }

        //  slideshow
        let currentSlide = 0;
        const images = [
            "./img/Home2.png",
            "./img/HOME1.png",
            "./img/01.jpg",
            "./img/equipment.png"
        ];

        function changeSlide() {
            currentSlide = (currentSlide + 1) % images.length;
            document.getElementById("slide-img").src = images[currentSlide];
        }

        // Badal slide show 3 seconds
        setInterval(changeSlide, 3000);

        function toggleContent(contentId) {
            const content = document.getElementById(contentId);
            const button = content.nextElementSibling;  
            if (content.style.display === "none") {
                content.style.display = "block";
                button.innerHTML = "Read Less"; // Change button text
            } else {
                content.style.display = "none";
                button.innerHTML = "Read More"; // Change button text
            }
        }
    







        
    