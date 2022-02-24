function mostrar()
{
 let numeroIngresado;
 let i;
 let bandera=true;

    
    numeroIngresado = parseInt(prompt("ingrese un numero"));

    for(i=2; i<numeroIngresado; i++){
    	if (numeroIngresado % i == 0){
    		bandera = false;
    	}
    }
    
    if(bandera == true){
       mensaje = "es primo";
    }
     
    if(bandera == false){
       mensaje = "no es primo";
    }
    alert(mensaje);
	
}