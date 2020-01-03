alert ("Meu Primeiro js");

// comentário de uma linha
/* comentário de mais
de uma linha */

//Declaração de variáveis

var nome = "Magno F Nóbrega"; // o js entende que é String quando estiver entre aspas duplas
var idade = 34;

alert ("Seja bem vindo " + nome);
alert (nome + " tem " + idade + " anos ");

// operações aritméticas (soma, subtração, multiplicação, divisão)

var numero1 = 25;
var numero2 = 2;

var soma = numero1 + numero2;
var subtracao = numero1 - numero2;
var multiplicacao = numero1 * numero2;
var divisao = numero1 / numero2;

// usando o console no navegador (F12 ou botão direito do mouse (inspecionar))

console.log(nome);
console.log(idade);

console.log("número 1: " + numero1);
console.log("número 2: " + numero2);
console.log("soma: " + soma);
console.log("subtração: " + subtracao);
console.log("multiplicação: " + multiplicacao);
console.log("divisão: " + divisao);

//armazenando uma frase na string

var frase = "Japão é o melhor time do mundo";
console.log(frase);

//substituição de alguma palavra na string usar o string.replace("palavra a ser alterada","palavra alterada")

console.log(frase.replace("Japão","Brasil"));

//podemos usar o .replace no alert

alert(frase.replace("Japão","Inglaterra"));

//e podemos colocar a frase ou string tudo em maiusculo .toUpperCase

console.log(frase.toUpperCase());

//ou colocar a frase ou string tudo em minusculo .toLowerCase

console.log(frase.toLowerCase());




