function mostrar()
{
let estacionDelAnio;
let estadiaElejida;

    estadiaElejida = document.getElementById("txtIdDestino").value;
    estacionDelAnio = document.getElementById("txtIdEstacion").value;
    
   if (estacionDelAnio == "Invierno"){
       
       switch(estadiaElejida){  
              case("Bariloche"):
                    alert("se viaja");
                    break;
       default:
                 alert("no se viaja");
                 break;

       }

    }

    if (estacionDelAnio == "Verano"){

        switch(estadiaElejida){
               case("Mar del plata"):
               case("Cataratas"):
                     alert("se viaja");
                     break;
        default:
                     alert("no se viaja");
        }
    }

    if (estacionDelAnio == "Primavera"){

        switch(estadiaElejida){
               case("Bariloche"):
                    alert("no se viaja");
                    break;
        default:
                    alert("se viaja");
                    break;
        }

    }

    switch(estacionDelAnio){
           case("Otoño"):
                alert("se viaja");
                break;
    }
   
}