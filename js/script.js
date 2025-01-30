// Referencias a los elementos del DOM
const nombreInput = document.getElementById('nombre');
const adicionarBtn = document.getElementById('adicionar-btn');
const listaAmigos = document.getElementById('lista-amigos');
const sortearBtn = document.getElementById('sorteo-btn');
const resultadoDiv = document.getElementById('resultado');
const nombreAmigo = document.getElementById('nombre-amigo');

let amigos = []; // Array para almacenar los nombres

// Función para agregar un nombre a la lista
adicionarBtn.addEventListener('click', () => {
    const nombre = nombreInput.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    
    // Agregar el nombre a la lista y actualizar la interfaz
    amigos.push(nombre);
    nombreInput.value = ''; // Limpiar el campo de texto
    actualizarLista();
    
    // Habilitar el botón de sorteo si hay al menos un nombre
    sortearBtn.disabled = amigos.length === 0;
});

// Función para actualizar la lista visible
function actualizarLista() {
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de actualizar
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para realizar el sorteo aleatorio
sortearBtn.addEventListener('click', () => {
    if (amigos.length < 1) {
        alert('No hay amigos en la lista para hacer el sorteo.');
        return;
    }

    // Seleccionar un nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el resultado
    nombreAmigo.textContent = amigoSeleccionado;
    resultadoDiv.style.display = 'block'; // Mostrar la sección del resultado
});
