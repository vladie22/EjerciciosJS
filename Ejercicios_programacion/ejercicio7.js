//El usuario ingresa un numero y se le mostrara la tabla de multiplicar de dicho numero

while(num<=0 || isNaN(num)){
    var num = Number(prompt("Ingrese el numero por favore",0));
    if(num<=0 || isNaN(num)){
        alert("No has ingresado un numero correcto, favor de verificar");
    }
}
document.write("<h1>La tabla de "+num+" hasta el 10</h1>");
for(var times = 1; times<=10; times++){
    var operacion = times*num;
    document.write("<br>"+times+" X "+num+" = "+operacion+"</br>");
}