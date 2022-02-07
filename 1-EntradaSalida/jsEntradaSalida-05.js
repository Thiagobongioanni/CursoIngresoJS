/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()

{	
//variables declaradas

 let nombreIngresado; 
 let edadIngresada;
 let mensajeMostrar;
	
//datos 

	edadIngresada = document.getElementById("txtIdEdad").value;
    nombreIngresado = document.getElementById("txtIdNombre").value;

//concatenar (+)
    mensajeMostrar = "usted se llama "+nombreIngresado+" y tiene "+edadIngresada+" años";
	alert(mensajeMostrar);
}













/* ignorar ejercicio extra*/





/*Se debe mostrar el mensaje : "Perez , usted se llama jose y tiene 66 años" 
se debe obtener el apellido , de la manera que puedan...*/

//thiago bongioanni 
//ejercicio E/S 5Bis (ejercicio extra numero 1)

/*function mostrar()
{   
//variables declaradas
let nombreIngresado;
let edadIngresada;
let apellidoDelPrompt;
let mensaje;

//datos
edadIngresada = document.getElementById("txtIdEdad").value;
nombreIngresado = document.getElementById("txtIdNombre").value;
apellidoDelPrompt = prompt("ingrese su apellido");

mensaje ="señor " +apellidoDelPrompt+ ", usted se llama "+nombreIngresado+" y tiene "+edadIngresada+" años";
alert(mensaje);
}*/