/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{   
let numeroIngresado;
let sumaPositivo=0;
let multiplicacionNegativo=1;
let respuesta="s";

	 while(respuesta == "s"){
		  numeroIngresado = parseFloat(prompt("ingrese un numero"));

		  while(isNaN(numeroIngresado) == true){
		  	    parseFloat(prompt("error ingrese un numero"));
		  }

		  if(numeroIngresado >= 0){
		  	sumaPositivo = sumaPositivo + numeroIngresado;
		  }

		  else if(numeroIngresado < 0 ){
		  	      multiplicacionNegativo = multiplicacionNegativo * numeroIngresado;
		  }

		  respuesta = prompt("quiere ingresar mas numeros? s/n ");
	}
    parseInt(document.getElementById("txtIdSuma").value = sumaPositivo);
    parseInt(document.getElementById("txtIdProducto").value = multiplicacionNegativo);
}