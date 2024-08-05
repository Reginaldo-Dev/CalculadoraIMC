/* Manipulando dados de Formulário*/


let formulario = document.querySelector('form')

let cxNome = document.querySelector('#nome')
let cxIdade = document.querySelector('#idade')
let cxPeso = document.querySelector('#peso')
let cxAltura = document.querySelector('#altura')
let cxImc = document.querySelector('#resultadordoImc')

let aviso = document.querySelector('#aviso')
let dados = document.querySelector('.pessoa')

let btnEnviar = document.querySelector('#')
let btnLimpar = document.querySelector('#btnLimpar')

/*-- PARA PEGAR OS DADOS QUE ESTÃO DENTRO DAS CAIXAS 
USAREI A PROPRIEDADE .VALUE, MAS ANTES DETERMINE UM
EVENTO COMO REFERêNCIA PARA PEGAR OS DADOS --*/

/* Adicionei escutador para o btnEnviar */
// Uma funcao anonima para pegar os valores
// calcular o imc

btnEnviar.addEventListener(' click', function(e){
    // pegar os valores de cada inptut
    let nome = cxNome.value  
    let idade = cxIdade.value
    let peso = cxPeso.value
    let altura = cxAltura.value
    let imc = (peso / (altura * altura)).toFixed(1)

    console.log(nome)
    console.log(idade)
    console.log(peso)
    console.log(altura)
    console.log(imc)

    cxImc.value = imc
    let sit = situacaoDoPeso
    aviso.textContent = sit

    // SAIDA DE DADOS
    /*
    alert(
        'Nome ' + nome + '\n' +
        'Idade ' + idade + ' anos\n' +
        'Peso ' + peso + 'Kg\n' +
        'Altura ' + altura + 'm\n' +
        'IMC ' + imc + ' ' +
        sit
    ) */

    // Criar objeto pessoa
    let pessoa = {
        nome : nome,
        idade: idade,
        peso : peso,
        atura: altura,
        imc  : imc,
        sit  : sit,
    }    
    console.log(pessoa)
    dados[1].textContent = pessoa.nome
    dados[2].textContent = pessoa.idade + "anos"
    dados[3].textContent = pessoa.peso + "kg"
    dados[4].textContent = pessoa.altura + "m"
    dados[5].textContent = pessoa.imc + " " + pessoa.sit

    // previnir o comportamento padrao
    e.preventDefault
})

function situacaoDoPeso(imc) {
    let situacao = ''
    if (imc < 18.5) {
        situacao = 'Baixo do peso'
    } else if (imc <= 18.5 && imc <= 29.9) {
        situacao = 'Peso Normal'
    } else if (imc >= 30 && imc <= 34.9) {
        situacao = 'Obesidade I'
    } else if (imc >= 35 && imc <= 39.9) {
        situacao = 'Obesidade II'
    } else if (imc >= 40) {
        situacao = 'Obesidade III'
    } else {
        situacao = 'Informe seu peso corretamente'
    }
    return situacao
}





