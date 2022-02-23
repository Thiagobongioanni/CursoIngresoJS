function mostrar()
{
let numeroIngresado1;
let numeroIngresado2;
let resta;
let suma;
let mensaje;

    numeroIngresado1 = parseFloat(prompt("ingrese un numero"));
    numeroIngresado2 = parseFloat(prompt("ingrese un segundo numero"));
  

    if(numeroIngresado1 == numeroIngresado2){
       mensaje = +numeroIngresado1+" "+numeroIngresado2;
    }

    else if(numeroIngresado1 > numeroIngresado2){
    	    resta = numeroIngresado1 - numeroIngresado2;
    	    mensaje = +resta;
    }

    else if(numeroIngresado1 < numeroIngresado2){
    	    suma = numeroIngresado1 + numeroIngresado2;
    	    mensaje = +suma;
    }

    alert(mensaje); 

    if(suma > "10"){
       alert("la suma es "+suma+" y supero el 10");    
    }
}
