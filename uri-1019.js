const input = require('fs').readFileSync('stdin', 'utf8');

let segundos = parseInt(input);
const horasMinutosSegundos = [3600, 60, 1];
const resultado = [];

for (let valor of horasMinutosSegundos) {
    resultado.push(parseInt(segundos / valor));
    segundos = segundos % valor;
}

console.log(resultado.join(':'));