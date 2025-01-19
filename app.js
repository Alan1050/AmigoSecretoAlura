// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let Identificador = 1;

function agregarAmigo() {
let nombre = document.querySelector('#amigo').value;
listaAmigos.push({ id: Identificador, nombre });
Identificador++;
actualizarLista();
document.querySelector('#amigo').value = "";
}

function actualizarLista() {
const listaElement = document.getElementById('listaAmigos');
listaElement.innerHTML = ""; 

listaAmigos.forEach(amigo => {
    listaElement.innerHTML += `<li>${amigo.nombre}</li>`;
});
}

function sortearAmigo() {
    const resultadoElement = document.getElementById('resultado');

    // Selecciona un amigo aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];

    // Muestra el resultado
    resultadoElement.textContent = `🎉 El amigo sorteado es: ${amigoSorteado.nombre} 🎉`;
}
