

var nombreInput = document.getElementById("nombre");
var apellidoInput = document.getElementById("apellido");
var edadInput = document.getElementById("edad");
    

var form = document.querySelector("form");
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    var nombreValue = nombreInput.value;
    var apellidoValue = apellidoInput.value;
    var edadValue = edadInput.value;
    mostrar(nombreValue,apellidoValue,edadValue); 
});



function mostrar(nombreV,apellidoV,edadV){
    var mostrarNombre = document.getElementById("mostrarNombre");
    var mostrarApellido = document.getElementById("mostrarApellido");
    var mostrarEdad = document.getElementById("mostrarEdad");
    mostrarNombre.innerHTML = nombreV;
    mostrarApellido.innerHTML = apellidoV;
    mostrarEdad.innerHTML = edadV;

    document.getElementById("mostrarBoton").addEventListener("click", ()=>{
        var showData = document.getElementById("mostrarData").innerHTML = `Tu nombre es 
        ${nombreV} ${apellidoV} y tienes ${edadV} años`;

        console.log(showData);
    })
}