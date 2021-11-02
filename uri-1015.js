var input = require('fs').readFileSync('stdin', 'utf8');
var values = input.split('\n');

var [x1, y1] = values[0].split(' ');
var [x2, y2] = values[1].split(' ');

var distancia = Math.sqrt(((x2 - x1) ** 2 + (y2 - y1) ** 2), 2);

console.log(distancia.toFixed(4));