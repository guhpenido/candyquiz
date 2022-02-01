let valorGuardadoNome = localStorage.getItem('NomeUsuario');
nomeUsuarioEl = valorGuardadoNome;
let nomeTopo = document.getElementById("nome-topo");
nomeTopo.innerHTML = nomeUsuarioEl;

let valorGuardadoPersonagem = localStorage.getItem('personagem');
nomePersonagemTopo = valorGuardadoPersonagem;
let personagemTopo = document.getElementById("nomePersonagemTopo");
nomeTopo.innerHTML = nomeUsuarioEl;

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

function falar(texto) { //retirado de: https://pt.stackoverflow.com/questions/300327/navegador-falar-para-usu%C3%A1rio-apertar-tecla
    var text = new SpeechSynthesisUtterance();
    text.lang = "pt-BR";
    text.text = texto;

    //voices = window.speechSynthesis.getVoices();
    text['voiceURI'] = 'Google português do Brasil'; //discovered after dumping getVoices()
    text.lang = "pt-BR";
    text['localService'] = true;

    speechSynthesis.speak(text);
}


/*----------------------------------------------------------------------------------------------*/
let pins = document.querySelector(".pin");
let materiaUm = document.getElementById('pin-quinze');
let perguntaUm = document.getElementById('pin-quatorze');
let materiaDois = document.getElementById('pin-treze');
let perguntaDois = document.getElementById('pin-doze');
let materiaTres = document.getElementById('pin-onze');
let perguntaTres = document.getElementById('pin-dez');
let materiaQuatro = document.getElementById('pin-nove');
let perguntaQuatro = document.getElementById('pin-oito');
let materiaCinco = document.getElementById('pin-sete');
let perguntaCinco = document.getElementById('pin-seis');
let materiaSeis = document.getElementById('pin-cinco');
let perguntaSeis = document.getElementById('pin-quatro');
let materiaSete = document.getElementById('pin-tres');
let perguntaSete = document.getElementById('pin-dois');
let perguntaOito = document.getElementById('pin-um');

function tiraPulsar() {
    materiaUm.style.animation = 'none';
    perguntaUm.style.animation = 'none';
    materiaDois.style.animation = 'none';
    perguntaDois.style.animation = 'none';
    materiaTres.style.animation = 'none';
    perguntaTres.style.animation = 'none';
    materiaQuatro.style.animation = 'none';
    perguntaQuatro.style.animation = 'none';
    materiaCinco.style.animation = 'none';
    perguntaCinco.style.animation = 'none';
    materiaSeis.style.animation = 'none';
    materiaSete.style.animation = 'none';
    perguntaSete.style.animation = 'none';
    perguntaSeis.style.animation = 'none';
    perguntaOito.style.animation = 'none';
}
let trofeuUm = document.getElementById('trofeu-um');
let trofeuDois = document.getElementById('trofeu-dois');
let trofeuTres = document.getElementById('trofeu-tres');
let trofeuQuatro = document.getElementById('trofeu-quatro');
let trofeuUmR = document.getElementById('trofeu-um-resumo');
let trofeuDoisR = document.getElementById('trofeu-dois-resumo');
let trofeuTresR = document.getElementById('trofeu-tres-resumo');
let trofeuQuatroR = document.getElementById('trofeu-quatro-resumo');

