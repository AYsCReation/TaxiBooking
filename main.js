let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
const signup = document.querySelector('.sign-up');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
   
}


window.onscroll =()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
    
}


document.addEventListener('DOMContentLoaded', () => {
    
    const animatedElements = document.querySelectorAll('.text, .form-container form, .heading, .ride-container .box, .services-container .box, .about-container .box, .reviews-container, .newsletter .box');
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
  
    // Function to handle scroll event
    const handleScroll = () => {
      animatedElements.forEach((element) => {
        if (isInViewport(element)) {
          element.style.animationPlayState = 'running';
          element.style.opacity = 1;
        }
      });
    };
  
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
  
    // Trigger initial animation check on page load
    handleScroll();
  });
  const menuIcon = document.getElementById("menu-icon");
  const navbar1 = document.querySelector(".navbar");

  menuIcon.addEventListener("click", function () {
      navbar1.classList.toggle("collapsed");
  });