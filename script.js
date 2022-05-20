const listaNombres = []

// Pedimos nombres y los añadimos al array
function pidoDatos() {
    nombre1 = prompt("Ingrese un nombre!")
    nombre2 = prompt("Ingrese otro nombre!")
    nuevoNombre(nombre1, nombre2)
}


// Generamos un nuevo nombre
function nuevoNombre(nombre1, nombre2){
    medio = nombre1.length/2
    s1 = nombre1.substr(0,medio)
    medio = nombre2.length/2
    s2 = nombre2.substr(medio,nombre2.length)
    nombreNuevo = s1+s2
    mostrarNombre(nombreNuevo)
}

// Lo mostramos manipulando el DOM
function mostrarNombre(nombreNuevo) {
    document.getElementById("parrafoRdo").innerText = `Mezclando los nombres ${nombre1} y ${nombre2} obtenemos un hermoso nuevo nombre: ${nombreNuevo}`
    let parrafoAgregado = document.createElement("p")
    parrafoAgregado.innerHTML = "<h3>Genial, no?</h3>"
    document.body.append(parrafoAgregado)
}


pidoDatos()