function verificaLevel() {
    if (level == 0) {
        tiraPulsar();
        trofeuUm.classList.add("fa-square");
        trofeuUm.classList.remove("fa-award");
        trofeuDois.classList.add("fa-square");
        trofeuDois.classList.remove("fa-medal");
        trofeuTres.classList.add("fa-square");
        trofeuTres.classList.remove("fa-trophy");
        trofeuQuatro.classList.add("fa-square");
        trofeuQuatro.classList.remove("fa-crown");
        trofeuUmR.classList.add("fa-square");
        trofeuUmR.classList.remove("fa-award");
        trofeuDoisR.classList.add("fa-square");
        trofeuDoisR.classList.remove("fa-medal");
        trofeuTresR.classList.add("fa-square");
        trofeuTresR.classList.remove("fa-trophy");
        trofeuQuatroR.classList.add("fa-square");
        trofeuQuatroR.classList.remove("fa-crown");
        materiaUm.style.animation = 'pulsar 2s ease-in-out infinite';
    } else if (level == 1) {
        tiraPulsar();
        trofeuUm.classList.add("fa-square");
        trofeuUm.classList.remove("fa-award");
        trofeuDois.classList.add("fa-square");
        trofeuDois.classList.remove("fa-medal");
        trofeuTres.classList.add("fa-square");
        trofeuTres.classList.remove("fa-trophy");
        trofeuQuatro.classList.add("fa-square");
        trofeuQuatro.classList.remove("fa-crown");
        trofeuUmR.classList.add("fa-square");
        trofeuUmR.classList.remove("fa-award");
        trofeuDoisR.classList.add("fa-square");
        trofeuDoisR.classList.remove("fa-medal");
        trofeuTresR.classList.add("fa-square");
        trofeuTresR.classList.remove("fa-trophy");
        trofeuQuatroR.classList.add("fa-square");
        trofeuQuatroR.classList.remove("fa-crown");
        perguntaUm.style.animation = 'pulsar 2s ease-in-out infinite';
    } else if (level == 2) {
        tiraPulsar();
        materiaDois.style.animation = 'pulsar 2s ease-in-out infinite';
    } else if (level == 3) {
        tiraPulsar();
        perguntaDois.style.animation = 'pulsar 2s ease-in-out infinite';
    } else if (level == 4) {
        tiraPulsar();
        materiaTres.style.animation = 'pulsar 2s ease-in-out infinite';
        trofeuUm.classList.remove("fa-square");
        trofeuUm.classList.add("fa-award");
        trofeuUmR.classList.remove("fa-square");
        trofeuUmR.classList.add("fa-award");
    } else if (level == 5) {
        tiraPulsar();
        perguntaTres.style.animation = 'pulsar 2s ease-in-out infinite';
    } else if (level == 6) {
        tiraPulsar();
        materiaQuatro.style.animation = 'pulsar 2s ease-in-out infinite';
    } else if (level == 7) {
        tiraPulsar();
        perguntaQuatro.style.animation = 'pulsar 2s ease-in-out infinite';
    } else if (level == 8) {
        tiraPulsar();
        materiaCinco.style.animation = 'pulsar 2s ease-in-out infinite';
        trofeuDois.classList.remove("fa-square");
        trofeuDois.classList.add("fa-medal");
        trofeuDoisR.classList.remove("fa-square");
        trofeuDoisR.classList.add("fa-medal");
    } else if (level == 9) {
        tiraPulsar();
        perguntaCinco.style.animation = 'pulsar 2s ease-in-out infinite';
    } else if (level == 10) {
        tiraPulsar();
        materiaSeis.style.animation = 'pulsar 2s ease-in-out infinite';
    } else if (level == 11) {
        tiraPulsar();
        perguntaSeis.style.animation = 'pulsar 2s ease-in-out infinite';
        trofeuTres.classList.remove("fa-square");
        trofeuTres.classList.add("fa-trophy");
        trofeuTresR.classList.remove("fa-square");
        trofeuTresR.classList.add("fa-trophy");
    } else if (level == 12) {
        tiraPulsar();
        materiaSete.style.animation = 'pulsar 2s ease-in-out infinite';
    } else if (level == 13) {
        tiraPulsar();
        perguntaSete.style.animation = 'pulsar 2s ease-in-out infinite';
    } else if (level == 14) {
        tiraPulsar();
        perguntaOito.style.animation = 'pulsar 2s ease-in-out infinite';
        trofeuQuatro.classList.remove("fa-square");
        trofeuQuatro.classList.add("fa-crown");
        trofeuQuatroR.classList.remove("fa-square");
        trofeuQuatroR.classList.add("fa-crown");
    }
}
verificaLevel()
let mat1 = document.getElementById('materia-um');
let mat2 = document.getElementById('materia-dois');
let mat3 = document.getElementById('materia-tres');
let mat4 = document.getElementById('materia-quatro');
let mat5 = document.getElementById('materia-cinco');
let mat6 = document.getElementById('materia-seis');
let mat7 = document.getElementById('materia-sete');

