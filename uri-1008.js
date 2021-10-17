var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var NUMERO = parseInt(lines.shift());
var HORAS = parseInt(lines.shift());
var VALOR = parseFloat(lines.shift());

var SALARIO = HORAS * VALOR;

console.log('NUMBER = ' + NUMERO);
console.log('SALARY = U$ ' + SALARIO.toFixed(2));