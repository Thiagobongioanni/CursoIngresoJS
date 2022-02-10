function mostrar()
{

let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

    if(edad >=18 ){
    	alert("usted es mayor de edad");
    }
   
   else
   	  if(edad <=12 ) {
   		alert("usted es un niño");
      }
    
    else {
    	alert("usted es un adolscente");
     }


}