let per1 = document.getElementById('pergunta-um');
let per2 = document.getElementById('pergunta-dois');
let per3 = document.getElementById('pergunta-tres');
let per4 = document.getElementById('pergunta-quatro');
let per5 = document.getElementById('pergunta-cinco');
let per6 = document.getElementById('pergunta-seis');
let per7 = document.getElementById('pergunta-sete');
let per8 = document.getElementById('pergunta-oito');

function fecharModais() {
    mat1.style.display = 'none';
    per1.style.display = 'none';
    mat2.style.display = 'none';
    per2.style.display = 'none';
    mat3.style.display = 'none';
    per3.style.display = 'none';
    mat4.style.display = 'none';
    per4.style.display = 'none';
    mat5.style.display = 'none';
    per5.style.display = 'none';
    mat6.style.display = 'none';
    per6.style.display = 'none';
    mat7.style.display = 'none';
    per7.style.display = 'none';
    per8.style.display = 'none';
    clickSound();
    verificaLevel();
}

function fecharModaisEntendido() {
    level++;
    levelTopoEl.innerHTML = level;
    localStorage.setItem('level', level);
    fecharModais();
    verificaLevel();
}

materiaUm.addEventListener("click", () => {
    if (level == 0) {
        mat1.style.display = "block";
        clickSound()
    }
});


perguntaUm.addEventListener("click", () => {
    if (level == 1) {
        per1.style.display = "block";
        clickSound()
    }
});

materiaDois.addEventListener("click", () => {
    if (level == 2) {
        mat2.style.display = "block";
        clickSound()
    }
});

perguntaDois.addEventListener("click", () => {
    if (level == 3) {
        per2.style.display = "block";
        clickSound()
    }
});

materiaTres.addEventListener("click", () => {
    if (level == 4) {
        mat3.style.display = "block";
        clickSound()
    }
});

perguntaTres.addEventListener("click", () => {
    if (level == 5) {
        per3.style.display = "block";
        clickSound()
    }
});

materiaQuatro.addEventListener("click", () => {
    if (level == 6) {
        mat4.style.display = "block";
        clickSound()
    }
});

perguntaQuatro.addEventListener("click", () => {
    if (level == 7) {
        per4.style.display = "block";
        clickSound()
    }
});

materiaCinco.addEventListener("click", () => {
    if (level == 8) {
        mat5.style.display = "block";
        clickSound()
    }
});

perguntaCinco.addEventListener("click", () => {
    if (level == 9) {
        per5.style.display = "block";
        clickSound()
    }
});

materiaSeis.addEventListener("click", () => {
    if (level == 10) {
        mat6.style.display = "block";
        clickSound()
    }
});

perguntaSeis.addEventListener("click", () => {
    if (level == 11) {
        per6.style.display = "block";
        clickSound()
    }
});

materiaSete.addEventListener("click", () => {
    if (level == 12) {
        mat7.style.display = "block";
        clickSound()
    }
});

perguntaSete.addEventListener("click", () => {
    if (level == 13) {
        per7.style.display = "block";
        clickSound()
    }
});

perguntaOito.addEventListener("click", () => {
    if (level == 14) {
        per8.style.display = "block";
        clickSound()
    }
});




const reloginho = setInterval(verificaLevel, 100);

let audioAcerto = document.getElementById("audioAcerto");
let audioErro = document.getElementById("audioErro");
let audioFail = document.getElementById("audioFail");

function acertoSound() {
    audioAcerto.play();
}

function erroSound() {
    audioErro.play();
}

function failSound() {
    audioFail.play();
}

let acertouDiv = document.querySelector(".acertou");

function fechaAcerto() {
    acertouDiv.classList.toggle("animate__bounceInUp");
    acertouDiv.classList.toggle("animate__zoomOutUp");
}

divVencedor = document.querySelector(".fim-quiz");

function acertou() {
    if (level !== 15) {
        levelMais();
        acertouDiv.style.display = 'block';
        acertoSound();
        fecharModais();
        falar("Parabéns, você acertou!");
        setTimeout(() => {
            acertouDiv.style.display = 'none';
        }, 3500);
        verificaLevel();
    }
    if (level == 15) {
        divVencedor.style.display = 'block';
        setTimeout(() => {
            falar("Parabéns, você venceu!");
            divVencedor.style.display = 'block';
        }, 3500);

    }
}

