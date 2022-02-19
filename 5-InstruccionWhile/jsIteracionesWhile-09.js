/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
let numeroIngresado;
let bandera=1;
let minimo;
let maximo;
let respuesta;
    
    do{
       numeroIngresado = parseFloat(prompt("ingrese un numero"));

       while(isNaN(numeroIngresado) == true){
            numeroIngresado = parseFloat(prompt("error ingrese un numero"));
       }

       if(bandera == 1 || numeroIngresado < minimo){
       	  minimo = numeroIngresado;
       }

       if(bandera == 1 || numeroIngresado > maximo){
       	      maximo = numeroIngresado;
       	      bandera = 0;
       }

       respuesta = prompt("quiere ingresar otro numero? si/no");

    }while(respuesta == "si");

    parseFloat(document.getElementById("txtIdMinimo").value = minimo);
    parseFloat(document.getElementById("txtIdMaximo").value = maximo);
}



// estilo while

/*let numeroIngresado;
let maximo;
let minimo;
let respuesta;


    numeroIngresado = parseFloat(prompt("ingrese un numero"));
    

    while(isNaN(numeroIngresado) == true){
          numeroIngresado = parseFloat(prompt("error ingrese un numero"));            
    }

    minimo = numeroIngresado;
    maximo = numeroIngresado;   
    respuesta = prompt("quiere ingresar otro si/no"); 

    while(respuesta == "si"){
    	  numeroIngresado = parseFloat(prompt("ingrese un numero"));  	  
          while(isNaN(numeroIngresado) == true){
                numeroIngresado = parseFloat(prompt("error ingrese un numero"));            
          }

          if(numeroIngresado > maximo){
          	 maximo = numeroIngresado;
          }

          else if (numeroIngresado < minimo){
          	      minimo = numeroIngresado;
          }

          respuesta = (prompt("quiere ingresar otro si/no"));
    }


   parseFloat(document.getElementById("txtIdMaximo").value = maximo);
   parseFloat(document.getElementById("txtIdMinimo").value = minimo);*/
