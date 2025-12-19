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
const aboutP = document.querySelector('.about-content p');

aboutP.addEventListener('mouseenter', () => {
    gsap.to(aboutP, {
        rotationY: 15,   // Tilts side-to-side
        rotationX: -5,  //Tilts forward-backward
        scale: 1.02,    // subtle zoom
        duration: 0.6,
        ease: "power2.out"  // power2.out is a smooth easing function
    });
});

aboutP.addEventListener('mouseleave', () => {
    gsap.to(aboutP, {
        rotationY: 0,
        rotationX: 0, // Resets tilt
        scale: 1,    //Resets zoom
        duration: 0.8,
        ease: "elastic.out(1, 0.5)" //adds a cute little bounce when its resetting
    });
});

const logoAlive = document.querySelector('.logo');

logoAlive.addEventListener('mouseenter', () => {
    gsap.to(logoAlive, {
        rotationY: 15,   // Tilts side-to-side
        rotationX: -5,  //Tilts forward-backward
        scale: 1.02,    // subtle zoom
        duration: 0.6,
        ease: "power2.out"  // power2.out is a smooth easing function
    });
});

logoAlive.addEventListener('mouseleave', () => {
    gsap.to(logoAlive, {
        rotationY: 0,
        rotationX: 0, // Resets tilt
        scale: 1,    //Resets zoom
        duration: 0.8,
        ease: "elastic.out(1, 0.5)" //adds a cute little bounce when its resetting
    });
});

// Thank-you modal logic for contact form
const contactForm = document.querySelector('form');
const modal = document.querySelector('#thanks-modal');
const closeBtn = document.querySelector('.close-btn');
const modalBtn = document.querySelector('#modal-close-btn');

contactForm.onsubmit = async (e) => {
    e.preventDefault();  // Stops the page from redirecting/reloading

    console.log("Form submission...")

    const formData = new FormData(contactForm);

    // Sends the data to Formspree in the background
    try{
    const response  = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {'Accept': 'application/json'}
    });

    if(response.ok) {
        console.log("Formspree success!");
        modal.style.display = 'flex';
        contactForm.reset();
    } else {
        console.log("Formspree error. Status:")
        alert("Oops! There was a problem submitting your form");
    }
    } catch (error) {
        console.log("Network error:", error)
    }
};
//Close Modal logic
const closeModal = () => modal.style.display = 'none';
closeBtn.onclick = closeModal;
modalBtn.onclick = closeModal;
window.onclick = (e) => {
    if (e.target == modal)
        closeModal();
};