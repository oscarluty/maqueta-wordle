
console.log("Hola Mundo")
function toggleTabla() {
    var tabla = document.getElementById("tablaInputs");
    var input = document.getElementById("guess-input");
    var boton = document.getElementById("guess-button");
    var teclado = document.getElementById("botones");
    var teclado1 = document.getElementById("botones1");
    var actualizar = document.getElementById("ocultar");
    var h4 = document.getElementById("h4");
    if (tabla.style.display === "none") {
        tabla.style.display = "table";
        input.style.display = "none";
        boton.style.display = "none";
        h4.style.display = "none";
        teclado.style.display = "table";
        teclado1.style.display = "table";
        actualizar.style.display = "inline";
    } else {
        tabla.style.display = "none"; // Ocultar la tabla
        tabla.style.display = "none";
        input.style.display = "block";
        boton.style.display = "block";
        h4.style.display = "block";
        teclado.style.display = "none";
        teclado1.style.display = "none";
        actualizar.style.display = "none";
    }
}

