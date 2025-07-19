let imgNova = "imagens/desenho.png";
let imgAnterior = "imagens/eu.jpeg";

let tema = document.getElementById("btnTema");

let body = document.querySelector("body");

tema.addEventListener("click", () => {
  tema.classList.toggle("novoTema");
  body.classList.toggle("novoTema");
})

function trocarImg() {
    document.getElementById("eu").src = imgNova;
    let nova = imgNova;
    imgNova = imgAnterior;
    imgAnterior = nova;
}
