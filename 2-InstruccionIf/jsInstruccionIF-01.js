/*En el IF 1. ingresar el nombre y los datos requeridos para calcular el IMC, e informar a la persona si es: Bajo peso <18.5; 
Peso normal 18,5-24.9; Pre Obesidad 25-26.9; Obesidad I 27-29.9; Obesidad II 30-34.9; Obesidad III >40*/

//thiago bongioanni ejercicio extra  en el if 1
function mostrar()
{ 
let edad;

    edad = parseInt(document.getElementById("txtIdEdad").value);

    if( edad == 15 ){ 

    alert("niña bonita");
    }
}













//extra


/*let altura;
let peso;
let imc;
let mensaje;


    altura = parseFloat(prompt("ingrese su altura en metros"));
    peso = parseFloat(prompt("ingrese su peso en kilos"));
     
    altura = altura * altura;
    imc = peso/altura; 

    if(imc <= 18.5){
       mensaje = "es bajo peso"
    }

    else if(imc <= 24.9){
            mensaje = "es un peso normal"
    }

    else if(imc <= 26.9){
           mensaje = "es Pre obesidad"
    }

    else if(imc <= 29.9){
           mensaje = "es obesidad I"
    }

    else if(imc <= 34.9){
           mensaje = "es obesidad II"
    }

    else if(imc >= 40){
           mensaje = "es obesidad III"
    }

   alert(mensaje);*/


/*let distancia;
let tiempo;
let kilometrosPorHora;
let mensaje;

    distancia = parseFloat(prompt("ingrese la distancia que viajo"));
    tiempo = parseFloat(prompt("ingrese el tiempo que tardo"));

    kilometrosPorHora = distancia/tiempo;


    if(kilometrosPorHora <= 60){
        mensaje = "es muy lento";
    }

    else if(kilometrosPorHora <= 80){
            mensaje = "es lento"
    }

    else if(kilometrosPorHora <= 100){
           mensaje = "es un buen ritmo";
    }

    else if(kilometrosPorHora <=120){
           mensaje = "ahí de la ley"
    }

    else if (kilometrosPorHora >=121){
        mensaje = "eso no se hace"
    }

    alert(mensaje);*/
