var frutas = ["manzana", "fresa","kiwi", "melon"];

var busqueda = frutas.findIndex(fruta => {
    return fruta == "kiwi";
});
console.log(busqueda);


var precios = [10,15,22,19,20,32,14];

var busquedaPrecio = precios.some(precio => precio >= 20);

console.log(busquedaPrecio);