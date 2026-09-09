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
        document.getElementById("logradouro").value = cep.logradouro
        document.getElementById("localidade").value = cep.localidade
        document.getElementById("bairro").value = cep.bairro
        document.getElementById("estado").value = cep.estado
        document.getElementById("regiao").value = cep.regiao
        document.getElementById("ddd").value = cep.ddd
    })
}