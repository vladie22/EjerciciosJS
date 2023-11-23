//ultilizando un bucle, mostrar la suma y la media de los numeros introducidos
//hasta introducir un numero negativo y ahi mostrar el resultado

var suma = 0;
var contador = 0;

do{
    var numero = Number(prompt("Introduce numeros hasta que metas un numero negativo",0));
    suma += numero;
    contador ++;
    var media = Number(suma/contador).toFixed(2);
}while(numero>=0)

if(numero < 0){
    alert('Fueron '+contador+" numeros");
    alert("La suma de los numeros es: "+suma);
    alert("La media es: "+media);
}