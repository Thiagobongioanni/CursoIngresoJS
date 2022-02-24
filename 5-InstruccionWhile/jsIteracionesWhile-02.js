/*Ingresar 5 números, y determinar la cantidad de números que son mayores que 10 y menores 20 
(inclusive en ambos casos)(VALIDAR) Mostrar por console.log*/
function mostrar()
{
 let numerosIngresados;
 let acum=0;
 let mayoresADiez=0;
 let menoresAVeinte=0;
 
     while(acum < 5){
    	   numerosIngresados = parseInt(prompt("ingrese un numero"));
    	   acum++;

           while(isNaN(numerosIngresados) == true){
    	         numerosIngresados = parseInt(prompt("error ingrese un numero"));
           }

           if(numerosIngresados < 20){
           	  menoresAVeinte++;          	  
           } 

           if(numerosIngresados > 10){
           	  mayoresADiez++
           }  
      } 

  console.log("la cantidad de numeros menores a 20 es de: "
  +menoresAVeinte+" y la cantidad de numeros mayores a diez es de: "+mayoresADiez);     
  
}








/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
/*let i=11;
	
	
	while(i > 1){  
	i = i  -1;
	alert(i);
    }*/
