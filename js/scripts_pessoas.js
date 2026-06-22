//IMPORTANDO ARQUIVO
import {calcDesconto} from './scripts_calculos.js'
//PEGANDO ELEMENTOS DOM
const formPessoa = document.querySelector('#form-pessoa')
const divLista = document.querySelector('#div-lista-pessoas')

//CRIANDO ARRAY pessoas
const pessoas = []


//CAPTURAR O EVENTO submit DO FORMULÁRIO
formPessoa.addEventListener('submit', (evt) => {
    //INTERROMPER O EFEITO PADRÃO DE SUBMETER  OS DADOS DO FORMULÁRIO
    evt.preventDefault()

    //CRIAR UM OBJETO FORMULÁRIO
    const dadosFormPessoa = new FormData(formPessoa)

    //CRIANDO OBJ LITERAL
    const pessoa = {
        nome: dadosFormPessoa.get('nome'),
        idade: dadosFormPessoa.get('idade'),
        renda: dadosFormPessoa.get('renda')
    }
    //CHAMANDO A FUNÇÃO addPessoa E PASSANDO O OBJ LITERAL pessoa
    addPessoa(pessoa)
})

//LIMPAR O FORMULÁRIO
formPessoa.reset

//CRIANDO A FUNÇÃO ADICIONAR PESSOAS
const addPessoa = (objPessoa) => {
    //ADICIONAR O OBJETO LITERAL NO ARRAY PESSOAS
    pessoas.push(objPessoa)

    //APÓS ADICIONAR O OBJETO NO ARRAY CHAMA A FUNÇÃO listPessoas
    listPessoas()

}

//FUNÇÃO PARA LISTAR PESSOAS DO ARRAY
const listPessoas = () => {

    //LIMPANDO DIV LISTA
    divLista.innerHTML = ''
    //PECORRER ARRAY pessoas COM O foreach
    pessoas.forEach((elem, i) => {
        divLista .innerHTML += `${i} - ${elem.nome} 
        - ${elem.idade}, ${parseFloat(elem.renda).toFixed('.',',')} - ${calcDesconto(elem)}<br>`
    })
}
