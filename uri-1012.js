var input = require("fs").readFileSync("stdin", "utf8");
var [valorA, valorB, valorC] = input.split(' ').map(item => parseFloat(item));
var pi =  3.14159;

var areaTriangulo = (valorA * valorC) / 2;
var areaCirculo = pi * Math.pow(valorC, 2);
var areaTrapezio = ((valorA + valorB) * valorC) / 2;
var areaQuadrado = Math.pow(valorB, 2);
var areaRetangulo = valorA * valorB;

console.log('TRIANGULO: ' + areaTriangulo.toFixed(3));
console.log('CIRCULO: ' + areaCirculo.toFixed(3));
console.log('TRAPEZIO: ' + areaTrapezio.toFixed(3));
console.log('QUADRADO: ' + areaQuadrado.toFixed(3));
console.log('RETANGULO: ' + areaRetangulo.toFixed(3));


