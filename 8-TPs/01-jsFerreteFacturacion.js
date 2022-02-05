/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
let numero1;
let numero2;
let numero3;
let resultado;
let mensaje;

numero1 = parseInt(document.getElementById("txtIdPrecioUno").value);
numero2 = parseInt(document.getElementById("txtIdPrecioDos").value);
numero3 = parseInt(document.getElementById("txtIdPrecioTres").value);

resultado = numero1 + numero2 + numero3;
mensaje = "el total es " + resultado;
alert(mensaje)




}
function Promedio () 
{
let precio1;
let precio2;
let precio3;
let promedio;
let resultado;
let mensaje;

precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
precio2	= parseFloat(document.getElementById("txtIdPrecioDos").value);
precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

promedio = (precio1+precio2+precio3)
resultado = promedio/3

mensaje = "el promedio de los precios es " + resultado;
alert(mensaje)


}

function PrecioFinal () 
{
let precios1;
let precios2;
let precios3;
let preciofinal;
let total;
let mensaje

precios1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
precios2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
precios3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

preciofinal = precios1+precios2+precios3;

total = preciofinal * 1.21;

mensaje = "el precio final es " + total
alert(mensaje)

}