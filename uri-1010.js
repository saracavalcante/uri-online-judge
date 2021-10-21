var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var lineOne = lines.shift().split(' ');
var lineTwo = lines.shift().split(' ');

var codigoPeca1 = lineOne.shift();
var numeroPecas1 = lineOne.shift();
var valorUnitario1 = lineOne.shift();
var valorTotal1 = numeroPecas1 * valorUnitario1;

var codigoPeca2 = lineTwo.shift();
var numeroPecas2 = lineTwo.shift();
var valorUnitario2 = lineTwo.shift();
var valorTotal2 = numeroPecas2 * valorUnitario2;

console.log('VALOR A PAGAR: R$ ' + (valorTotal1 + valorTotal2).toFixed(2));