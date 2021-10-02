//OBJETOS

//1
const usuario1 = {
    nombreUsuario: "sebas_ok",
    contrasenia: "seba12345"
}

const usuario2 = {
    nombreUsuario: "carito_",
    contrasenia: "carito12345"
}

const usuario3 = {
    nombreUsuario: "valen_tina",
    contrasenia: "valen12345"
}

//2
const saludoUsuario = document.getElementById("saludo-usuario")

const saludar = (objeto) => {
    saludoUsuario.textContent = `Hola, ${objeto.nombreUsuario}`
}

//3 

//saludar(usuario1)
//saludar(usuario2)
//saludar(usuario3)

//4

const modificarNombreDeUsuario = (usuario, nuevoNombre ) => {
    return usuario.nombreUsuario = nuevoNombre
}

//5

// console.log(modificarNombreDeUsuario(usuario2, "sebas_ok2"))
// console.log(modificarNombreDeUsuario(usuario2, "carito_2"))
// console.log(modificarNombreDeUsuario(usuario2, "valen_tina2"))

//6 

const modificarContrasenia = (usuario, nuevaContrasenia) => {
    return usuario.contrasenia = nuevaContrasenia
}

//7

//console.log(modificarContrasenia(usuario1, "seba123456"))
// console.log(modificarContrasenia(usuario2, "carito123456"))
// console.log(modificarContrasenia(usuario, "valen123456"))

//8 

const convertirAJSON = (usuario) => {
    return JSON.stringify(usuario)
}

//9

const convertirDesdeJSON = (objetoJSON) => {
    return JSON.parse(objetoJSON)
}

//10

// console.log(convertirAJSON(usuario1))
// console.log(convertirAJSON(usuario2))
// console.log(convertirAJSON(usuario3)) 

//11

const guardarEnLocalStorage = (objetoJavascript, string) => {
return localStorage.setItem(string, convertirAJSON(objetoJavascript))
}

//12

const leerDesdeLocalStorage = (clave) => {
    return convertirDesdeJSON(localStorage.getItem(clave))
}

// EJERCITACION INTEGRADORA 