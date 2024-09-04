function sumatoria(cantidad){
    let resultado=0
    for( let contador=0; contador<cantidad; contador++) {

        let numero = Number(prompt('dime un numero'));

        while(isNaN(numero)||numero===''||numero===null){
            alert('error')
            numero=Number(prompt('tiene que ser un numero'))
            }
        
        resultado = resultado+ numero;
        }

    return resultado;
    }

let cantidadNUmeros=prompt('cuantos numeros quieres sumar')

while(isNaN(cantidadNUmeros)||cantidadNUmeros===''||cantidadNUmeros===null){
    alert('error')
    cantidadNUmeros=prompt('tiene que ser un numero')

}

let suma =sumatoria(cantidadNUmeros)
alert('el resultado de la suma de los numeros elegidos es: ' +suma)