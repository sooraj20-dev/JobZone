    
    // Theme Toggle Functionality
    const themeToggle = document.getElementById('themeToggle');
       const body = document.body;
       
       themeToggle.addEventListener('click', function() {
           if (body.getAttribute('data-theme') === 'light') {
               body.setAttribute('data-theme', 'dark');
               themeToggle.innerHTML = `
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                       <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                   </svg>
               `;
           } else {
               body.setAttribute('data-theme', 'light');
               themeToggle.innerHTML = `
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                       <circle cx="12" cy="12" r="5"/>
                       <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                   </svg>
               `;
           }
       });
   // Mobile Menu Toggle
   const hamburger = document.querySelector('.hamburger');
   const mobileMenu = document.querySelector('.mobile-menu');
   
   hamburger.addEventListener('click', () => {
       mobileMenu.classList.toggle('active');
       
       const spans = hamburger.querySelectorAll('span');
       if (mobileMenu.classList.contains('active')) {
           spans[0].style.transform = 'rotate(45deg) translate(7px, 7px)';
           spans[1].style.opacity = '0';
           spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
       } else {
           spans[0].style.transform = 'none';
           spans[1].style.opacity = '1';
           spans[2].style.transform = 'none';
       }
   });
   
   // Scroll Animation
   document.addEventListener('DOMContentLoaded', () => {
       const fadeElements = document.querySelectorAll('.fade-in');
       
       const fadeInObserver = new IntersectionObserver((entries) => {
           entries.forEach(entry => {
               if (entry.isIntersecting) {
                   entry.target.style.opacity = 1;
                   fadeInObserver.unobserve(entry.target);
               }
           });
       }, { threshold: 0.1 });
       
       fadeElements.forEach(element => {
           fadeInObserver.observe(element);
           element.style.opacity = 0;
       });
   });
   
   // Fixed Navbar Effect
   window.addEventListener('scroll', () => {
       const nav = document.querySelector('nav');
       if (window.scrollY > 50) {
           nav.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
       } else {
           nav.style.boxShadow = 'none';
       }
   });

   // Select all navigation links that have an href starting with "#"
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {

// Add a click event listener to each anchor link
anchor.addEventListener('click', function(e) {
e.preventDefault(); // Prevent the default anchor behavior (jumping instantly)

// Get the target section by using the href attribute value as the selector
const target = document.querySelector(this.getAttribute('href'));

if (target) { // Check if the target element exists
   window.scrollTo({
       top: target.offsetTop - 70, // Scroll to the target position, adjusting for navbar height if necessary
       behavior: 'smooth' // Enable smooth scrolling effect
   });
}
});
});