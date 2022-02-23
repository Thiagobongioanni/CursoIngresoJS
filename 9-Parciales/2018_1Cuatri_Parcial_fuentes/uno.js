
function mostrar()
{
let anchoRectangulo;
let largoRectangulo;
let perimetro;

    anchoRectangulo = parseFloat(prompt("ingrese el ancho del rectangulo"));
    largoRectangulo = parseFloat(prompt("ingrese el largo del rectangulo"));
 
    perimetro = anchoRectangulo + largoRectangulo;

    alert("el perimetro es de "+perimetro);
}
