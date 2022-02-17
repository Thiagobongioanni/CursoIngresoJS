/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{   
	let numero;
	let suma=0;
	let multiplicacion;
	let respuesta="s";




	while(respuesta == "s"){
		  numero = parseInt(prompt("ingrese un numero"));
		  respuesta = prompt("quiere ingresar mas numeros? s/n ");

		  suma = numero + suma;
		  multiplicacion = numeroN * numero;
	}
parseInt(document.getElementById("txtIdSuma").value = suma);
parseInt(document.getElementById("txtIdProducto").value = multiplicacion);

}