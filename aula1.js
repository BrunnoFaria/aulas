/*

Variáveis são blocos de memória onde você guarda valores.

Esses valores podem ser de qualquer tipo* em JavaScript.

* As variáveis de memória possuem vários tipos prédefinidos. Os mais comuns são: 
    {String para texto.
    Integer para numeros inteiros.
    Double para numeros com casas decimais significatvias.
    Boolean para estados de true ou false.
    Long para numeros beeem grandes.}

Existem vários outros tipos além dos mencionados acima.

Em JavaScript, nós não precisamos indicar o tipo da variável, bastando escrever o seu nome para criá-la. ex:
    variável;

Em JavaScript também usamos palavras especiais para criar as variáveis e dizer de onde 
podem ser acessadas pelo programa.
Ficam reservadas as seguintes palavras para declarar variáveis:
    {let
    var
    const}

Cada comando acima dá um tipo de limitação ao acesso e a natureza das variáveis.

let -> Permite acesso local, apenas. A variável ainda pode sofrer modificações.
var -> Permite acesso global, ou seja, acessível em qualquer pedaço da aplicação. 
A variável ainda pode sofrer modificações.
const -> Permite acesso global, ou seja, acessível em qualquer pedaço da aplicação. 
A variável NÃO pode sofrer modificações.

A sintaxe completa de criação de uma variável se dá da seguinte forma:

let/var/const nome_da_variavel =** "algum valor";

** O operador '=' indica atribuição de valor a alguma variável.

É sempre bom usar o let para declarar as variáveis pois assim limitamos o 
acesso indesejado e potencilamente prejudicial aos dados do programa.

Recomendo também sempre atribuir um valor a uma variável, mesmo que seja 0 ou "" (vazio).

O JavaScript utiliza também a figura do vetor/array***. 
Esses são blocos de memória (variáveis) que podem receber diversos valores. 
Ex:
let vetor = [1,2,3,4,5,6,7,"oito"];

Podemos acessar os valores de dentro dessa variável fazendo referência a posição 
dos elementos dentro da estrutura. Ex:
console.log(vetor[1]) --> Imprimirá 2

***Vetores em JS sempre começam com suas posições (index) no  0.

Uma analogia boa para entender variáveis seria a seguinte:

    A memória do computador é uma estante enorme cheia de gavetas. 
    Os nossos programas pegam essas gavetinhas da estante e colocam rótulo na gaveta 
    com o nome dela e dados lá dentro, conforme ordenamos.
    Podemos guardar mais de uma coisa dentro da mesma gaveta utilizando os vetores. 
    Para acessar algo dentro da gaveta que possui vários objetos, devemos indicar a 
    posição do objeto na gaveta usando o índice(index) daquele objeto 
    (Sempre começa com 0).

*/

var nome = "Brunno";

let sobrenome = "Faria";

const guns_n_roses_eh_a_melhor_banda_de_todos_os_tempos = true;

let coisasParaComerAntesDeMorrer = ["iceCream Sandwich","Shawarma",
"Farofa de bunda de tanajura"];

var tudoJuntoEMisturado = [112,78/2,4.5,"Elvis Presley",false]