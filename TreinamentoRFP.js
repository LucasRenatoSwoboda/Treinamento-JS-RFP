/*  JAVASCRIPT RFP */

//  Comentário de linha
/*  Comentário de
 *  mais linhas
 */

// JavaScript é case-sensitive.
// Padrão lower camelCase (Exceções: Constantes).

// DECLARAÇÃO DE VARIÁVEIS
// palavras chaves: var, let e const.

// Declaração de variável global.
var nome;
nome = "";
var nomeDois = "";

// Declaração de variável local.
let codigo = 1;

// Declaração da constante.
const PERC_ICMS = 18;

// Tipos de dados.
//As variáveis não são tipadas, podendo receber valores diversos para a mesma variável durante a execução do programa.

// Number
var numero = 42;
var numeroDois = Number(1234);
// Null
var valorNulo = null;
// Undefined
var valorIndefinido;
// Boolean
var valorBoolean = true;
var valorBooleanDois = Boolean(false);
// String
var descricao = 'Treinamento JS';
var descricaoDois = "Treinamento JS";
var descricaoTres = String("Treinamento JS");

// Conversão de dados.
// Ao covnerter uma String no JavaScript tem que cuidar por causa do padrão nacional de ponto e vírgula.
// Quando convertemos "1.234.222,00" vai considerar 1,234 pois o padrão internacional é com ponto no lugar da vírgula.
// Então antes de realizarmos a conversão temos que trocar o 1.234.222,00 para 1,234,222.00 usando os seguintes comandos:
// Exemplo 1.
var valorTexto = "1.234.567,89";
Number.parseFloat(valorTexto.toString().replace(".", "").replace(",", "."));
Number(valorTexto.toString().replace(".", "").replace(",", "."));
// Exemplo 2.
var valorText = "2.948,19";
var valor = Number(valorText.replace(".", "").replace(",", "."));
// Exemplo 3.
var valor = Number.parseFloat(valorText.replace(".", "").replace(",", "."));
// Exemplo 4.
Number.parseFloat("2.948,19");
// Exemplo 5. (Mensagem não é um número)
Number("2.948,19");
// NaN = Not-A-Number
// Exemplo 6.
var valorNumeral = 2948;
valor.toFixed(4).toString().replace(".",",");

// Operadores de comparação
var a,b = 0;
// Igualdades (== é igual   != diferente) Ve se os valores das variáveis são os mesmos independente do tipo
a == b;
a != b;
// Maior que:
a > b;
a >= b;
// Menor que:
a < b;
a <= b;
// Igualdade - Testa se o valor e o tipo são os mesmos nas variáveis.
a === b;
a !== b;

// Operadores aritméticos
adicao = 10 + 10;
subtracao = 10 - 2;
modulo = 17 % 5;
divisao = 17 / 5
multiplicacao = 5 * 3;
exponenciacao = 5 ** 3;
incremento = 3;
incremento++;
decremento = 3;
decremento--;

// Operadores lógicos
and = (true && true);
or = (true || false);
not = !false;
