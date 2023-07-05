let checkButtom = document.querySelector('#check');
let passwordArea = document.querySelector('#pass')
console.log(checkButtom);
checkButtom.addEventListener('click', togglePass)

function togglePass() { 
    if (checkButtom.checked) {
        passwordArea.type = 'text';
    }
    else{
        passwordArea.type = 'password'
    }
}

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