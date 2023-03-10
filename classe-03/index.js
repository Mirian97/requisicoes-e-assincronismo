const pokemonInput = document.querySelector("#pokemon");
const nomePokemon = document.querySelector(".pokemonName");
const imagemPokemon = document.querySelector(".pokemonImage");
const habilidadePokemon = document.querySelector(".pokemonAbilities");

pokemonInput.addEventListener("change", () => {
    const promiseResposta = fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonInput.value);

    promiseResposta.then(resposta => {
        if (!resposta.ok) {
            console.log("Insira um nome de pokemon válido")
        }
        const promiseBody = resposta.json();

        promiseBody.then(body => {
            console.log(body)
            nomePokemon.textContent = body.name.toUpperCase();
            imagemPokemon.alt = body.name;
            imagemPokemon.src = body.sprites.front_default;
            const ability = body.abilities[1].ability.name
            habilidadePokemon.textContent = "Habilidade: " + ability[0].toUpperCase() + ability.slice(1);
        })
    })
})