//El usuario introduce un numero y mostrar todos los numeros divisibles de ese numero

var num = Number(prompt("Introducir numero divisor",0));
var divisor = 0;
document.write("<h1>El numero a dividir o dividendo: "+num+"</h1>")

for(var i = divisor;divisor<=num;i++){
    var residuo = num%divisor;
    if(residuo == 0){
        document.write("<br>Dividendo: "+num+" Divisor: "+divisor+"</br>");
        console.log(divisor); 
    }
    divisor++;
}