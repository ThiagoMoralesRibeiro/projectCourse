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
let buttonMenu = document.querySelector("#buttonMenu")
let anyplace = document.querySelector('body')
buttonMenu.addEventListener('click', toggleSideBar);
navOptions.addEventListener('click', toggleSideBar)

function toggleSideBar() { 
    //effect toggle. Se for true vira false e se for false vira true
    if (showNavBar == true) {
        showNavBar = false;
    }
    else{
        showNavBar = true;
    }

    if (showNavBar) {
        navOptions.style.marginLeft = '0vw'
        navOptions.style.animationName = 'menu-collapse'
    }
    else{
        navOptions.style.marginLeft = '-100vw'
        navOptions.style.animationName = 'menu-hidden'
    }

    console.log(showNavBar);
    
    
}

