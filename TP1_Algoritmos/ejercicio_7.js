var valores = [true, false, 2, "hola", "mundo", 3, "char"];

// Filtrar los elementos de texto
var textos = valores.filter(elemento => typeof elemento === "string");

// Encontrar el elemento de texto con más letras
var textoMayor = textos.reduce((a, b) => a.length > b.length ? a : b);

console.log("El texto con más letras es: " + textoMayor);

// Ordenar los elementos de texto por longitud
var textosOrdenados = textos.sort((a, b) => a.length - b.length);

console.log("Textos ordenados de menor a mayor cantidad de letras: ");
textosOrdenados.forEach(texto => console.log(texto));

// Filtrar los elementos numéricos
var numeros = valores.filter(elemento => typeof elemento === "number");

var num1 = numeros[0];
var num2 = numeros[1];

var suma = num1 + num2;
var resta = num1 - num2;
var multiplicacion = num1 * num2;
var division = num1 / num2;

console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);