//Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario




while(num1>=num2 || isNaN(num1)){
    var num1 = Number(prompt("Ingresar el primer numero",0));
    var num2 = prompt(("Ingresar el segundo numero",0));
    if(num1>num2){
        alert("Ingresa el numero menor primero")
    }
}

document.write("<h1>Mostrar los numeros del "+num1+" al "+num2+"</h1>");

for(let i = num1+1; i < num2; i++){
    document.write("<br>"+i+"</br>")
}