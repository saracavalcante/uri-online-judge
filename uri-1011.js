var input = require("fs").readFileSync("stdin", "utf8");
var lines = parseFloat(input);

var raio = lines;
var pi = 3.14159;
var volumeEsfera = parseFloat((4/3) * pi * Math.pow(raio, 3));

console.log('VOLUME = ' + volumeEsfera.toFixed(3));
