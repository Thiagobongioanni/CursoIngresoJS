/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
let numero;
let numerosIngresados;
let respuesta="s";
let acum=0;
let promedio;
let i=0;

       

 while(respuesta == "s"){
     numero = parseInt(prompt("ingrese un numero"));
     acum = acum + numero;
     i++;
     numerosIngresados = i;
     respuesta = prompt("ingresa otro? s/n");
 }



 promedio = acum/numerosIngresados;

 parseInt(document.getElementById("txtIdPromedio").value = promedio);
 parseInt(document.getElementById("txtIdSuma").value = acum);
}  