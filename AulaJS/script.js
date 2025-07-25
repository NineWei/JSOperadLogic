// let idade = 17
// let trabalha = "sim"
// let vota = "sim"

// console.log(idade >=18 || trabalha == "sim" || vota == "sim")

// Atividade 01
// Solicite dois números ao usuário e verifique se ambos são
// positivos, se pelo menos um é positivo, e se nenhum é positivo,
// exibindo os resultados no console.
// Use prompt para solicitar os números, armazene-os em numero1
// e numero2, e utilize operadores lógicos para as verificações.


// let numero1 = parseFloat(prompt("Digite o primeiro número: "))
// let numero2 = parseFloat(prompt("Digite o segundo número: "))

// console.log("Ambos positivos?", numero1>0 && numero2>0)
// console.log("Pelo menos um é positivo?", numero1>0 || numero2>0)
// console.log("Nenhum é positivo?", numero1<0 && numero2<0)


// Lembrete.: Olhar o resultado no console do navegador (F12 -> Console)
// numero1 = 5
// numero2 = -5
// O resultado vai imprimir: false, true, false

// Atividade 2
// Crie um código que solicite ao usuário dois números, compare-os com
// operadores de comparação.

// let numero1 = prompt("Digite o primeiro número: ")
// let numero2 = prompt("Digite o segundo número: ")

// console.log("Igual?", numero1 === numero2)
// console.log("Diferente?",numero1 !== numero2)
// console.log("Maior ou igual?", numero1 >= numero2)
// console.log("Menor ou igual?", numero1 <= numero2)

// let idade = 2
// let trabalha = "sim"

// if (idade >= 18) {
//     console.log("Você é maior de idade")
// } else if (idade >= 12) {
//     console.log("Você é um adolescente")
// } else if (idade>=4) {
//     console.log("Você é uma criança")
// } else {
//     console.log("Você é um bebê")
// }

// Estrutura Ternário

// let idade = 7
// let trabalha = "sim"

// let resultado = (idade >= 18) ? "Maior de idade" : "Menor de idade"
// console.log(resultado)


// Estrutura Switch

// let diaSemana = 3

// switch (diaSemana) {
//     case 1:
//         console.log("Domingo")
//         break
//     case 2:
//         console.log("Segunda")
//         break
//     case 3:
//         console.log("Terça")
//         break
//     default:
//         console.log("Não é um dia válido")
//         break
// }


// Atividade 03
// Crie um código que solicite ao usuário um número, verifique
// se é positivo, negativo ou zero, e exiba uma mensagem no console.

// let num1 = parseFloat(prompt("Digite um número: " ));

// if (num1 > 0) {
//     console.log(`${num1} é positivo`);
// } else if (num1 <0) {
//     console.log(`${num1} é negativo`);
// } else {
//     console.log(`${num1} é zero`);
// }

// Atividade 04
// Crie um código JavaScript que solicite ao usuário dois números
// e uma operação matemática, utilize switch para realizar a operação e exibir o resultado.

let operacao = (prompt("Qual operação quer fazer? (soma, divisão, multiplicação ou subtração)"))
let numero1 = parseFloat(prompt("Digite o primeiro número: "))
let numero2 = parseFloat(prompt("Digite o segundo número: "))

switch (operacao) {
    case "soma":
        console.log(`A soma é: ${numero1 + numero2}`)
        break
    case "divisão":
        if (numero2 == 0) {
            console.log("Não é possível dividir por 0")
        } else {
            console.log(`A divisão é: ${numero1 / numero2}`)  
        }
        break
    case "multiplicação":
        console.log(`A multiplicação é: ${numero1 * numero2}`)
        break
    case "subtração":
        console.log(`A divisão é: ${numero1 - numero2}`)
    break
    default:
        console.log("Não é um operador válido. Digite: soma, divisão, multiplicação ou subtração")
}