const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const btnRegistrar = document.getElementById("btnRegistrar");
const tablaUsuarios = document.getElementById("tablaUsuarios");
const contador = document.getElementById("contador");
const buscador = document.getElementById("buscador");

let usuarios = [];

btnRegistrar.addEventListener("click", registrarUsuario);

buscador.addEventListener("keyup", buscarUsuarios);

function registrarUsuario() {

    if (
        nombre.value.trim() === "" ||
        correo.value.trim() === ""
    ) {
        alert("Complete todos los campos");
        return;
    }

    const usuario = {
        id: Date.now(),
        nombre: nombre.value,
        correo: correo.value
    };

    usuarios.push(usuario);

    mostrarUsuarios();

    nombre.value = "";
    correo.value = "";
}

function mostrarUsuarios(lista = usuarios) {

    tablaUsuarios.innerHTML = "";

    lista.forEach((usuario, index) => {

        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.correo}</td>
            <td>
                <button
                    class="btn btn-danger btn-sm"
                    onclick="eliminarUsuario(${usuario.id})">
                    Eliminar
                </button>
            </td>
        `;

        tablaUsuarios.appendChild(fila);
    });

    contador.textContent = usuarios.length;
}

function eliminarUsuario(id) {

    usuarios = usuarios.filter(
        usuario => usuario.id !== id
    );

    mostrarUsuarios();
}

function buscarUsuarios() {

    const texto = buscador.value.toLowerCase();

    const resultados = usuarios.filter(usuario =>
        usuario.nombre.toLowerCase().includes(texto) ||
        usuario.correo.toLowerCase().includes(texto)
    );

    mostrarUsuarios(resultados);
}