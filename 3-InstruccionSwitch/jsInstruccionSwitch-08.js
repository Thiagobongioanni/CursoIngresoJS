function mostrar()
{
let destinoIngresado;

    destinoIngresado = document.getElementById("txtIdDestino").value;

    switch(destinoIngresado){
    	   case("Bariloche"):
    	   case("Ushuaia"):
    	        alert("hace frio");
    	        break;

    	   case("Cataratas"):
    	   case("Mar del plata"):
    	        alert("hace calor");
    	        break;
    }

}