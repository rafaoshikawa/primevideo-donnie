const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

function openRelacionados() {
  content1.style.display = "block";
  content2.style.display = "none";
  btn1.classList.add("ativo");
  btn2.classList.remove("ativo");
}

function openDetalhes() {
  content1.style.display = "none";
  content2.style.display = "grid";
  btn1.classList.remove("ativo");
  btn2.classList.add("ativo");
}