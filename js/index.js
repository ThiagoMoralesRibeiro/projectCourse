// let resposta;
// while (resposta != -1) {
//     resposta = prompt("Digite um número")
//     if (isNaN(resposta)) {
//         resposta = prompt("digite outro número")
//     }
//     console.log(resposta);
// }

// let nav = document.querySelector("#navMenu");
// console.log(nav);
// let navOptions = document.querySelector("#nav-options");
// console.log(navOptions);
// let showNavBar = false;
// let buttonMenu = document.querySelector("#buttonMenu");
// let anyplace = document.querySelector('body');
// let divBusca = document.querySelector('.divBusca');

// buttonMenu.addEventListener('click', toggleSideBar);
// navOptions.addEventListener('click', toggleSideBar)

// function toggleSideBar() { 
//     //effect toggle. Se for true vira false e se for false vira true
//     if (showNavBar == true) {
//         showNavBar = false;
//     }
//     else{
//         showNavBar = true;
//     }

//     if (showNavBar) {
//         navOptions.style.marginLeft = '0vw';
//         navOptions.style.animationName = 'menu-collapse';
       
//     }
//     else{
//         navOptions.style.marginLeft = '-100vw';
//         navOptions.style.animationName = 'menu-hidden';
        
//     }

//     console.log(showNavBar);
       
// }


// //barra de pesquisa somente nos 1200px
// window.addEventListener('resize', function (e) { 
//     if (window.innerWidth > 1200) {
//         divBusca.classList.remove('hidden');
        

//     }
//     else{
//         divBusca.classList.add('hidden');
//     }
// })

// //menu retrátil
// window.addEventListener('resize', function (e) { 
//     if (window.innerWidth > 700) {
//         navOptions.style.marginLeft = '0vw'
//         buttonMenu.classList.add('hidden');
        

//     }
//     else{
//         navOptions.style.marginLeft = '-100vw';
//         buttonMenu.classList.remove('hidden');
        


//     }
// })

// let css = '.course-card img:hover{transform: scale(1.1)} .course-card img{transition: all ease 0.3s;width: 25%;}';
// styleConvert = document.createElement('style');
// let categories = document.querySelectorAll('#item-card');
// for (let i = 0; i < categories.length; i++) {
//     const element = categories[i];
//     element.addEventListener('mouseover', function () { 
//         if (styleConvert.styleSheet) {
//             styleConvert.styleSheet.cssText = css;
//         }
//         else{
//             styleConvert.appendChild(document.createTextNode(css));
//         }

//         document.getElementsByTagName('head')[0].appendChild(styleConvert);
        
//     })  
// }

// // Carrossel de Slides para o Banner

// let banner = document.getElementById("banner-header");
// console.log(banner);
// let backButton = document.querySelector("#back");
// let nextButton = document.querySelector("#next");
// let arrImages = ['ban01.avif', 'ban02.jpg',]
// let styles = ['background-repeat: no-repeat;',
//     'background-position: center;',
//     'background-size: cover;',
//     'background-attachment: fixed;',
//     'width: 100%;',
//     'height: 100vh;',
//     'display: flex;',
//     'justify-content: center;',
//     'align-items: center;',
//     'flex-flow: column;',
//     'text-align: center;',
//     'color: #fff;',
//     'z-index: -1;']
// console.log(backButton);
// console.log(nextButton);
// console.log(typeof arrImages[0]);

// nextButton.addEventListener('click', function () { 
//     banner.style.background = "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.5)),url(../img/" + arrImages[0] + ")";
    
// })

//Loop courses
// cardStructure = document.querySelector(".carousel > .card");
// console.log(cardStructure);
// function duoElement() { 
//     let clone = cardStructure.cloneNode(true);
//     document.querySelector(".carousel").appendChild(clone); 
// }

// for (let i = 0; i < 12; i++) {
//     duoElement();
// }



// window.addEventListener("DOMContentLoaded", function() {
//     var cardSlider = document.querySelector(".card-slider");
//     var cardSliderContainer = cardSlider.querySelector(".card-slider-container");
//     var cards = cardSliderContainer.querySelectorAll(".card");
//     var prevBtn = cardSlider.querySelector(".card-slider-control.prev");
//     var nextBtn = cardSlider.querySelector(".card-slider-control.next");
    
//     var currentIndex = 0;
    
//     function nextCard() {
//       currentIndex = (currentIndex + 1) % cards.length;
//       updateCardSlider();
//     }
    
//     function prevCard() {
//       currentIndex = (currentIndex - 1 + cards.length) % cards.length;
//       updateCardSlider();
//     }
    
//     function updateCardSlider() {
//       var cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight);
//       cardSliderContainer.style.transform = "translateX(" + (currentIndex * -cardWidth) + "px)";
//     }
    
//     prevBtn.addEventListener("click", prevCard);
//     nextBtn.addEventListener("click", nextCard);
// });