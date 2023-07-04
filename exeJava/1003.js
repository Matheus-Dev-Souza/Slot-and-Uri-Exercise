var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n");

var A = parseInt(valores.shift());
var B = parseInt(valores.shift());

var soma = A + B;

console.log("SOMA = " + soma);