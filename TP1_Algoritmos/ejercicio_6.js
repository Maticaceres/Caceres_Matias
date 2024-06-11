// Declarar el array con los nombres de los meses
var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

// Pedir al usuario que ingrese un número del 1 al 12
var numeroMes = prompt("Ingrese un número del 1 al 12 para obtener el nombre del mes:");

// Convertir la entrada del usuario a un número entero
numeroMes = parseInt(numeroMes);

// Validar que el número esté en el rango de 1 a 12
if (numeroMes >= 1 && numeroMes <= 12) {
    // Obtener el nombre del mes correspondiente
    var nombreMes = meses[numeroMes - 1];
    // Mostrar el nombre del mes
    alert("El mes es: " + nombreMes);
} else {
    // Si el número no está en el rango de 1 a 12, mostrar un mensaje de error
    alert("Número inválido. Por favor, ingrese un número del 1 al 12.");
}