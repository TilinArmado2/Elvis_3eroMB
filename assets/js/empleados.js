const formEmpleado = document.getElementById("formEmpleado");

formEmpleado.addEventListener("submit", function(event) {
    event.preventDefault();

    const cedula = document.getElementById("ciEmpleado").value;
    const nombre = document.getElementById("nombreEmpleado").value;
    const apellido = document.getElementById("apellidoEmpleado").value;
    const cargo = document.getElementById("cargoEmpleado").value;

    const empleado = {
        cedula: cedula,
        nombre: nombre,
        apellido: apellido,
        cargo: cargo
    };

    const fila = document.createElement("tr");

    const celdaCedula = document.createElement("td");
    celdaCedula.textContent = empleado.cedula;

    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = empleado.nombre;

    const celdaApellido = document.createElement("td");
    celdaApellido.textContent = empleado.apellido;

    const celdaCargo = document.createElement("td");
    celdaCargo.textContent = empleado.cargo;

    const celdaAcciones = document.createElement("td");

    const btnModificar = document.createElement("button");
    btnModificar.textContent = "Modificar";

btnModificar.addEventListener("click", function() {
    const celdas = fila.children;

    document.getElementById("ciEmpleado").value = celdas[0].textContent;
    document.getElementById("nombreEmpleado").value = celdas[1].textContent;
    document.getElementById("apellidoEmpleado").value = celdas[2].textContent;
    document.getElementById("cargoEmpleado").value = celdas[3].textContent;

    document.querySelector(".formularioAltaUsuario").style.display = "flex";

    fila.remove();
});

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";

    btnEliminar.addEventListener("click", function() {
        fila.remove();
    });

    celdaAcciones.appendChild(btnModificar);
    celdaAcciones.appendChild(btnEliminar);

    fila.appendChild(celdaCedula);
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaApellido);
    fila.appendChild(celdaCargo);
    fila.appendChild(celdaAcciones);

    const cuerpoTabla = document.getElementById("cuerpoTablaEmpleado");
    cuerpoTabla.appendChild(fila);

    formEmpleado.reset();
});