let contadorErros = 0;
localStorage.setItem('contadorErr', contadorErros);

let erroTopo = document.getElementById("erros");
erroTopo.innerHTML = contadorErros;
let errosResumo = document.getElementById("erros-resumo");
errosResumo.innerHTML = contadorErros;

function errou() {
    erroSound();
    contadorErros = localStorage.getItem('contadorErr');
    contadorErros++;
    erroTopo.innerHTML = contadorErros;
    errosResumo.innerHTML = contadorErros;
    localStorage.setItem('contadorErr', contadorErros);
    if (contadorErros == 5) {
        level = localStorage.getItem('level');
        level = 0;
        levelTopoEl.innerHTML = level;
        localStorage.setItem('level', level);
        contadorErros = localStorage.getItem('contadorErr');
        contadorErros = 0;
        localStorage.setItem('contadorErr', contadorErros);
        erroTopo.innerHTML = contadorErros;
        errosResumo.innerHTML = contadorErros
        failSound();
        setTimeout(() => {
            falar("Você retornou ao level zero");
        }, 3500);
    }

}
let levelResumo = document.getElementById("levelTopo-resumo");

function levelMais() {
    level = localStorage.getItem('level');
    level++;
    levelTopoEl.innerHTML = level;
    levelResumo.innerHTML = level;
    localStorage.setItem('level', level);
}

function levelMenos() {
    level = localStorage.getItem('level');
    level--;
    levelTopoEl.innerHTML = level;
    localStorage.setItem('level', level);
}

function levelZerar() {
    level = localStorage.getItem('level');
    level = 0;
    levelTopoEl.innerHTML = level;
    localStorage.setItem('level', level);
}


function sairSelecionarPersonagem() {
    window.location = "menu.html";
    clickSound()
}

function resetar() {
    level = localStorage.getItem('level');
    contadorErros = localStorage.getItem('contadorErr');
    level = 0;
    contadorErros = 0;
    verificaLevel();
    localStorage.setItem('level', level);
    contadorErros = localStorage.getItem('contadorErr');
    valorGuardadoNome = localStorage.getItem('NomeUsuario');
    valorGuardadoPersonagem = localStorage.getItem('personagem');
    valorGuardadoNome = "";
    valorGuardadoPersonagem = "";
    localStorage.setItem('NomeUsuario', valorGuardadoNome);
    localStorage.setItem('personagem', valorGuardadoPersonagem);
    window.location = "index.html";
    clickSound();
}

/*-------------------------------------------------------------------*/
let balaoUm = document.getElementById('balao-quinze');
let balaoDois = document.getElementById('balao-quatorze');
let balaoTres = document.getElementById('balao-treze');
let balaoQuatro = document.getElementById('balao-doze');
let balaoCinco = document.getElementById('balao-onze');
let balaoSeis = document.getElementById('balao-dez');
let balaoSete = document.getElementById('balao-nove');
let balaoOito = document.getElementById('balao-oito');
let balaoNove = document.getElementById('balao-sete');
let balaoDez = document.getElementById('balao-seis');
let balaoOnze = document.getElementById('balao-cinco');
let balaoDoze = document.getElementById('balao-quatro');
let balaoTreze = document.getElementById('balao-tres');
let balaoQuatorze = document.getElementById('balao-dois');
let balaoQuinze = document.getElementById('balao-um');


function abreBalaoUm() {
    balaoUm.style.display = 'block';
    hoverSound()
}

function fechaBalaoUm() {
    balaoUm.style.display = 'none';
}

function abreBalaoDois() {
    balaoDois.style.display = 'block';
    hoverSound()
}

function fechaBalaoDois() {
    balaoDois.style.display = 'none';
}

function abreBalaoTres() {
    balaoTres.style.display = 'block';
    hoverSound()
}

function fechaBalaoTres() {
    balaoTres.style.display = 'none';
}

function abreBalaoQuatro() {
    balaoQuatro.style.display = 'block';
    hoverSound()
}

function fechaBalaoQuatro() {
    balaoQuatro.style.display = 'none';
}

