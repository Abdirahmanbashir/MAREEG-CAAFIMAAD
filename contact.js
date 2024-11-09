ce
// Form validation
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    alert("Thank you for your message, " + name + "! We will get back to you soon.");
    
    
    document.getElementById("contactForm").reset();
});


const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener("mouseover", function () {
        this.style.color = "#f40606"; 
    });

    link.addEventListener("mouseout", function () {
        this.style.color = "rgb(11, 49, 240)"; 
    });
});
