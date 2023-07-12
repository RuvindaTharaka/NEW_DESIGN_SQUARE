function toggleNavLinks() {
    var navLinks = document.querySelector('.nav-links');
    var toggleIcon = document.querySelectorAll('.toggle-icon');
    var dropdownLinks = document.querySelector('.dropdown-links');

    if (dropdownLinks.style.display === 'none') {
        dropdownLinks.style.display = 'block';
    } else {
        dropdownLinks.style.display = 'none';
    }
}


function loadDescription(step) {
    var descriptionDiv = document.getElementById("description");
    var description = 'Description-01 ---We are furnishing a service spread from residential domestic houses to commercial and star grade office interior spaces in Sri Lanka. The artistic and architectural value of our designs seconds our name, the Design Square again and again. The creativity and the tailormade nature which well-matched with the client needs have elevated our projects and assignments in a higher rank branch, top notch in the design world tree.';

    switch (step) {
        case 1:
            description = 'Description-01 ---We are furnishing a service spread from residential domestic houses to commercial and star grade office interior spaces in Sri Lanka. The artistic and architectural value of our designs seconds our name, the Design Square again and again. The creativity and the tailormade nature which well-matched with the client needs have elevated our projects and assignments in a higher rank branch, top notch in the design world tree.';
            break;
        case 2:
            description = 'Description-02 ---We are furnishing a service spread from residential domestic houses to commercial and star grade office interior spaces in Sri Lanka. The artistic and architectural value of our designs seconds our name, the Design Square again and again. The creativity and the tailormade nature which well-matched with the client needs have elevated our projects and assignments in a higher rank branch, top notch in the design world tree.';
            break;
        case 3:
            description = 'Description-03 ---We are furnishing a service spread from residential domestic houses to commercial and star grade office interior spaces in Sri Lanka. The artistic and architectural value of our designs seconds our name, the Design Square again and again. The creativity and the tailormade nature which well-matched with the client needs have elevated our projects and assignments in a higher rank branch, top notch in the design world tree.';
            break;
        case 4:
            description = 'Description-04 ---We are furnishing a service spread from residential domestic houses to commercial and star grade office interior spaces in Sri Lanka. The artistic and architectural value of our designs seconds our name, the Design Square again and again. The creativity and the tailormade nature which well-matched with the client needs have elevated our projects and assignments in a higher rank branch, top notch in the design world tree.';
            break;
        default:
            description = "Invalid step";
            break;
    }

    descriptionDiv.textContent = description;


    const stepWraps = document.querySelectorAll('.step_wrap');
    stepWraps.forEach((stepWrap) => {
        stepWrap.addEventListener('click', () => {
            stepWraps.forEach((otherStepWrap) => {
                if (otherStepWrap !== stepWrap) {
                    otherStepWrap.classList.remove('clicked');
                }
            });

            stepWrap.classList.toggle('clicked');
        });
    });


}

function loadDescMain(step) {

    var descDiv = document.getElementById("product_des_main");
    var descSub1 = document.getElementById("product_des-1");
    var descSub2 = document.getElementById("product_des-2");
    var descSub3 = document.getElementById("product_des-3");
    var descSub4 = document.getElementById("product_des-4");
    var descSub5 = document.getElementById("product_des-5");

    var descMain = 'Description-01 ---We are furnishing a service spread from residential domestic houses to commercial and star grade office interior spaces in Sri Lanka. The artistic and architectural value of our designs seconds our name, the Design Square again and again. The creativity and the tailormade nature which well-matched with the client needs have elevated our projects and assignments in a higher rank branch, top notch in the design world tree.';

    switch (step) {
        case 1:
            descMain = 'Description-01 ---We are furnishing a service spread from residential domestic houses to commercial and star grade office interior spaces in Sri Lanka. The artistic and architectural value of our designs seconds our name, the Design Square again and again. The creativity and the tailormade nature which well-matched with the client needs have elevated our projects and assignments in a higher rank branch, top notch in the design world tree.';
            descSub1.textContent = descMain;
            descSub2.textContent = "";
            descSub3.textContent = "";
            descSub4.textContent = "";
            descSub5.textContent = "";
            break;
        case 2:
            descMain = 'Description-02 ---We are furnishing a service spread from residential domestic houses to commercial and star grade office interior spaces in Sri Lanka. The artistic and architectural value of our designs seconds our name, the Design Square again and again. The creativity and the tailormade nature which well-matched with the client needs have elevated our projects and assignments in a higher rank branch, top notch in the design world tree.';
            descSub2.textContent = descMain;
            descSub1.textContent = "";
            descSub3.textContent = "";
            descSub4.textContent = "";
            descSub5.textContent = "";
            break;
        case 3:
            descMain = 'Description-03 ---We are furnishing a service spread from residential domestic houses to commercial and star grade office interior spaces in Sri Lanka. The artistic and architectural value of our designs seconds our name, the Design Square again and again. The creativity and the tailormade nature which well-matched with the client needs have elevated our projects and assignments in a higher rank branch, top notch in the design world tree.';
            descSub3.textContent = descMain;
            descSub2.textContent = "";
            descSub1.textContent = "";
            descSub4.textContent = "";
            descSub5.textContent = "";
            break;
        case 4:
            descMain = 'Description-04 ---We are furnishing a service spread from residential domestic houses to commercial and star grade office interior spaces in Sri Lanka. The artistic and architectural value of our designs seconds our name, the Design Square again and again. The creativity and the tailormade nature which well-matched with the client needs have elevated our projects and assignments in a higher rank branch, top notch in the design world tree.';
            descSub4.textContent = descMain;
            descSub2.textContent = "";
            descSub3.textContent = "";
            descSub1.textContent = "";
            descSub5.textContent = "";
            break;
        case 5:
            descMain = 'Description-05 ---We are furnishing a service spread from residential domestic houses to commercial and star grade office interior spaces in Sri Lanka. The artistic and architectural value of our designs seconds our name, the Design Square again and again. The creativity and the tailormade nature which well-matched with the client needs have elevated our projects and assignments in a higher rank branch, top notch in the design world tree.';
            descSub5.textContent = descMain;
            descSub2.textContent = "";
            descSub3.textContent = "";
            descSub1.textContent = "";
            descSub4.textContent = "";
            break;
        default:
            descMain = "Invalid step";
            break;
    }

    descDiv.textContent = descMain;
}


/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 3800,
    reset: true,
})

sr.reveal(`
        .home_content_div_h1,
        .logo,
        .client_container5
    `, {
    origin: 'top',
    interval: 500,
})

sr.reveal(`
        .home_content_div_h2,
        .p_1,
        .p_3,
        .p_5
        
    `, {
    origin: 'bottom',
    interval: 800,
})

sr.reveal(`
        .home_content_div_p,
        .home_content_div_btn_explore
        
    `, {
    origin: 'bottom',
    interval: 3000,
})

sr.reveal(`
        .about_content_div
        
    `, {
    origin: 'right',
    interval: 2000,
})


sr.reveal(`
        .about_img_div>img,
        .img_back_green-l,
        .new_services-img-r
        
    `, {
    origin: 'left',
    interval: 800,
})

sr.reveal(`
    .new_services-img-l,
    .img_back_green-r
        
    `, {
    origin: 'right',
    interval: 800,
})

sr.reveal(`
   
    .img_box
        
    `, {
    origin: 'bottom',
    interval: 100,
})

