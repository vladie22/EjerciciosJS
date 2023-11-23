//Programa que pida dos numeros y nos diga cual es el mayor, el menor y si son iguales

var num1 = prompt("Escribe el primer numero")
var num2 = prompt("Escribe el segundo numero")

if(num1  > num2 && num1 != num2){
    alert("Primer numero es "+num1+" es el mayor");
    alert("Segundo numero es "+num2+" es el menor");
}else if(num2 > num1 && num1 != num2){
    alert("Segundo numero es "+num2+" es el mayor");
    alert("Primer numero es "+num1+" es el menor");
}else if(num1 == num2){
    alert("Ambos numeros son "+ num1);
}