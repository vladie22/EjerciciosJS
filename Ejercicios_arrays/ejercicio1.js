/*
1.- Pida seis numero en pantalla y se iran guardando en un Array
2.- Mostrar el array completo en el cuerpo de la pagina y la consola
3.- Ordenarlo y mostrarlo
4.- Invertir su orden y mostrarlo
5.- Mostrar cuantos elementos tiene el array
6.- Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
*/

var array_num = [];//Declaramos el array donde se guardaran los numeros que introduzca el usuario



while(isNaN(num)||array_num.length < 6){ //pedimos 6 numeros
    var num = Number(prompt("ingrese 6 numeros"));//Hacemos la peticion de numeros al usuario
    if(isNaN(num)=== false){    //Si isNaN es falso quiere decir que es un tipo de dato number si es true no lo es
        array_num.push(num);    //Agregamos los numeros al array
    }else{
        alert("Favor de ingresar un numero"); //Si no es un numero le notificamos que ingrese un numero
    }
}

function main(array,sort,reverse,length,find){ //Funcion principal llamada main
    //Con las funciones anonimas como parametros para hacer un callback de cada una de ellas
    document.write("<h1>Numeros ingresados</h1>")

    var array_ini = [];
    array.forEach(element => {
        array_ini.push(element);
    });

    array.forEach(element => { //Desglosamos por elementos el array
        console.log(element);
        document.write("<li>"+element+"</li>")//Mostramos en pantalla cada elemento
    });

    var array_sort = array.sort((a,b) => {return a-b});//ordena los numero de menor a mayor
    sort(array_sort); //Llamamos la funcion anonima sort
    
    var array_reverse = array.sort((a,b) => {return b-a});//ordena los numero de mayor a menor
    reverse(array_reverse); //Llamamos la funcion anonima reverse
    
    var count = array.length;//Guardamos la longitud del array
    length(count);//Llamamos la funcion anonima length

    var button = document.getElementById("find");
    button.addEventListener("click",() =>{ //Agregamos un evento de click en el boton con id find
        find(array_ini);//Llamamos a la funcion anonima find
    });  
}

main(array_num, //Llamamos a la funcion main

values => { //Estructura funcion anonima sort
    document.write("<h3>Numeros ordenados de menor a mayor</h3>");
    values.forEach(value => {
       document.write("<li>"+value+"</li>"); //Muestra los elementos ordenados de menor a mayor
    })

},values =>{ //Estructura funcion anonima reverse
    document.write("<h3>Numeros ordenados de mayor a menor</h3>");
    values.forEach(value => {
        document.write("<li>"+value+"</li>");//Muestra los elementos ordenados de mayor a menor
     })

},value => {//Estructura funcion anonima length
    document.write("<h3>El array tiene "+value+" numeros</h3>");//Muestra la cantidad de elementos del array

},values => {//Estructura funcion anonima find
    var value_to_find = Number(prompt("Ingrese el valor que busca")); //Pedimos al usuario ingresar numero a buscar
    var index = values.findIndex(value => {
        return value == value_to_find; //Buscamos el numero que se ingreso en el array
    })
    
    if(index != -1){//Cuando la respuesta de find es -1 quiere decir que no se encontro el numero
        alert("Su numero se ha encontrado en el indice "+index);//Si existe se despliega que si existe y su indice
    }else{
        alert("El numero que ingreso no se encuentra");//Si no existe se despliega que el numero igresado no existe
    }
});