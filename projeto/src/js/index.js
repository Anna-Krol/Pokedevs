//Criar uma variável para trabalhar coma listagem de pokedeves
const listaSelecao = document.querySelectorAll(".pokedev");

//Identificar o evento de clique no eemento da listagem
listaSelecao.forEach(pokedev=>{
    pokedev.addEventListener("click", () => {
        //remover a classe aberto só do cartão que tá aberto
        const cartaoPokedevAberto = document.querySelector(".aberto");
        cartaoPokedevAberto.classList.remove("aberto");

        //pegar o id do cartão clicado para abrir
        const idpokedevselecionado =pokedev.attributes.id.value;
        const idCartaoAbrir = "cartao-" +idpokedevselecionado;
        const cartaoAbrir = document.getElementById(idCartaoAbrir);
        cartaoAbrir.classList.add("aberto");

        const pokedevAtivoListagem = document.querySelector(".ativa")
        console.log(pokedevAtivoListagem)
        pokedevAtivoListagem.classList.remove("ativa")

        const listagemMudar = document.getElementById(idpokedevselecionado)
        listagemMudar.classList.add("ativa")
    })
})
