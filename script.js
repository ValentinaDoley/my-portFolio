// Setting up/activating the ScrollTrigger/turning on
gsap.registerPlugin(ScrollTrigger);

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

// Animation Code setup
//This finds ever <section> and animates it when you scroll
const allSections = document.querySelectorAll("section");

allSections.forEach((section) => {
    gsap.from(section, {
        y: 50,
        opacity: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: section,
            start: "top 80%", // Animates when top of section hits 80% of viewport
            toggleActions: "play reverse play reverse"
        }
    });
});

// about-me p hover effect
const aboutContentP = document.querySelector('.about-content p');
let currentAngle = 0;
let animationId;

function spin() {
    currentAngle += 1.5; // controls speed
    aboutContentP.style.transform = `rotate(${currentAngle}deg)`;
    animationId = requestAnimationFrame(spin);
};

aboutContentP.addEventListener('mouseenter', () => {
    spin(); // starts the animation
});

aboutContentP.addEventListener('mouseleave', () => {
    cancelAnimationFrame(animationId); //stops where the cursor left
});