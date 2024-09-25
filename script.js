document.addEventListener('DOMContentLoaded', () => {
  const navMenu = document.getElementById('menu-btn');
  const navList = document.getElementById('nav-list');
  const closeMenuBtn = document.getElementById('close-btn');
  const menuLinks = document.querySelectorAll('.nav__links');

  // Abrir el menú
  navMenu.addEventListener('click', () => {
    navList.classList.add('show-menu');
    navMenu.style.display = 'none';
    closeMenuBtn.style.display = 'block';
  });

  // Cerrar el menú desde el botón de cierre
  closeMenuBtn.addEventListener('click', () => {
    closeNavMenu();
  });

  // Cerrar el menú cuando se hace clic en uno de los enlaces
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeNavMenu();
    });
  });

  // Función para cerrar el menú y restaurar el estado del botón
  function closeNavMenu() {
    navList.classList.remove('show-menu');
    closeMenuBtn.style.display = 'none';
    navMenu.style.display = 'block';
  }
});


  //   // Inicializar ScrollReveal
  //   ScrollReveal().reveal('.hero__title ', {
  //     // Opciones de ScrollReveal aquí
  //     duration: 1100, // Duración de la animación
  //     distance: '150px', // Distancia de desplazamiento
  //     easing: 'ease-in-out',
  // });
   


// // Inicializar ScrollReveal
// ScrollReveal().reveal('.navbar', {
//   duration: 700,       // Duración de la animación
//   distance: '50px',    // Distancia de desplazamiento
//   easing: 'ease-in-out',// Easing de la animación
//   delay: 1000,           // Retraso antes de comenzar la animación (en milisegundos)
//   origin: 'top'         // El contenido aparece desde arriba
// });


  //   ScrollReveal().reveal('.hero__subtitle', {

  //     // Opciones de ScrollReveal aquí
  //     duration: 500, // Duración de la animación
  //     distance: '20px', // Distancia de desplazamiento
  //     easing: 'ease', // Easing de la animación
  //     delay: 1000            // Retraso antes de comenzar la animación (en milisegundos)
  // });



//   // Animar elementos que cambian cuando haces scroll
// ScrollReveal().reveal('.section__title', {
//   duration: 1500,       // Duración de la animación
//   distance: '150px',     // Distancia de desplazamiento
//   origin: 'bottom',     // Aparecen desde abajo
//   reset: false,          // Se vuelve a ejecutar cuando haces scroll hacia arriba
//   opacity: 0,           // Inicia siendo invisible
//   scale: 0.5            // Inicia con un tamaño reducido
// });



// ScrollReveal().reveal('.product__flex', {
//   // Opciones de ScrollReveal aquí
//   duration: 1000, // Duración de la animación
//   distance: '50px', // Distancia de desplazamiento
//   easing: 'ease', // Easing de la animación
//   delay: 1000            // Retraso antes de comenzar la animación (en milisegundos)
// });


// ScrollReveal().reveal('.uses__grid', {
//   // Opciones de ScrollReveal aquí
//   duration: 1000, // Duración de la animación
//   distance: '100px', // Distancia de desplazamiento
//   easing: 'ease-in', // Easing de la animación
//   delay: 500,
//   origin:'left'
// });
// ScrollReveal().reveal('.gallery', {
//   // Opciones de ScrollReveal aquí
//   duration: 1000, // Duración de la animación
//   distance: '50px', // Distancia de desplazamiento
//   easing: 'ease-in', // Easing de la animación
//   delay: 500,
//   origin:'right'
// });


// ScrollReveal().reveal('.about__description', {
//   // Opciones de ScrollReveal aquí
//   duration: 1000, // Duración de la animación
//   distance: '150px', // Distancia de desplazamiento
//   easing: 'ease-in', // Easing de la animación
//   delay: 500,
//   origin:'bottom'
// });


// ScrollReveal().reveal('.about__grid', {
//   // Opciones de ScrollReveal aquí
//   duration: 1000, // Duración de la animación
//   distance: '150px', // Distancia de desplazamiento
//   easing: 'ease-in', // Easing de la animación
//   delay: 1000,
//   origin:'bottom'
// });


// ScrollReveal().reveal('.sponsors', {
//   // Opciones de ScrollReveal aquí
//   duration: 1000, // Duración de la animación
//   distance: '100px', // Distancia de desplazamiento
//   easing: 'ease', // Easing de la animación
//   delay: 1500,
//   origin:'left'
// });


// ScrollReveal().reveal('.discount__box', {
//   // Opciones de ScrollReveal aquí
//   duration: 1000, // Duración de la animación
//   distance: '100px', // Distancia de desplazamiento
//   easing: 'ease', // Easing de la animación
//   delay: 1000,
//   origin:'bottom'
// });
