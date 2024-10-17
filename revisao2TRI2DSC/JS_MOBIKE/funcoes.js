/**
 * FUNÇÕES SÃO BLOCOSO QUE PODEM SER REUTILIZADOS
 * FUNÇÕES PODEM OU NÃO RECEBER PARÂMETROS
 * FUNÇÕES PODEM RETORNAR VALORES OU NÃO
 * FUNÇÕES PODEM SER ANÔNIMAS
 */
// DECLARAÇÃO DE FUNÇÃO 
function dizOla() {
  alert('Olá')
}
function olaPessoa(nome) {
  alert('Olá ' + nome)
}
const nome = 'julius'
const sobrenome = 'negao'
const idade = 69

function dadosPessoais() {
  const dados = nome + ' ' + sobrenome + ' ' + idade
  console.log(dados)
}

//INVOCAÇÃO s FUNÇÃO
olaPessoa('clint')
dadosPessoais()
dizOla()