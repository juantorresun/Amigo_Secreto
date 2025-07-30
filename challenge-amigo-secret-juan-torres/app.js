// Declaración de un arreglo vacío para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtiene el valor ingresado en el campo de texto con id "amigo"
    let nombre = document.getElementById("amigo").value;
    
    // Verifica si el campo está vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre."); // Muestra una alerta si no se ingresó ningún nombre
        return; // Sale de la función si el campo está vacío
    }
    
    // Muestra en consola el nombre del amigo agregado
    console.log(`Amigo agregado: ${nombre}`);
    
    // Agrega el nombre al arreglo de amigos
    amigos.push(nombre);
}
