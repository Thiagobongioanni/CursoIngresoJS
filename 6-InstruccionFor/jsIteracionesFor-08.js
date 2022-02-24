function mostrar()
{
 let numeroIngresado;
 let i;
 let contador=0;
 let mensaje;

    
    numeroIngresado = parseInt(prompt("ingrese un numero"));

    for(i=1; i<=numeroIngresado; i++){

    	if (numeroIngresado % i == 0){
         contador++;
    	}
    }
    
    if(contador == 2){
       mensaje = "es primo";
    }
     
    else{
       mensaje = "no es primo";
    }
    alert(mensaje);
	
}