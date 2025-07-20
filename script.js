let tema = document.getElementById("btnTema");
let orange = localStorage.getItem("orangeTheme");
let body = document.querySelector("body");

function orangeTheme() { 
  tema.classList.add("novoTema");
  body.classList.add("novoTema");
  localStorage.setItem("orangeTheme", "enabled");
} 

function blueTheme() {
  tema.classList.remove("novoTema");
  body.classList.remove("novoTema");
  localStorage.setItem("orangeTheme", "disabled");
}

if (orange === "enabled") {
  orangeTheme();
}

tema.addEventListener("click", () => {
  orange = localStorage.getItem("orangeTheme");
  if (orange == "disabled") {
    orangeTheme();
  } else {
    blueTheme();
  }
})
