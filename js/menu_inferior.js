let btn = document.getElementById("botaoInferior");
let menu = document.querySelector(".menu-inferior");
let menuAberto = false;

function abrirMenu() {
    if (menuAberto == false) {
        menu.style.display = 'block';
        menuAberto = true;
        btn.classList.remove("fa-bars");
        btn.classList.add("fa-times");

    } else if (menuAberto == true) {
        menu.style.display = 'none';
        menuAberto = false;
        btn.classList.add("fa-bars");
        btn.classList.remove("fa-times");

    }
}
function redes(){
    window.location = "https://linktr.ee/candyquiz";
}
