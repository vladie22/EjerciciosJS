//Programa que pida dos numeros y nos diga cual es el mayor, el menor y si son iguales
//Si los numeros son menores a cero o no es un numero que lo vuelva a pedir

while(num1 <= 0 || isNaN(num1))
{
    var num1 = Number(prompt("Escribe el primer numero",0));
    if(num1<=0 || isNaN(num1)){
        alert("No esta ingresando un numero o un numero mayor a 0")
    }   
}
while(num2 <= 0 || isNaN(num2))
{
    var num2 = Number(prompt("Escribe el segundo numero",0));
    if(num2<=0 || isNaN(num2)){
        alert("No esta ingresando un numero o un numero mayor a 0")
    } 
}

if(num1  > num2 && num1 != num2){
    alert("Primer numero es "+num1+" es el mayor");
    alert("Segundo numero es "+num2+" es el menor");
}else if(num2 > num1 && num1 != num2){
    alert("Segundo numero es "+num2+" es el mayor");
    alert("Primer numero es "+num1+" es el menor");
}else if(num1 == num2){
    alert("Ambos numeros son "+ num1);
}