/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
let numeroIngresado;

	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 9."));

	while(numeroIngresado < 0 || numeroIngresado > 9){

		 numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 9."));
	}
	     parseInt(document.getElementById("txtIdNumero").value = numeroIngresado);
}
