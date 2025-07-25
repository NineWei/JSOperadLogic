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

