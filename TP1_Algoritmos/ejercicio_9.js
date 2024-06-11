// Función para obtener las notas del usuario y calcular el promedio
function obtenerNotasYCalcularPromedio() {
    var notas = [];
    var suma = 0;
    var numeroNotas = 5;
    
    // Pedir al usuario que ingrese las notas
    for (var i = 0; i < numeroNotas; i++) {
        var nota;
        do {
            nota = parseInt(prompt("Ingrese la nota " + (i + 1) + " (un número natural menor que 11):"), 10);
            if (isNaN(nota) || nota < 0 || nota > 10) {
                alert("Nota inválida. Debe ser un número natural menor que 11.");
            }
        } while (isNaN(nota) || nota < 0 || nota > 10);

        notas.push(nota);
        suma += nota;
    }

    // Calcular el promedio
    var promedio = suma / numeroNotas;

    // Determinar el resultado basado en el promedio
    var resultado;
    if (promedio < 5) {
        resultado = "Reprobado";
    } else if (promedio >= 6 && promedio <= 8) {
        resultado = "Aprobado";
    } else if (promedio > 8) {
        resultado = "Sobresaliente";
    } else {
        resultado = "Necesita mejorar"; // Cubrir el caso de promedio = 5 (que no está especificado)
    }

    // Mostrar el promedio y el resultado
    alert("El promedio de las notas es: " + promedio.toFixed(2) + "\nResultado: " + resultado);
}

// Llamar a la función
obtenerNotasYCalcularPromedio();