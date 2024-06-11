// Función para encontrar la primera vocal y su posición
function encontrarPrimeraVocal(texto) {
    // Definir las vocales
    var vocales = "aeiouAEIOU";
    
    // Recorrer el texto para encontrar la primera vocal
    for (var i = 0; i < texto.length; i++) {
        if (vocales.indexOf(texto[i]) !== -1) {
            // Devolver la vocal y su posición (ajustando a 1-based index)
            return { vocal: texto[i], posicion: i + 1 };
        }
    }
    
    // Si no se encuentra ninguna vocal
    return null;
}

// Solicitar al usuario que ingrese un texto
var texto = prompt("Ingrese un texto:");

// Llamar a la función para encontrar la primera vocal
var resultado = encontrarPrimeraVocal(texto);

// Mostrar el resultado
if (resultado) {
    alert("La primera vocal es '" + resultado.vocal + "' y es la letra Nº " + resultado.posicion);
} else {
    alert("No se encontraron vocales en el texto.");
}