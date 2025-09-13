// Mobile menu toggle
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Close menu on scroll
window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
};
