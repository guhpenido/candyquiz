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


function irParaMenu() {
    window.location.href = "menu.html";
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

/*-------------------------------------*/
