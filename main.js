



window.addEventListener("load", () =>{


    var stop = document.getElementById("stop");
    var start = document.getElementById("start");

    function intervalo(){
        var tiempo = setInterval(()=>{
            console.log("pepe")
            var encabezado = document.querySelector("h1");
            if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "20px";
            }else 
            {
                encabezado.style.fontSize = "50px";
            }
        },2000); //Cada 3 segundos imprimira en consola
        return tiempo;

    }
    
    var tiempo = intervalo();//guardamos la funcion en la variable tiempo para parar la funcion con clearInterval
    
    stop.addEventListener("click", ()=>{
        clearInterval(tiempo);//rompemos el intervalo del metodo setInterval
    });

    start.addEventListener("click", () =>{
        intervalo();//llamamos a la funcion intervalo para inicializar el setInterval
    })

});





var caja = document.getElementById("caja");//Guardamos el elemento caja en la variable caja
var boton = document.querySelector("button");//Guardamos el elemento button en la variable boton


boton.addEventListener("click",()=>{ //asignamos ell event listener con el evento cick
    var cajaColor = caja.style.backgroundColor;//Variable cambio de color
    if(cajaColor == "red"){ //Si el elemeto eso rojo
        caja.style.backgroundColor = "green";//Lo cambia a verde
    }else{//Si no
        caja.style.backgroundColor = "red";//Lo cambia a rojo
    }
})

boton.addEventListener("mouseover", ()=>{
    caja.style.backgroundColor = "#ccc";//Cuando pasa el mouse por encima del elemento lo cambia
})
boton.addEventListener("mouseout", ()=>{
    caja.style.backgroundColor = "black";//Cuando sale el mouse del elemento lo cambia
})


var input = document.querySelector("input");


input.addEventListener("focus", ()=>{
    console.log("entraste al input");
});
input.addEventListener("blur", ()=>{
    console.log("saliste del input");
});
input.addEventListener("keydown", (event)=>{
    console.log("[keydown] pulsando esta tecla",String.fromCharCode(event.keyCode));
});
input.addEventListener("keypress", (event)=>{
    console.log("[keypress] tecla presionada",String.fromCharCode(event.keyCode));
});
input.addEventListener("keyup", (event)=>{
    console.log("[keyup] tecla soltada",String.fromCharCode(event.keyCode));
});


    
