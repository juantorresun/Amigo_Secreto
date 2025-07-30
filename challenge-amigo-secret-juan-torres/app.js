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
    mostrarAmigos(); // Llama a la función para mostrar la lista de amigos
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia la lista antes de mostrar los amigos
    // Recorre el arreglo de amigos y los muestra en la lista
    amigos.forEach(amigo => {
        let li = document.createElement("li"); // Crea un nuevo elemento de lista
        li.textContent = amigo; // Establece el texto del elemento de lista al nombre del amigo
        lista.appendChild(li); // Agrega el elemento de lista a la lista en el DOM
    }
    );
    

}

