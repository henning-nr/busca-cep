// Adicionando evento de click em buscar cep
document.getElementById("btn-cep").addEventListener('click', buscar)


// Função pra buscar CEP
function buscar(){
    let cepDigitado = document.getElementById("cep").value
    console.log(cepDigitado)
    // let urlCep = "https://viacep.com.br/ws/"+cepDigitado+"/json/"
    let urlCep = `https://viacep.com.br/ws/${cepDigitado}/json/`

    fetch(urlCep)
    .then((dados)=>{return dados.json()})
    .then((cep)=>{
        document.getElementById("cep-lista").innerHTML = `
        <li class="collection-item">CEP: ${cep.cep}</li>
        <li class="collection-item">Logradouro: ${cep.logradouro}</li>
        <li class="collection-item">Bairro: ${cep.bairro}</li>
        <li class="collection-item">Cidade: ${cep.localidade}</li>
        <li class="collection-item">Estado: ${cep.uf}</li>
        `
    })
}