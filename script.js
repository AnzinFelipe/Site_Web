let imgNova = "imagens/desenho.jpeg";
let imgAnterior = "imagens/eu.jpeg";

function trocarImg() {
    document.getElementById("eu").src = imgNova;
    let nova = imgNova;
    imgNova = imgAnterior;
    imgAnterior = nova;
}

function salvar(tema) {
    document.body.style.backgroundImage = `url(${tema})`;
    localStorage.setItem("BG", tema);
}

function aplicar() {
  const BGimg = localStorage.getItem("BG");
  if (BGimg) {
    document.body.style.backgroundImage = `url(${BGimg})`;
  }
}

window.addEventListener("load", aplicar);