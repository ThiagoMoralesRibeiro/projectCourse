// let resposta;
// while (resposta != -1) {
//     resposta = prompt("Digite um número")
//     if (isNaN(resposta)) {
//         resposta = prompt("digite outro número")
//     }
//     console.log(resposta);
// }

let nav = document.querySelector("#navMenu");
console.log(nav);
let navOptions = document.querySelector("#nav-options");
console.log(navOptions);
let showNavBar = false;
let buttonMenu = document.querySelector("#buttonMenu");
let closeMenu = document.querySelector(".icon-x")
console.log(closeMenu);
let anyplace = document.querySelector('body');
let divBusca = document.querySelector('.divBusca');

buttonMenu.addEventListener('click', toggleSideBar);
closeMenu.addEventListener('click', toggleSideBar);

function toggleSideBar() { 
    //effect toggle. Se for true vira false e se for false vira true
    if (showNavBar == true) {
        showNavBar = false;
    }
    else{
        showNavBar = true;
    }

    if (showNavBar) {
        navOptions.style.marginLeft = '0vw';
        navOptions.style.animationName = 'menu-collapse';
       
    }
    else{
        navOptions.style.marginLeft = '-100vw';
        navOptions.style.animationName = 'menu-hidden';
        
    }

    console.log(showNavBar);
       
}


//barra de pesquisa somente nos 1200px
window.addEventListener('resize', function (e) { 
    if (window.innerWidth > 1250) {
        divBusca.classList.remove('hidden');
        

    }
    else{
        divBusca.classList.add('hidden');
    }
})

//menu retrátil
window.addEventListener('resize', function (e) { 
    if (window.innerWidth > 700) {
        navOptions.style.marginLeft = '0vw'
        buttonMenu.classList.add('hidden');
        closeMenu.classList.add('hidden')
        

    }
    else{
        navOptions.style.marginLeft = '-100vw';
        buttonMenu.classList.remove('hidden');
        closeMenu.classList.remove('hidden');

        


    }
})


//Loop courses
cardStructure = document.querySelector(".card-slider-container > .card");
console.log(cardStructure);
function duoElement() { 
    let clone = cardStructure.cloneNode(true);
    document.querySelector(".card-slider-container").appendChild(clone); 
}

for (let i = 0; i < 12; i++) {
    duoElement();
}


window.addEventListener("DOMContentLoaded", function() {
    var cardSlider = document.querySelector(".card-slider");
    var cardSliderContainer = cardSlider.querySelector(".card-slider-container");
    var cards = cardSliderContainer.querySelectorAll(".card");
    var prevBtn = cardSlider.querySelector(".card-slider-control.prev");
    var nextBtn = cardSlider.querySelector(".card-slider-control.next");
    
    var currentIndex = 0;
    
    function nextCard() {
      currentIndex = (currentIndex + 1) % cards.length;
      updateCardSlider();
    }
    
    function prevCard() {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      updateCardSlider();
    }
    
    function updateCardSlider() {
      var cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight);
      cardSliderContainer.style.transform = "translateX(" + (currentIndex * -cardWidth) + "px)";
    }
    
    prevBtn.addEventListener("click", prevCard);
    nextBtn.addEventListener("click", nextCard);
});