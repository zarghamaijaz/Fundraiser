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