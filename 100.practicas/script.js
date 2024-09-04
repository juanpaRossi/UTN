/* 1 suma numeros de array*/

function suma(arrayas) {
    let resultado = 0

    for (let numero of arrayas) {

        resultado = resultado + numero
    }

    return resultado

}

let Num1 = [1, 2, 3, 5, 45, 6, 3, 5, 6, 234, 3, 6, 8, 1]

let resultadoSuma = suma(Num1)

console.log(resultadoSuma)

/* 2 concatenacion de strings*/

function concatenacion(array) {
    let resultado = ''

    for (let palabra of array) {
        resultado = resultado + palabra
    }
    return resultado
}

let strings = ['hola ', 'a ', 'todo ', 'el ', 'mundo']

let resultadoConcatenacion = concatenacion(strings)

console.log(resultadoConcatenacion)


/*3 numeros mayores a 10*/

const numMayoresQue10 = (array) => {
    const resultado = []

    for (let numero of array) {
        if (numero > 10) {
            resultado.push(numero)
        }
    }
    return resultado
}

let numeros10 = [1, 4, 6, 1, 1, 11, 14, 18, 3, 4, 7, 8, 3, 11]

let result10 = numMayoresQue10(numeros10)


console.log(result10)

/*4 suma de numero pares*/

function sumaPares(pares) {
    let resultado = 0

    for (let numero of pares) {
        if (numero % 2 === 0) {
            resultado = resultado + numero
        }
    }
    return resultado
}

let numerosPares = [2, 4, 5, 8, 3, 4, 5, 3, 7, 2]

let resultPares = sumaPares(numerosPares)

console.log(resultPares)


/*5 eliminar 1 string de un array*/


function eliminarString(array, stringParaEliminar) {

    if (array.includes(stringParaEliminar)) {

        let v = array.indexOf(stringParaEliminar)
        array.splice(v, 1)

    }
    else if (!array.includes(stringParaEliminar)) {
        array = null
    }

    return array
}

const ttt = ['pepe', 'juan', 'pedro', 'maria', 'pedro']

const resultadoEliminar_string = (eliminarString(ttt, 'maria'))

console.log(resultadoEliminar_string)

//6- Crear lista

function crearLIsta(array, nombreLista) {
    let lista = nombreLista
    let contador = 0
    for (let elemento of array) {
        lista = `${lista} 
        ${contador = contador + 1} ${')  ' + elemento}`


    }
    return lista
}

const nombres = ['pepe', 'juan', 'pedro', 'maria', 'pedro']
let nombreLista = 'Lista de nombres: '
const resultadoCrearLista = crearLIsta(nombres, nombreLista)

console.log(resultadoCrearLista)

//7 Contador de String

function contadorString(array, buscar) {
    let contador = 0
    for (let elemento of array)
        if (elemento === buscar) {
            contador = contador + 1
        }

    return contador
}

const datos = ['a', 'b', 'c', 'a', 'a', 'a', 'd', 'b']
let dato_aBUscar = 'a'

const resultadoContadorString = contadorString(datos, dato_aBUscar)

console.log(resultadoContadorString)

//8 Ganancias Mensuales

const gananciasMensuales = []

function vender(cantidadVendida, precio, nombreDeProducto) {

    let i=0
    
    i= nombreDeProducto+'= '+precio*cantidadVendida
    

    gananciasMensuales.push(i)
}


let Producto='silla'

let precio=1000

let ventas= 2

let p='mesa'
let $=1000
let v= 3

vender(v,$,p)
vender(ventas,precio,Producto)
console.log(gananciasMensuales)

// 9 Gastos Mensuales



