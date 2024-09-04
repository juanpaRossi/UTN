const nombres =['pepe','juan','jose']

const nombresObjeto= nombres.map(
    (nombre) => { 
        return {nombre: nombre}

}
)
console.log(nombresObjeto)

const carrito = [
    {
        productoId: 1,
        cantidad: 2
    },
    {
        productoId: 2,
        cantidad: 4
    },
    {
        productoId: 3,
        cantidad: 90
    }
]

const restarX_ID = carrito.map(
    (producto)=>{

if( producto.productoId === 3){
    producto.cantidad= producto.cantidad-1
}
        return producto
    }
)

console.log(restarX_ID)


//eventos
//CONTADOR EN 0. SUMAR Y RESTAR

const sumar= document.getElementById("btn-incrementar")
const valorInicial= document.getElementById('contador-text')
const resta= document.getElementById("btn-decrementar")
const mostrarError= document.getElementById('error')

//lo que estamos haciendo es crear una funcion que le va a dar un valor a contador reasignando el innerText de valor inicial, luego cuando llamaos a setContador le damos el valor inicial 

const setContador =(nuevoValorContador)=>{
    contador=nuevoValorContador
    valorInicial.innerText=contador
}

const setError=(nuevoValorERROR)=>{
    error=nuevoValorERROR
    mostrarError.innerText=error

}

let contador
let error

setContador(0)
setError('')

resta.addEventListener(
    'click',
    ()=>{
    contador=contador-1

    valorInicial.innerText=contador}
)



sumar.addEventListener(
    'click',
    ()=>{
        contador=contador+1

        valorInicial.innerText=contador
    }
)



resta.addEventListener ('click', ()=>{
    if(contador<0||contador>10){

        setError('el numero no puede ser:\n-menor que cero\no\n-mayor que 10')

    }
    else{
        setError('')
    }

})

sumar.addEventListener('click',()=>{
    if(contador>10||contador<0){

        setError('el numero no puede ser:\n-menor que cero\no\n-mayor que 10')
    }
    else{
        setError('')
    }
    
})

