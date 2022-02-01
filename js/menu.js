let video = document.getElementById("videoBackground");
let som = document.querySelector("#som");
let links = document.querySelectorAll("ul a");


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


function selecionarPersonagem() {
    window.location = "personagem.html";
}