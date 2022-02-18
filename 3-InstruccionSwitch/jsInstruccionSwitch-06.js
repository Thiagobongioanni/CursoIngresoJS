function mostrar()
{
let horaDelDia;
let mensaje;

    horaDelDia = parseInt(document.getElementById("txtIdHora").value);


    if(horaDelDia <= 6){
         mensaje = "es de noche"
    }

     else if (horaDelDia <= 11){
        mensaje = "es de mañana";
    }

    else if(horaDelDia <= 19){
         mensaje = ("es de tarde");
    }


    else if (horaDelDia <= 24){
         mensaje = ("es de noche");
    }

    else{
        mensaje = "la hora no existe";
    }
   
    alert(mensaje);


}




// ejercicio original
 /*let horario;

     horario = parseFloat(document.getElementById("txtIdHora").value);	

     switch(horario){
     	    case 7:
     	    case 8:
     	    case 9:
     	    case 10:
     	    case 11:
     	         alert("es de mañana.");
     	         break;

     	    case 12:
     	    case 13:
     	    case 14:
     	    case 15:
     	    case 16:
     	    case 17:
     	    case 18:
     	    case 19:
     	         alert("es de tarde.");
     	         break;
     	    case 20:
     	    case 21:
     	    case 22:
     	    case 23:
     	    case 24:
     	         alert("es de noche.")
     	         break;

     	    default:
     	           alert("la hora no existe.")
     }*/
