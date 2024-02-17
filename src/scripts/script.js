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
// Função para verificar a largura da tela e aplicar as alterações
function ajustarLayout() {
  // Largura de referência para ocultar/mostrar elementos
  var larguraReferencia = 500;

  // Seleciona os elementos pelo ID ou classe
  var descricaoElement = document.querySelector(".descricao");
  var textoResponsivoElement = document.getElementById("texto-responsivo");

  // Verifica a largura da tela
  var larguraTela =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  // Aplica as alterações com base na largura da tela
  if (larguraTela < larguraReferencia) {
    // Tela menor que 500 pixels, oculta a descrição e mostra o texto responsivo
    descricaoElement.style.display = "none";
    textoResponsivoElement.style.display = "block";
  } else {
    // Tela maior ou igual a 500 pixels, mostra a descrição e oculta o texto responsivo
    descricaoElement.style.display = "block";
    textoResponsivoElement.style.display = "none";
  }
}

// Adiciona um ouvinte de evento para responder às mudanças na largura da tela
window.addEventListener("resize", ajustarLayout);

// Executa a função inicialmente para definir o estado inicial
ajustarLayout();
