alert ("Meu Primeiro js");

// comentário de uma linha
/* comentário de mais
de uma linha */

/*

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

//e podemos colocar a frase ou string tudo em maiusculo com a função .toUpperCase

console.log(frase.toUpperCase());

//ou colocar a frase ou string tudo em minusculo com a função .toLowerCase

console.log(frase.toLowerCase());   

*/

// criando array 

var lista = ["maçã","pêra","laranja"];
console.log(lista);

// verificar a posição dentro do array

console.log(lista[2]);
console.log(lista[1]);
console.log(lista[0]);

// também é possivel ver o através do alert

alert(lista[2]);

// o push vc adiciona um elemento no final da array

lista.push("uva");
console.log(lista);

// o pop remove o ultimo elemento da array

lista.pop();
console.log(lista);

//verificar o tamanho da array com lenght

console.log(lista.length);

// colocando o array de trás pra frente com a função reverse

console.log(lista.reverse());

//convertendo o array para String com a função toString

console.log(lista.toString());

// usando o a função join para convertar para string e colocar um delimitador entre os elementos do array

console.log(lista.join(" - "));


//Dicionário (Matrizes) 1 linha e 2 colunas

var fruta = {nome:"maça", cor:"vermelha"}

console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);

// pode usar o alerta também

alert(fruta.cor);

// Matriz de 2 linhas ou mais e 2 colunas ou mais

var frutas = [{nome:"maçã", cor:"vermelha", tamanho:"pequeno"},{nome:"uva", cor:"roxa", tamanho:"médio"},{nome:"melancia", cor:"verde", tamanho:"grande"}]

console.log(frutas);
console.log(frutas[2].nome,frutas[1].cor,frutas[0].tamanho);








