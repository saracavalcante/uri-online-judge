var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var vendedor = lines.shift();
var salarioFixo = parseFloat(lines.shift());
var totalVendas = parseFloat(lines.shift());
var comissao = totalVendas * 0.15;

var total = comissao + salarioFixo;

console.log('TOTAL = R$ ' + total.toFixed(2));