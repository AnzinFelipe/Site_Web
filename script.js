let imgNova = "imagens/desenho.jpeg";
let imgAnterior = "imagens/eu.jpeg";

function trocarImg() {
    document.getElementById("eu").src = imgNova;
    let nova = imgNova;
    imgNova = imgAnterior;
    imgAnterior = nova;
}