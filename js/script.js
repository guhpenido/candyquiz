function abrirModalUm() {
    let modalUm = document.querySelector(".modal-um");

    modalUm.style.display = "block";
}

function fecharModalUm() {
    let modalUm = document.querySelector(".modal-um");

    modalUm.style.display = "none";
    let inputNomeEl = document.querySelector("#nome-input");
    let spanNomeDesktopEl = document.querySelector("#nome-destkop");
    let spanNomeMobileEl = document.querySelector("#nome-mobile");

    spanNomeDesktopEl.innerHTML = inputNomeEl.value;
    spanNomeMobileEl.innerHTML = inputNomeEl.value;
    let nomeTopo = document.getElementById("nome-topo");
    nomeTopo.innerHTML = inputNomeEl.value;
}

function abrirModalDois() {
    let modalDois = document.querySelector(".modal-dois");

    modalDois.style.display = "block";
    fecharModalUm()
}

function fecharModalDois() {
    let modalDois = document.querySelector(".modal-dois");

    modalDois.style.display = "none";
}

let homeEl = document.querySelector(".home");
let menuEl = document.querySelector(".tela-menu");

function irParaMenu() {

    homeEl.style.display = 'none';
    menuEl.style.display = 'block';
    mapaEl.style.display = 'none';
}

function irParaTelaInicial() {

    homeEl.style.display = 'block';
    menuEl.style.display = 'none';
    mapaEl.style.display = 'none';
}

/*------------MENU----------------*/

let video = document.getElementById("videoBackground");
let som = document.querySelector("#som");
let links = document.querySelectorAll("ul a");
let audioClick = document.getElementById("audioClick");
let audioHover = document.getElementById("audioHover");


som.addEventListener("click", () => {
    som.classList.toggle("fa-volume-up");

    if (video.muted === false) {
        video.muted = true;
    } else {
        video.muted = false;
    }
    clickSound();
});

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", clickSound);
    links[i].addEventListener("mouseenter", hoverSound);
}

function clickSound() {
    audioClick.play();
}

function hoverSound() {
    audioHover.play();
}

function selecionarPersonagem() {
    let selecaoPersonagem = document.querySelector(".tela-personagem");
    let menu = document.querySelector(".tela-menu");

    menu.style.display = "none";
    selecaoPersonagem.style.display = "block";
    topoGeralEl.style.display = 'block';
}

function sairSelecionarPersonagem() {
    let selecaoPersonagem = document.querySelector(".tela-personagem");
    let menu = document.querySelector(".tela-menu");

    menu.style.display = "block";
    selecaoPersonagem.style.display = "none";
    topoGeralEl.style.display = 'none';
    mapaEl.style.display = 'none';
    clickSound()
}

let personagemCentralEl = document.getElementById("personagemCentral");
let personagemTopoEl = document.getElementById("personagemTopo");
let nomePersonagemTopo = document.getElementById("nomePersonagemTopo");
let botaoSelecionar = document.getElementById("selecionar");


let personagemUmEl = document.getElementById('item-a'); //caramelo
personagemUmEl.addEventListener("click", () => {
    personagemCentralEl.setAttribute('src', 'imgs/personagens/caramelo.png');
    personagemTopoEl.setAttribute('src', 'imgs/personagens/caramelo-icon.png');
    let personagem = "Caramelo";
    let habCarameloEl = document.getElementById('caramelo');
    fechaHabilidade()
    habCarameloEl.style.display = "block";
    nomePersonagemTopo.innerHTML = personagem;
    botaoSelecionar.style.display = "block";
});


let personagemDoisEl = document.getElementById('item-b'); //chocolate
personagemDoisEl.addEventListener("click", () => {
    personagemCentralEl.setAttribute('src', 'imgs/personagens/chocolate.png');
    personagemTopoEl.setAttribute('src', 'imgs/personagens/chocolate-icon.png');
    let personagem = "Chocolate";
    let habChocolateEl = document.getElementById('chocolate');
    fechaHabilidade()
    habChocolateEl.style.display = "block";
    nomePersonagemTopo.innerHTML = personagem;
    botaoSelecionar.style.display = "block";
});


