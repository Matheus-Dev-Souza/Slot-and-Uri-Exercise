var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n");

var A = parseInt(valores.shift());
var B = parseInt(valores.shift());

var media = (A * 3.5 + B * 7.5) / 11.0

console.log("MEDIA = " + media.toFixed(5));