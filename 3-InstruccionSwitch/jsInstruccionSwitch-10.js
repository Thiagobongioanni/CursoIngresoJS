function mostrar()
{
let estacionDelAnio;
let estadiaElejida;
let mensaje = "no se viaja";

    estadiaElejida = document.getElementById("txtIdDestino").value;
    estacionDelAnio = document.getElementById("txtIdEstacion").value;
    
   if (estacionDelAnio == "Invierno"){
       
       switch(estadiaElejida){  
              case("Bariloche"):
                    mensaje = "se viaja";
                    break;
       }

    }

    if (estacionDelAnio == "Verano"){

        switch(estadiaElejida){
               case("Mar del plata"):
               case("Cataratas"):
                     mensaje = "se viaja";
                     break;    
        }
    }

    if (estadiaElejida != "Bariloche"){

        switch(estacionDelAnio){
               case("Primavera"):
                    mensaje = " se viaja";
                    break;      
        }

    }

    switch(estacionDelAnio){
           case("Otoño"):
                mensaje = "se viaja";
                break;
    }

    alert(mensaje);
   
}