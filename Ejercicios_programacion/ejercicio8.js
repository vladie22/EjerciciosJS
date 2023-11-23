

while(num1<=0 || isNaN(num1)|| num2<=0 || isNaN(num2)){
    var num1 = Number(prompt("Ingrese el primer numero por favor",0));
    if(num1<=0 || isNaN(num1)){
        alert("No has ingresado el primer numero correcto, favor de verificar");
    }
    var num2 = Number(prompt("Ingrese el segundo numero por favor",0));
    if(num2<=0 || isNaN(num2)){
        alert("No has ingresado el segundo numero correcto, favor de verificar");
    }
}

var suma = num1 + num2;
var resta = num1 - num2;
var multiplicar = num1 * num2;
var dividir = num1/num2;

document.write("<h1>Primer numero: "+num1+" Segundo numero: "+num2+"</h1>");
document.write("<p>Suma: "+suma+"</p>");
document.write("<p>Resta: "+resta+"</p>");
document.write("<p>Multiplicacion: "+multiplicar+"</p>");
document.write("<p>Division: "+dividir+"</p>");
