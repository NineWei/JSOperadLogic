# JSOperadLogic

## Operadores Lógicos no **Java Script**

- && (and)
- || (or)
- ! (no)

---
### Exemplos

```javascript
let idade = 17
let trabalha = "sim"
let vota = "sim"

console.log(idade >=18 || trabalha == "sim" || vota == "sim")
```

Saída: 
[Running] node "c:\Users\Aluno Programação\Downloads\AulaJS\script.js"
true

[Done] exited with code=0 in 0.125 seconds

Obs.: É necessário usar a expressão dentro dos parênteses.
Obs.: Para ligar o arquivo do html com o do js, é utilizado dentro do body do HTML: 
```html
<script src="script.js"></script>
```

---

Atividade 1
Atividade 01
Solicite dois números ao usuário e verifique se ambos são
positivos, se pelo menos um é positivo, e se nenhum é positivo,
exibindo os resultados no console.

Use prompt para solicitar os números, armazene-os em numero1
e numero2, e utilize operadores lógicos para as verificações.

```javascript
let numero1 = parseFloat(prompt("Digite o primeiro número: "))
let numero2 = parseFloat(prompt("Digite o segundo número: "))

console.log("Ambos positivos?", numero1>0 && numero2>0)
console.log("Pelo menos um é positivo?", numero1>0 || numero2>0)
console.log("Nenhum é positivo?", numero1<0 && numero2<0)
```

Lembrete.: Olhar o resultado no console do navegador (F12 -> Console)
numero1 = 5
numero2 = -5
O resultado vai imprimir: 
Ambos positivos? false
Pelo menos um é positivo? true
Nenhum é positivo? false

---

Atividade 2
Crie um código que solicite ao usuário dois números, compare-os com
operadores de comparação.

```javascript
let numero1 = prompt("Digite o primeiro número: ")
let numero2 = prompt("Digite o segundo número: ")

console.log("Igual?", numero1 === numero2)
console.log("Diferente?",numero1 !== numero2)
console.log("Maior ou igual?", numero1 >= numero2)
console.log("Menor ou igual?", numero1 <= numero2)
```

numero1 = 5
numero2 = 5
O resultado vai imprimir:
Igual? true
Diferente? false
Maior ou igual? true
Menor ou igual? true

---

## Condicionais

- if (Se):
- else if (Senão se):
- else (Senão):
- switch (Troca):

### Exemplo com IF (Se)

 ```javascript
let idade = 18
let trabalha = "sim"

if (idade >= 18 && trabalha == "sim") {
    console.log("Você é maior de idade")
}
```

O resultado vai imprimir: Você é maior de idade

### Exemplo com ELSE IF (Senão se)

```javascript
let idade = 15
let trabalha = "sim"

if (idade >= 18) {
    console.log("Você é maior de idade")
} else if (idade >= 12) {
    console.log("Você é um adolescente")
}
```

O resultado vai imprimir: Você é um adolescente

Obs.: Pode colocar quantos else if precisar

### Exemplo com ELSE (Senão)

É a última condição, é o "resto", porque **não depende de condição nenhuma**. Se nada for verdadeiro, "cai" no Else.

```javascript
let idade = 2
let trabalha = "sim"

if (idade >= 18) {
    console.log("Você é maior de idade")
} else if (idade >= 12) {
    console.log("Você é um adolescente")
} else if (idade>=4) {
    console.log("Você é uma criança")
} else {
    console.log("Você é um bebê")
}
```

O resultado vai imprimir: Você é um bebê

## Estrutura Ternário

É quando escreve a estrutura condicional em uma linha só. E é só para verificar se o resultado é true or false.

```javascript
let idade = 16
let trabalha = "sim"

let resultado = (idade >= 18) ? "Maior de idade" : "Menor de idade"
console.log(resultado)
```

O resultado vai imprimir: Menor de idade

? == então
: == senão

## Estrutura Switch

Ele é mais usado quando já tem o o valor da variável e não precisa de estruturas complexas das condições.
Default não é obrigatório.
Break é utilizado para parar a estrutura.
O case pode ser tanto numérico, quanto uma string.
Switch Pode ser usado como um menu, por exemplo.

```javascript
let diaSemana = 3

switch (diaSemana) {
    case 1:
        console.log("Domingo")
        break
    case 2:
        console.log("Segunda")
        break
    case 3:
        console.log("Terça")
        break
    default:
        console.log("Não é um dia válido")
        break
}
```

O resultado vai imprimir: Terça

---

Atividade 03
Crie um código que solicite ao usuário um número, verifique
se é positivo, negativo ou zero, e exiba uma mensagem no console.

```javascript
let num1 = parseFloat(prompt("Digite um número: " ));

if (num1 > 0) {
    console.log(`${num1} é positivo`);
} else if (num1 <0) {
    console.log(`${num1} é negativo`);
} else {
    console.log(`${num1} é zero`);
}
```

---

Atividade 04
Crie um código JavaScript que solicite ao usuário dois números
e uma operação matemática, utilize switch para realizar a operação e exibir o resultado.

Solicite os números com prompt e armazene em numero1 e numero2.
Solicite a operação e armazene em operacao.
Utilize switch para realizar a operação escolhida e exiba o resultado com console.log.

```javascript
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
```

Obs.: Interpolação é exibir o resultado com uma string + a operação que quero fazer dentro das chaves.
---

Link do exercício desafio:
https://dontpad.com/exercicios-js-condicionais
