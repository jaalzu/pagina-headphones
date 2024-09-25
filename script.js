document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('menu-btn');
    const navList = document.getElementById('nav-list');
    const closeMenu = document.getElementById('close-btn');

    navMenu.addEventListener('click', () => {
      navList.classList.toggle('show-menu');
      navMenu.style.display = 'none';
      closeMenu.style.display = 'block';
    });

    closeMenu.addEventListener('click', () => {
      closeMenu.style.display = 'none';
      navMenu.style.display = 'block';
      navList.classList.toggle('show-menu');
    });
  });









    // Inicializar ScrollReveal
    ScrollReveal().reveal('.hero', {
      // Opciones de ScrollReveal aquí
      duration: 1000, // Duración de la animación
      distance: '50px', // Distancia de desplazamiento
      easing: 'ease-in-out' // Easing de la animación
  });