const btnPesquisarCEP = document.querySelector("#btnPesquisar");
const inputCEP = document.querySelector("#cep");

btnPesquisarCEP.addEventListener("click", event => {
    event.preventDefault();

    let cep = inputCEP.value;

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(data => {
            return data.json();
        })
        .then(response => {
            if (response.erro){
                alert("O CEP DIGITADO ESTÁ INVÁLIDO.");
                return;
            }
            atribuirCampos(response);
        });


    console.log(url)

});

btnLimpar.addEventListener("click", event => {
    limparCampos();
})

const rua = document.querySelector("#rua");
const complemento = document.querySelector("#complemento");
const bairro = document.querySelector("#bairro");
const cidade = document.querySelector("#cidade");
const estado = document.querySelector("#estado");

function atribuirCampos(data){

    rua.value = data.logradouro;
    complemento.value = data.complemento;
    bairro.value = data.bairro;
    cidade.value = data.localidade;
    estado.value = data.uf;
};

function limparCampos(){
    inputCEP.value = "";
    rua.value = "";
    complemento.value = "";
    bairro.value = "";
    cidade.value = "";
    estado.value = "";
}