let personagemTresEl = document.getElementById('item-c'); //confete
personagemTresEl.addEventListener("click", () => {
    personagemCentralEl.setAttribute('src', 'imgs/personagens/confete.png');
    personagemTopoEl.setAttribute('src', 'imgs/personagens/confete-icon.png');
    let personagem = "Confete";
    let habConfeteEl = document.getElementById('confete');
    fechaHabilidade()
    habConfeteEl.style.display = "block";
    nomePersonagemTopo.innerHTML = personagem;
    botaoSelecionar.style.display = "block";
});


let personagemQuatroEl = document.getElementById('item-d'); //cupcake
personagemQuatroEl.addEventListener("click", () => {
    personagemCentralEl.setAttribute('src', 'imgs/personagens/cupcake.png');
    personagemTopoEl.setAttribute('src', 'imgs/personagens/cupcake-icon.png');
    let personagem = "Cupcake";
    let habCupcakeEl = document.getElementById('cupcake');
    fechaHabilidade()
    habCupcakeEl.style.display = "block";
    nomePersonagemTopo.innerHTML = personagem;
    botaoSelecionar.style.display = "block";
});


let personagemCincoEl = document.getElementById('item-e'); //geladinho
personagemCincoEl.addEventListener("click", () => {
    personagemCentralEl.setAttribute('src', 'imgs/personagens/geladinho.png');
    personagemTopoEl.setAttribute('src', 'imgs/personagens/geladinho-icon.png');
    let personagem = "Geladinho";
    let habGeladinhoEl = document.getElementById('geladinho');
    fechaHabilidade()
    habGeladinhoEl.style.display = "block";
    nomePersonagemTopo.innerHTML = personagem;
    botaoSelecionar.style.display = "block";
});


let personagemSeisEl = document.getElementById('item-f'); //jujuba
personagemSeisEl.addEventListener("click", () => {
    personagemCentralEl.setAttribute('src', 'imgs/personagens/jujuba.png');
    personagemTopoEl.setAttribute('src', 'imgs/personagens/jujuba-icon.png');
    let personagem = "Jujuba";
    let habJujubaEl = document.getElementById('jujuba');
    fechaHabilidade()
    habJujubaEl.style.display = "block";
    nomePersonagemTopo.innerHTML = personagem;
    botaoSelecionar.style.display = "block";
});


let personagemSeteEl = document.getElementById('item-g'); //raspadinha
personagemSeteEl.addEventListener("click", () => {
    personagemCentralEl.setAttribute('src', 'imgs/personagens/raspadinha.png');
    personagemTopoEl.setAttribute('src', 'imgs/personagens/raspadinha-icon.png');
    let personagem = "Raspadinha";
    let habRaspadinhaEl = document.getElementById('raspadinha');
    fechaHabilidade()
    habRaspadinhaEl.style.display = "block";
    nomePersonagemTopo.innerHTML = personagem;
    botaoSelecionar.style.display = "block";
});



function fechaHabilidade() {
    let hab1 = document.getElementById('caramelo');
    let hab2 = document.getElementById('chocolate');
    let hab3 = document.getElementById('confete');
    let hab4 = document.getElementById('cupcake');
    let hab5 = document.getElementById('geladinho');
    let hab6 = document.getElementById('jujuba');
    let hab7 = document.getElementById('raspadinha');
    hab1.style.display = "none";
    hab2.style.display = "none";
    hab3.style.display = "none";
    hab4.style.display = "none";
    hab5.style.display = "none";
    hab6.style.display = "none";
    hab7.style.display = "none";
}

/*-------------------------------------*/

let levelTopoEl = document.getElementById('levelTopo');
let level = 0;
levelTopoEl.innerHTML = level;

let selecaoPersonagemEl = document.querySelector(".tela-personagem");
let mapaEl = document.querySelector(".tela-mapa");
let topoGeralEl = document.querySelector(".cabecalho");

function irParaSelecaoMapa() {
    homeEl.style.display = 'none';
    menuEl.style.display = 'none';
    selecaoPersonagemEl.style.display = 'none';
    mapaEl.style.display = 'block';
    topoGeralEl.style.display = 'block';
}

VanillaTilt.init(document.querySelectorAll(".retangulo"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1,
});