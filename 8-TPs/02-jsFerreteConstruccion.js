/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
//thiago bongioanni
//tp 2
function Rectangulo () 
{
let largoTerreno;
let anchoTerreno;
let totalAlambres
let calculoTerreno;
let mensaje;

largoTerreno = parseFloat(document.getElementById("txtIdLargo").value);
anchoTerreno = parseFloat(document.getElementById("txtIdAncho").value);


 calculoTerreno = (largoTerreno + anchoTerreno)*2;
 totalAlambres = calculoTerreno * 3;

 mensaje =  "la cantidad de metros de alambre a comprar es de " + totalAlambres;
 alert(mensaje);

}
function Circulo () 
{
let radioTerreno;
let calculoTerreno;
let totalAlambres;
let mensaje;


radioTerreno = parseFloat(document.getElementById("txtIdRadio").value);

calculoDiametro = radioTerreno *2;
calculoTerreno = calculoDiametro * 3;
totalAlambres = calculoTerreno * 3.14;

mensaje = "la cantidad a comprar de metros de alambre es de " +totalAlambres;
alert(mensaje);

}
function Materiales () 
{
let largoTerreno;
let anchoTerreno;
let calculoMetrosCuadrados;
let bolsasCemento;
let bolsasCal;

largoTerreno = parseInt(document.getElementById("txtIdLargo").value);
anchoTerreno = parseInt(document.getElementById("txtIdAncho").value);

calculoMetrosCuadrados = largoTerreno * anchoTerreno;
bolsasCal = calculoMetrosCuadrados * 3;
bolsasCemento = calculoMetrosCuadrados * 2;


mensaje = "la cantidad de bolsas de cal que necesitas es de " +bolsasCal+ " y la cantidad de bolsas de cemento es de " +bolsasCemento;
alert(mensaje);

}