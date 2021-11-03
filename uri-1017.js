var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var tempo = lines.shift();
var velocidadeMedia = lines.shift();

var distancia = tempo * velocidadeMedia;
var litros = distancia / 12;

console.log(litros.toFixed(3));