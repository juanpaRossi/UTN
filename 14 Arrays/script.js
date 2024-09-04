
/*const nombres= []

for(let i =0 ; i <nombres.length; i = i +1){
    alert(nombres[i])
}
    
let pedidpNOMbres= prompt('dime los nombres de tu familia: ')

nombres.push(pedidpNOMbres)


for(let elemento of nombres){
    alert(elemento)
}
*/

/*
function calculo (operacion,valor1,valor2){
    let resultado
    if (operacion=== '*'){
        resultado= valor1 * valor2   
    }
    else if(operacion==='/'){
        resultado= valor1/valor2
    }
    else if (operacion==='-'){
        resultado= valor1-valor2
    }
    else if(operacion==='+'){
        resultado=valor1+valor2
    }
    else{
        resultado= 'null'
    }
    return resultado

}

let resolucionCalculo = calculo('/',9,5)

porque no funciona calculo con los valores del prompt 'pedido'


console.log(resolucionCalculo)



function numeroMayor(arrayss){
    let mayor= 0
    for(let num of arrayss){
        if(num > mayor){

            mayor=num
        }
    }
    return mayor
}

let numeros=[8,4,5,15,8,9,5,4,3,2,4,]

console.log(numeroMayor(numeros))



function concatenar(arrays){
    let acum=''
    for(let letras of arrays){
        acum= acum + letras
    }
    return acum
    }

const result=['j','u','a','n'];

console.log(concatenar(result));

result.push('c','i','t','o')



console.log(concatenar(result))
*/

function numMayor (numeros){
    let result = 0
    for(let numero of numeros){
        if(numero > result){
            result = numero
        }
    
    }

    return result
}

let num = [1234,5,4,7,4,2,123,6,766767]
console.log(numMayor(num))




function concatenarCaracteres ( letras){
    let resultado = ''
    for(let letra of letras){
        resultado = resultado + letra
    }


    return resultado
}

let caracteres = []
let valores= concatenarCaracteres(caracteres)
caracteres.push('j','u','a','n')
console.log(concatenarCaracteres(caracteres))
caracteres.push('p','a',' rossi')
console.log(concatenarCaracteres(caracteres))


function eliminarNOmbre (nombres){
    
    while(nombres.includes('pepe')){
        let resultado = nombres.indexOf ('pepe')
        nombres.splice(resultado,1)
    }

    return nombres
}
const pepe = ['juan', 'melisa','pepe', 'genaro','bruno', 'pepe'] 

console.log(eliminarNOmbre(pepe))


