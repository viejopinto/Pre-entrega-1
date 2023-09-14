
// --Saludo al usuario

alert("Bienvenido al buscador de descuentazos")
alert("Presiona ok para continuar")

// --Declaración de Variables
let descuento = 0
let totalPago = 0
let respuestaUsuario = prompt("¿Quieres usar el buscador de descuentazos?")
while (respuestaUsuario.trim().toUpperCase() === "SI") {
    let numId = parseInt(prompt("Ingresa tu número de identificación"))
    let cat1 = prompt("Ingresa la categoría, solo puede ser Ropa, Videojuegos o Mascotas")
    alert("Excelente, tenemos tu ID número " + numId + " registrado en la categoría " + cat1)
    let cuantoGasta = parseInt(prompt("Cuánto es tu presupuesto para gastar"))
    if (cuantoGasta < 15000) {
        let montoExacto = parseFloat(prompt("Muy bien, ahora dinos cuánto exactamente vas a gastar, recuerda que tiene que ser menos de 15,000"))
        descuento = montoExacto * 0.15
        totalPago = montoExacto - descuento
        alert ("El total a pagar es de " + totalPago)
    }

    else if (cuantoGasta >= 15000) {
        let montoExacto = parseFloat(prompt("Muy bien, ahora dinos cuánto exactamente vas a gastar, recuerda que tiene que ser 15,000 o más"))
        descuento = montoExacto * 0.25
        totalPago = montoExacto - descuento
        alert ("El total a pagar es de " + totalPago)
    }
    respuestaUsuario = prompt("¿Quieres usar el buscador de descuentazos?")
}

alert("Gracias")