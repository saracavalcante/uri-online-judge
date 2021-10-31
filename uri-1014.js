var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var distancia = lines.shift();
var totalCombustivel = lines.shift();

var consumoMedio = (distancia / totalCombustivel).toFixed(3);

console.log(`${consumoMedio} km/l`);