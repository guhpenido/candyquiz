let audioClick = document.getElementById("audioClick");
let audioHover = document.getElementById("audioHover");

function clickSound() {
    audioClick.play();
}

function hoverSound() {
    audioHover.play();
}

function irParaTelaInicial() {

    window.location = "index.html";
}

function sairSelecionarPersonagem() {

    window.location = "menu.html";
}