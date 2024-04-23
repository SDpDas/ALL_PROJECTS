// Function to restart CSS animations
function restartAnimations() {
    const elementsToAnimate = document.querySelectorAll('.tsd, .navbar a, .home-content h3, .home-content h1, .home-content p, .home-sci a, .btm-box, .logo');

    elementsToAnimate.forEach((element) => {
        element.style.animation = 'none';
        element.offsetHeight; // Trigger reflow to restart animations
        element.style.animation = null;
    });
}

// Initialize Typed.js with callback to restart animations
var typed = new Typed(".tsd", {
    strings: ["MERN stack Developer", "Web Designer", "Creator"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
    onComplete: function () {
        restartAnimations();
    }
});

