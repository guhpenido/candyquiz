let valorGuardadoNome = localStorage.getItem('NomeUsuario');
nomeUsuarioEl = valorGuardadoNome;
let nomeTopo = document.getElementById("nome-topo");
nomeTopo.innerHTML = nomeUsuarioEl;

let valorGuardadoPersonagem = localStorage.getItem('personagem');
nomePersonagemTopo = valorGuardadoPersonagem;
let personagemTopo = document.getElementById("nomePersonagemTopo");
personagemTopo.innerHTML = nomePersonagemTopo;

let level = localStorage.getItem('level');
let levelTopoEl = document.getElementById('levelTopo');
levelTopoEl.innerHTML = level;

let imgTopoPersonagem = document.getElementById("personagemTopo");
if (valorGuardadoPersonagem === 'Caramelo') {
    imgTopoPersonagem.setAttribute('src', 'imgs/personagens/caramelo-icon.png');
} else if (valorGuardadoPersonagem === 'Chocolate') {
    imgTopoPersonagem.setAttribute('src', 'imgs/personagens/caramelo-icon.png');
} else if (valorGuardadoPersonagem === 'Confete') {
    imgTopoPersonagem.setAttribute('src', 'imgs/personagens/confete-icon.png');
} else if (valorGuardadoPersonagem === 'Cupcake') {
    imgTopoPersonagem.setAttribute('src', 'imgs/personagens/cupcake-icon.png');
} else if (valorGuardadoPersonagem === 'Geladinho') {
    imgTopoPersonagem.setAttribute('src', 'imgs/personagens/geladinho-icon.png');
} else if (valorGuardadoPersonagem === 'Jujuba') {
    imgTopoPersonagem.setAttribute('src', 'imgs/personagens/jujuba-icon.png');
} else if (valorGuardadoPersonagem === 'Raspadinha') {
    imgTopoPersonagem.setAttribute('src', 'imgs/personagens/raspadinha-icon.png');
}

function irParaOJogo() {
    window.location = "jogo.html";
}

VanillaTilt.init(document.querySelectorAll(".retangulo"), { //vanilla-tilt.js
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1,
});

/*-------------------------------------*/