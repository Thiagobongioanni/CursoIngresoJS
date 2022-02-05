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
