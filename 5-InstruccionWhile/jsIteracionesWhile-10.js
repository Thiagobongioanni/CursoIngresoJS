/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
let numeroIngresado;
let sumaNegativos=0;
let sumaPositivos=0;
let respuesta="s";
let contadorNegativo;
let contadorpositivos;
let contadorCeros;
let i=0;
let cont=0;
let contCeros=0;
let pares=0;
let contadorPares;
let promedioNegativo;
let promedioPositivo;
let diferenciaPositivoNegativo;
    

    

    while(respuesta == "s"){
    	    numeroIngresado = parseFloat(prompt("ingrese un numero"));
    	  
          while(isNaN(numeroIngresado) == true){
    	       numeroIngresado = parseInt(prompt("error ingrese un numero"));
           }
    	  
    	   if(numeroIngresado < 0){
             sumaNegativos = sumaNegativos + numeroIngresado;
              i++;
             contadorNegativo=i; 
    	   }

    	   else if(numeroIngresado > 0){  
              sumaPositivos = sumaPositivos + numeroIngresado;
              cont++;
              contadorpositivos = cont; 
          }

    	    else if(numeroIngresado == 0){
    	  	   contCeros++;
    	  	   contadorCeros = contCeros;
    	   }

    	    if((numeroIngresado%2)== 0){
                pares++;
    	  	    contadorPares = pares;
    	    }
		  respuesta = prompt("desea continuar? s/n");
	 }
    
	promedioNegativo = sumaNegativos/contadorNegativo;
	promedioPositivo = sumaPositivos/contadorpositivos;
	diferenciaPositivoNegativo = sumaNegativos + sumaPositivos;
          

	document.write("la suma de negativos es :"+sumaNegativos+ "<br>");
	document.write("la suma de positivos es :"+sumaPositivos+ "<br>");
	document.write("la cantidad de negativos es :"+contadorNegativo+ "<br>");
	document.write("la cantidad de positivos es :"+contadorpositivos+ "<br>");
	document.write("la cantidad de ceros es de :"+contadorCeros+ "<br>");
	document.write("la cantidad de numeros pares es de :"+contadorPares+ "<br>");
	document.write("el promedio de los negativos es de :"+promedioNegativo+ "<br>");
	document.write("el promedio de los positivos es de :"+promedioPositivo+ "<br>");
	document.write("la diferencia entre positivos y negativos es de :"+diferenciaPositivoNegativo+ "<br>");
}
