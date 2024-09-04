let datos= prompt('dame Nombre')
let edad= Number(prompt('dame edad'))

if(datos === 'juan' && edad){
    alert('bienvenido don juan')
}
else if(datos === 'pepe' && edad === 21){
    alert('pase don')
}
else if(edad > 30){
    alert('puede pasar')
}
else if( edad <= 30){
    alert('no puede pasar')
}