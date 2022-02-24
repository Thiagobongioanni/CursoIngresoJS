function mostrar()
{
let numeroIngresado;
let contadorPares=0;
let i;
    
    numeroIngresado = parseInt(prompt("ingrese numeros"));
    
    for(i=1; i<numeroIngresado; i++){
    	if(i % 2 == 0){
    	   alert(i);
    	   contadorPares++;
    	}
    }
    alert("los numeros pares son: " +contadorPares);
}