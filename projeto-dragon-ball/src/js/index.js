// Seleciona todos os botões de personagem
const botoes = document.querySelectorAll(".botao");
// Seleciona todos os personagens
const personagens = document.querySelectorAll(".personagem");

// Adiciona o evento de clique em cada botão
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");

        botao.classList.add("selecionado");

        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado");
        personagens[indice].classList.add("selecionado");
    });
});