//Menu navegador do site
let nav = document.querySelector("#navMenu");
console.log(nav);
//Links da barra de navegação
let navOptions = document.querySelector("#nav-options");
console.log(navOptions);
//boolean var para controlar o abrir e fechar do menu lateral
let showNavBar = false;
//Botão de menu e botão responsável por fechar o menu
let buttonMenu = document.querySelector("#buttonMenu");
let closeMenu = document.querySelector(".icon-x")
console.log(closeMenu);
//Barra de pesquisa presente no menu
let divBusca = document.querySelector('.divBusca');

//Faz aparecer e sumir o menu lateral
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


//barra de pesquisa somente nos 1250px
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


//Loop courses Recomendados
cardStructure = document.querySelector(".card-slider-container > .card");
cardStructureDesign = document.querySelector(".card-slider-design > .card-design");
cardStructureTi = document.querySelector(".card-slider-ti > .card-ti");
cardStructureMusic = document.querySelector(".card-slider-music > .card-music");
cardStructureEng = document.querySelector(".card-slider-eng > .card-eng");
cardStructureMarketing = document.querySelector(".card-slider-mark > .card-mark")
cardStructureDev = document.querySelector(".card-slider-dev > .card-dev")
console.log(cardStructure);
function multiplyElement() { 
        let clone = cardStructure.cloneNode(true);
        let cloneDesign =  cardStructureDesign.cloneNode(true);
        let cloneTi = cardStructureTi.cloneNode(true);
        let cloneMus = cardStructureMusic.cloneNode(true);
        let cloneEng = cardStructureEng.cloneNode(true);
        let cloneMark = cardStructureMarketing.cloneNode(true);
        let cloneDev = cardStructureDev.cloneNode(true);
        document.querySelector(".card-slider-container").appendChild(clone); 
        document.querySelector(".card-slider-design").appendChild(cloneDesign); 
        document.querySelector(".card-slider-ti").appendChild(cloneTi); 
        document.querySelector(".card-slider-music").appendChild(cloneMus); 
        document.querySelector(".card-slider-eng").appendChild(cloneEng); 
        document.querySelector(".card-slider-mark").appendChild(cloneMark);
        document.querySelector(".card-slider-dev").appendChild(cloneDev);
}


for (let i = 0; i < 12; i++) {
    multiplyElement();
}


window.addEventListener("DOMContentLoaded", function() {
    var cardSliders = document.querySelectorAll(".card-slider");
    cardSliders.forEach(function(cardSlider) {
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
});

