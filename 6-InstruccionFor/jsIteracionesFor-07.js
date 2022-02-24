function mostrar()
{
let numeroIngresado;
let ContadorDivisores=0;
let i;

    numeroIngresado = parseInt(prompt("ingrese un numero"));

    for(i=1; i<numeroIngresado; i++){
    	if(numeroIngresado %i ==0){
    	   alert(i);
    	   ContadorDivisores++;
    	}
    }
    alert("la cantidad de divisores es de: "+ContadorDivisores);
}