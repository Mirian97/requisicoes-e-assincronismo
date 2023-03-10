const criptoInput = document.querySelector("#cripto");
const maiorPrecoUnit = document.querySelector(".maior-preco-unit");
const quantidadeNegociada = document.querySelector(".qtd");
const maiorOferta = document.querySelector(".maior-oferta");

criptoInput.addEventListener("change", () => {
    if (!criptoInput.value) { return }

    const promiseResposta = fetch('https://www.mercadobitcoin.net/api/' + criptoInput.value + '/ticker/');

    promiseResposta.then(resposta => {
        const promiseBody = resposta.json();

        promiseBody.then(body => {
            maiorPrecoUnit.textContent = Number(body.ticker.high).toFixed(2);
            quantidadeNegociada.textContent = Number(body.ticker.vol).toFixed(2);
            maiorOferta.textContent = Number(body.ticker.buy).toFixed(2);
        })
    })
})