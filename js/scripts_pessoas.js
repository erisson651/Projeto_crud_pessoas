//PEGANDO ELEMENTOS DOM
const formpessoa = document.querySelector('#form-pessoa')
cosnt divLista = document.querySelector('#div-lit')

//CRIANDO ARRAY pessoas
const pessoas =[]


//CAPTURAR O EVENTO submit DO FORMULÁRIO
formpessoa.addEventListener('submit', (evt) => {
    //INTERROMPER O EFEITO PADRÃO DE SUBMETER  OS DADOS DO FORMULÁRIO
    evt.preventDefault()
    
    //CRIAR UM OBJETO FORMULÁRIO
    const pessoa = {
        nome: dadosPessoas.get('nome'),
        idade: dadosPessoas.get('idade'),
        renda: dadosPessoas.get('renda'),
    }
})

//CRIANDO A FUNÇÃO ADICIONAR PESSOA
const addPessoa = (objPessoa) => {
    pessoas.push(objPessoa)
    
}