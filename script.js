const navmenu=document.querySelector('#navmenu');
const navlinks=navmenu.querySelectorAll('.nav-link');
const icon=document.querySelector('#icon-menu');
icon.addEventListener('click',()=>{
    navmenu.classList.toggle("left-[0%]");
    icon.classList.toggle("ri-close-large-line");
}
);
navlinks.forEach(link=>{
    link.addEventListener('click',()=>{
        navmenu.classList.toggle("left-[0%]");
        icon.classList.toggle("ri-close-large-line");
    }
    );
})
const swiper = new Swiper('.swiper', {
    // Optional parameters
     speed : 400,
     spaceBetween : 30,
     autoplay: {
        delay : 2000,
        disableOnInteraction: false,
     },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    grabcursor: true,
    breakpoints: {
        
    }
  
 
  });