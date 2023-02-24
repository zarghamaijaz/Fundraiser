// mobile nav menu functionality
(function mobileNavMenu(){
    const hamburger = document.querySelector(".hamburger-icon");
    if(hamburger){
        hamburger.onclick = e => {
            e.preventDefault();
            const nav = document.querySelector(".header-nav-links");
            if(nav){
                const isActive = nav.classList.contains("nav-active");
                if(isActive){
                    nav.classList.remove("nav-active");
                    hamburger.innerHTML = "<i class='fa fa-bars'></i>"
                }
                else{
                    nav.classList.add("nav-active");
                    hamburger.innerHTML = "<i class='fa fa-times'></i>"
                }
            }
        }
    }
})()



const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    breakpoints: {
        992: {
          slidesPerView: 4,
          spaceBetween: 24
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24
        },
    },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction:false,
    },
  });


( function entranceAnimations(){
    const elements = document.querySelectorAll(".entry-animated");
    if(elements){
        const observer = new IntersectionObserver(entries=>{
            entries.forEach(entry=>{
                entry.target.classList.toggle("show", entry.isIntersecting);
                if(entry.isIntersecting) observer.unobserve(entry.target)
            })
        }, {
            threshold:0.6
        });
        elements.forEach(element=>{
            observer.observe(element)
        })
    }

})();