function mostrar()
{
 let numero;
 let acum=0;
 let promedio;
 let i=0;

 
   while(i < 5){
     numero = parseInt(prompt("ingrese un numero"))
     acum = acum + numero;
     i++;
   }

    promedio = acum/5;
	
	parseInt(document.getElementById("txtIdSuma").value = acum);
   parseInt(document.getElementById("txtIdPromedio").value = promedio);
}