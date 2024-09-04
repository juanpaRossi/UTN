/*function saludar nombre*/

function saludar(nombre){
    return ('hola '+ nombre)
}

let pedidoNombre= prompt('como te llamas?')
let nombreCliente= saludar(pedidoNombre)
alert(nombreCliente)

/*function operacion*/

function seleccionar ( operacion){
    let resultado
    if(operacion==='sumar'||operacion=== '+'||operacion==='add'){
        resultado='SUMAR'
    }
    else if(operacion==='restar'||operacion==='-'||operacion==='subtract'){
        resultado='RESTAR'
    }
    else if(operacion==='multiplicar'||operacion==='*'||operacion==='multiply'){
        resultado='MULTIPLICAR'
    }
    else{
        resultado='null'
    }
    return resultado
}

let pedidoDeOperacion = prompt('elige una operacion: ')

let eleccionDeOperacion = seleccionar(pedidoDeOperacion)

alert('tu resultado es: ' +eleccionDeOperacion)