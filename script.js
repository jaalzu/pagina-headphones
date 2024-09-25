document.addEventListener('DOMContentLoaded', () => {
  const navMenu = document.getElementById('menu-btn');
  const navList = document.getElementById('nav-list');
  const closeMenuBtn = document.getElementById('close-btn');
  const menuLinks = document.querySelectorAll('.nav__links');

  navMenu.addEventListener('click', () => {
    navList.classList.add('show-menu');
    navMenu.style.display = 'none';
    closeMenuBtn.style.display = 'block';
  });

  closeMenuBtn.addEventListener('click', () => {
    closeNavMenu();
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeNavMenu();
    });
  });

  function closeNavMenu() {
    navList.classList.remove('show-menu');
    closeMenuBtn.style.display = 'none';
    navMenu.style.display = 'block';
  }
});


  //   ScrollReveal().reveal('.hero__title ', {
  //     duration: 1100,
  //     distance: '150px', 
  //     easing: 'ease-in-out',
  // });
   


// ScrollReveal().reveal('.navbar', {
//   duration: 700,       
//   distance: '50px',    
//   easing: 'ease-in-out',
//   delay: 1000,          
//   origin: 'top'       
// });


  //   ScrollReveal().reveal('.hero__subtitle', {

  //     duration: 500, 
  //     distance: '20px', 
  //     easing: 'ease', 
  // });



// ScrollReveal().reveal('.section__title', {
//   duration: 1500,      
//   distance: '150px',     
//   origin: 'bottom',    
//   reset: false,         
//   opacity: 0,          
//   scale: 0.5            
// });



// ScrollReveal().reveal('.product__flex', {
//   duration: 1000,  
//   distance: '50px', 
//   easing: 'ease',
//   delay: 1000
// });


// ScrollReveal().reveal('.uses__grid', {
//   
//   duration: 1000,
//   distance: '100px',
//   easing: 'ease-in',
//   delay: 500,
//   origin:'left'
// });
// ScrollReveal().reveal('.gallery', {
//  
//   duration: 1000,
//   distance: '50px', 
//   easing: 'ease-in',
//   delay: 500,
//   origin:'right'
// });


// ScrollReveal().reveal('.about__description', {
//   
//   duration: 1000, 
//   distance: '150px',
//   easing: 'ease-in',
//   delay: 500,
//   origin:'bottom'
// });


// ScrollReveal().reveal('.about__grid', {
//   duration: 1000,
//   distance: '150px',
//   easing: 'ease-in',
//   delay: 1000,
//   origin:'bottom'
// });


// ScrollReveal().reveal('.sponsors', {
//   duration: 1000, 
//   distance: '100px', 
//   easing: 'ease',
//   delay: 1500,
//   origin:'left'
// });


// ScrollReveal().reveal('.discount__box', {
//  
//   duration: 1000,
//   distance: '100px',
//   easing: 'ease',
//   delay: 1000,
//   origin:'bottom'
// });
