/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
let sueldoIngresado;
	let resultadoSueldo;
	let reduccionSueldo;
	
sueldoIngresado = parseInt(document.getElementById("txtIdImporte").value);

reduccionSueldo = sueldoIngresado * -0.25 ;
resultadoSueldo = reduccionSueldo + sueldoIngresado;

document.getElementById("txtIdResultado").value = resultadoSueldo;

}
	








/*ignorar ejercicio extra*/


//E/S 10Bis1: Debemos lograr tomar el importe por ID.T ransformarlo a entero (parseInt),
 //luego pedirle al usuario un % de descuento (USTEDES RESUELVEN COMO LE PIDEN EL NUMERO)
 // y mostrar el importe en el cuadro de texto "RESULTADO"	

/*let importeIngresado;
let totalFinal;
let descuentoIngresadoPrompt;
let calculo;

importeIngresado = parseInt(document.getElementById("txtIdImporte").value);
descuentoIngresadoPrompt = parseInt(prompt("ingrese su descuento"));

calculo = descuentoIngresadoPrompt  * importeIngresado /100;

totalFinal = importeIngresado - calculo;

document.getElementById("txtIdResultado").value = totalFinal;*/
