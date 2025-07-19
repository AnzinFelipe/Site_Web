let tema = document.getElementById("btnTema");

let body = document.querySelector("body");

tema.addEventListener("click", () => {
  tema.classList.toggle("novoTema");
  body.classList.toggle("novoTema");
})
