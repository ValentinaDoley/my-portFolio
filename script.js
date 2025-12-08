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
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: section,
            start: "top 80%", // Animates when top of section hits 80% of viewport
            toggleActions: "play reverse play reverse"
        }
    });
});