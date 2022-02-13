function mostrar()
{
let estacionDelAño;
let estadiaElejida;

    estadiaElejida = document.getElementById("txtIdDestino").value;
    estacionDelAño = document.getElementById("txtIdEstacion").value;
    
   if (estacionDelAño == "Invierno"){
       
       switch(estadiaElejida){  
    	      case("Bariloche"):
                    alert("se viaja");
                    break;
       default:
                 alert("no se viaja");
                 break;

       }

    }

    if (estacionDelAño == "Verano"){

        switch(estadiaElejida){
        	   case("Mar del plata"):
        	   case("Cataratas"):
        	         alert("se viaja");
        	         break;
        default:
                     alert("no se viaja");
        }
    }

    if (estacionDelAño == "Primavera"){

    	switch(estadiaElejida){
    		   case("Bariloche"):
    		        alert("no se viaja");
    		        break;
        default:
                    alert("se viaja");
                    break;
    	}

    }

    switch(estacionDelAño){
    	   case("Otoño"):
    	        alert("se viaja");
    	        break;
    }
   
}