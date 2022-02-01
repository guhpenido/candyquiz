let valorGuardadoNome = localStorage.getItem('NomeUsuario');
nomeUsuarioEl = valorGuardadoNome;
let nomeTopo = document.getElementById("nome-topo");
nomeTopo.innerHTML = nomeUsuarioEl;


let levelTopoEl = document.getElementById('levelTopo');
let level = 0;
localStorage.setItem('level', level);
levelTopoEl.innerHTML = level;

function sairSelecionarPersonagem() {
    window.location = "menu.html";
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
    localStorage.setItem('personagem', personagem);
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
    localStorage.setItem('personagem', personagem);
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
    localStorage.setItem('personagem', personagem);
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
    localStorage.setItem('personagem', personagem);
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
    localStorage.setItem('personagem', personagem);
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
    localStorage.setItem('personagem', personagem);
});


let personagemSeteEl = document.getElementById('item-g'); //raspadinha
personagemSeteEl.addEventListener("click", () => {
    personagemCentralEl.setAttribute('src', 'imgs/personagens/raspadinha.png');
    personagemTopoEl.setAttribute('src', 'imgs/personagens/raspadinha-icon.png');
    let personagem = "Raspadinha";
    localStorage.setItem('personagem', personagem);
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
/*-------------------------------------------------------*/


function irParaSelecaoMapa() {
    window.location = "mapa.html";
}