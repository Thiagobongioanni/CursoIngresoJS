/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
let sexoIngresado;

	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado != "f" && sexoIngresado != "m"){
		  sexoIngresado = prompt("error ingresar el sexo f o m");
	}

	document.getElementById("txtIdSexo").value = sexoIngresado

}