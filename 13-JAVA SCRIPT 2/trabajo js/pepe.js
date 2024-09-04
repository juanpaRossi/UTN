/*
let numero1 =prompt('dime un numero')
while( isNaN(numero1)|| numero1==='' || numero1===null) {
    alert('error')
    numero1= prompt('dime otro numero que sea valido')
}
let numero2 = prompt('dame un segundo numero')
while(isNaN(numero2) || numero2 === null || numero2===''){

    alert('error')
    numero2= prompt('dime otro numero que sea valido')
}
let operacion =prompt('elige una operacion')
while(operacion !== '/' && operacion!== '*' && operacion !== '-' && operacion != '+'){
    operacion=prompt('por favor elije entre los valores: *,/,- o +')
}

if(operacion==='*'){
    alert('el resultado de los datos seleccionados es: ' + numero1 + operacion + numero2)
    alert('la solucion es : '+(numero1*numero2))
}
else if(operacion==='/'){
    alert('el resultado de los datos seleccionados es: ' + numero1+operacion+numero2)
    alert('la soluciones: '+(numero1/numero2))
}
else if(operacion==='+'){
    alert('los datos seleccionados son: '+numero1+operacion+numero2)
    alert('el resultado es: '+( Number(numero1) + Number(numero2)))   
}
else if(operacion==='-'){
    alert('los datos seleccionados son: '+numero1+operacion+numero2)
    alert('la solucion es:' +(numero1-numero2))
}
    */


function solicitudIva (precioTotal){
    let iva= 0.21
    return ('iva del producto solicitado: ' + (precioTotal*iva))
}
 let valorSOlicitado =prompt('ingresa el px del producto')

 while( isNaN(valorSOlicitado)|| valorSOlicitado==='' || valorSOlicitado===null) {
    alert('error')
    valorSOlicitado= prompt('dime un valor expresado en numeros para poder realizar el calculo')
}

alert(solicitudIva(valorSOlicitado))
console.log (solicitudIva(valorSOlicitado))