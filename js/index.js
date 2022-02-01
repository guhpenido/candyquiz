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
    localStorage.setItem('NomeUsuario', inputNomeEl.value);
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

    window.location = "menu.html";
}

function irParaTelaInicial() {

    window.location = "index.html";
}