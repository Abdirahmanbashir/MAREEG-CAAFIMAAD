
// Function to handle service clicks
function serviceClicked(serviceName) {
    alert('You have clicked on: ' + serviceName);
}

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

// Change background color of services on hover
const serviceElements = document.querySelectorAll('.service');
serviceElements.forEach(service => {
    service.addEventListener('mouseover', function () {
        this.style.backgroundColor = '#f0f8ff'; 
    });
    service.addEventListener('mouseout', function () {
        this.style.backgroundColor = ''; 
    });
});
