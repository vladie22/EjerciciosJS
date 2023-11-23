//Que nos diga si el numero es par o impar
//1. ventana prompt
//2. Si no es valido que nos pida de nuevo el numero

while(num<=0 || isNaN(num)){
    var num = Number(prompt("Ingrese el numero por favor",0));
    if(num<=0 || isNaN(num)){
        alert("No has ingresado un numero correcto, favor de verificar");
    }
}

if(num>0){
    if(num%2 == 0){
        document.write("<h1>El numero ingresado es "+num+" y es par</h1>");
    }else{
        document.write("<h1>El numero ingresado es "+num+" y es impar</h1>");
    }
    
}