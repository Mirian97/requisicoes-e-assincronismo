const cepInput = document.querySelector("#cep");
const cidadeInput = document.querySelector("#cidade");
const ruaInput = document.querySelector("#rua");

cepInput.addEventListener("change", () => {
    if (cepInput.value.length !== 8) {
        console.log("ERRO! UM CEP PRECISA DE NO MÍNIMO 8 NÚMEROS");
        return;
    }

    const promiseResposta = fetch('https://viacep.com.br/ws/' + cepInput.value + '/json/');

    promiseResposta.then(resposta => {
        if (!resposta.ok) {
            console.log("INSIRA UM CEP VÁLIDO");
        }

        const promiseBody = resposta.json();

        promiseBody.then(body => {
            cidadeInput.value = body.localidade;
            ruaInput.value = body.logradouro;
        })
    })
})