function abreBalaoCinco() {
    balaoCinco.style.display = 'block';
    hoverSound()
}

function fechaBalaoCinco() {
    balaoCinco.style.display = 'none';
}

function abreBalaoSeis() {
    balaoSeis.style.display = 'block';
    hoverSound()
}

function fechaBalaoSeis() {
    balaoSeis.style.display = 'none';
}

function abreBalaoSete() {
    balaoSete.style.display = 'block';
    hoverSound()
}

function fechaBalaoSete() {
    balaoSete.style.display = 'none';
}

function abreBalaoOito() {
    balaoOito.style.display = 'block';
    hoverSound()
}

function fechaBalaoOito() {
    balaoOito.style.display = 'none';
}

function abreBalaoNove() {
    balaoNove.style.display = 'block';
    hoverSound()
}

function fechaBalaoNove() {
    balaoNove.style.display = 'none';
}

function abreBalaoDez() {
    balaoDez.style.display = 'block';
    hoverSound()
}

function fechaBalaoDez() {
    balaoDez.style.display = 'none';
}

function abreBalaoOnze() {
    balaoOnze.style.display = 'block';
    hoverSound()
}

function fechaBalaoOnze() {
    balaoOnze.style.display = 'none';
}

function abreBalaoDoze() {
    balaoDoze.style.display = 'block';
    hoverSound()
}

function fechaBalaoDoze() {
    balaoDoze.style.display = 'none';
}

function abreBalaoTreze() {
    balaoTreze.style.display = 'block';
    hoverSound()
}

function fechaBalaoTreze() {
    balaoTreze.style.display = 'none';
}

function abreBalaoQuatorze() {
    balaoQuatorze.style.display = 'block';
    hoverSound()
}

function fechaBalaoQuatorze() {
    balaoQuatorze.style.display = 'none';
}

function abreBalaoQuinze() {
    balaoQuinze.style.display = 'block';
    hoverSound()
}

function fechaBalaoQuinze() {
    balaoQuinze.style.display = 'none';
}

let personagemResumo = document.getElementById("personagemTopo-resumo");
let nomeResumo = document.getElementById("nome-topo-resumo");
let nomePersonagemResumo = document.getElementById("nomePersonagemTopo-resumo");

let levelResumoEl = 0;
let nomeResumoEl = localStorage.getItem('NomeUsuario');
nomeResumo.innerHTML = nomeUsuarioEl;

let personagemResumoEl = localStorage.getItem('personagem');
nomePersonagemResumo.innerHTML = personagemResumoEl;





if (personagemResumoEl === 'Caramelo') {
    personagemResumo.setAttribute('src', 'imgs/personagens/caramelo.png');
} else if (personagemResumoEl === 'Chocolate') {
    personagemResumo.setAttribute('src', 'imgs/personagens/caramelo.png');
} else if (personagemResumoEl === 'Confete') {
    personagemResumo.setAttribute('src', 'imgs/personagens/confete.png');
} else if (personagemResumoEl === 'Cupcake') {
    personagemResumo.setAttribute('src', 'imgs/personagens/cupcake.png');
} else if (personagemResumoEl === 'Geladinho') {
    personagemResumo.setAttribute('src', 'imgs/personagens/geladinho.png');
} else if (personagemResumoEl === 'Jujuba') {
    personagemResumo.setAttribute('src', 'imgs/personagens/jujuba.png');
} else if (personagemResumoEl === 'Raspadinha') {
    personagemResumo.setAttribute('src', 'imgs/personagens/raspadinha.png');
}

let telaImpressao = document.querySelector(".imprimir");

function imprimir() {
    divVencedor.style.display = 'none';
    telaImpressao.style.display = 'block';
    acertouDiv.style.display = 'none';
    setTimeout(() => {
        divVencedor.style.display = 'block';
        telaImpressao.style.display = 'none';
    }, 15000);
}


document.getElementById("imprime").addEventListener("click", function() {
    html2canvas(document.querySelector('#download')).then(function(canvas) {
        console.log(canvas);
        saveAs(canvas.toDataURL(), 'CandyQuizVitoria.png');
    });
});

function saveAs(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
}

if (level == 15) {
    level--;
}
if (level > 15) {
    resetar();
}