function mostrar()
{
let destinoIngresado;
let mensaje;

    destinoIngresado = document.getElementById("txtIdDestino").value;
    
    if (destinoIngresado == "Bariloche" || destinoIngresado == "Ushuaia"){
        mensaje = "aca hace frio";
    } 
        
    else{
        mensaje = "aca hace calor"
    }

    alert(mensaje);
}


// ejercicio original

/*let destinoIngresado;
let mensaje;

    destinoIngresado = document.getElementById("txtIdDestino").value;

    switch(destinoIngresado){
    	   case("Bariloche"):
    	   case("Ushuaia"):
    	        mensaje = "hace frio";
    	        break;

    	   case("Cataratas"):
    	   case("Mar del plata"):
    	        mensaje = "hace calor";
    	        break;
    }

    alert(mensaje);*/

