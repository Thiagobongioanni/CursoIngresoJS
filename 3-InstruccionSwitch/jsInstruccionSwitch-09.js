function mostrar()
{
let estacionIngresada;
let estadiaElejida;
let precioFijo = 15000;
let calculo;
let aumento;

    estacionIngresada = document.getElementById("txtIdEstacion").value;
	estadiaElejida = document.getElementById("txtIdDestino").value;

	
    if (estacionIngresada == "Invierno"){
        
        switch(estadiaElejida){
        	   case("Bariloche"):
        	   aumento = precioFijo * 0.20;
        	   calculo = aumento + precioFijo;
        	         alert("el total serian $"+ calculo);
                     break;
     
           	    case("Cataratas"):
           	    case("Cordoba"):
           	          aumento = precioFijo * -0.10;
           	          calculo = aumento + precioFijo;
           	          alert ("en total es $"+ calculo);
           	          break; 

           	    default:
           	          aumento = precioFijo * -0.20;
           	          calculo = aumento + precioFijo;
           	          alert("en total es $"+ calculo);
           	          break;


        }      
    }

    if (estacionIngresada == "Verano") {

    	switch(estadiaElejida){
    		   case("Bariloche"):
    		        aumento = precioFijo * -0.20;
    		        calculo = aumento + precioFijo;
    		        alert("en total son $"+calculo);
    		        break;

    		    case("Cataratas"):
    		    case("Cordoba"):
    		          aumento = precioFijo * 0.10;
    		          calculo = aumento + precioFijo;
    		          alert("en total son $"+calculo);
    		          break;

    		    default:
    		          aumento = precioFijo * 0.20;
    		          calculo = aumento + precioFijo;
    		          alert("en total son $"+calculo);
    		          break;
    	}
    }

    if (estacionIngresada == "Primavera" || estacionIngresada == "Otoño"){ 

    	switch(estadiaElejida){
    		   case("Bariloche"):
    		   case("Cataratas"):
    		   case("Mar del plata"):
    		         aumento = precioFijo * 0.10;
    		         calculo = aumento + precioFijo;
    		         alert("en total serian $"+calculo);
    		         break;

    		   default:
    		         alert("en total serian $"+precioFijo);

    	}
    }
                	   
}