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
