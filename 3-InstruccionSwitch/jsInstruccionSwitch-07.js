function mostrar()
{
 let ubicacionElejida;
 let mensaje;

     ubicacionElejida = document.getElementById("txtIdDestino").value;


     switch(ubicacionElejida){
           case("Cataratas"):
                mensaje = "esta ubicado al norte del pais" ;
                break;

           case("Mar del plata"):
                mensaje = "esta ubicado al este del pais";
                break;

           case("Bariloche"):
                mensaje = "esta ubicado al oeste del pais";
                break;

            default:
                mensaje = "esta ubicado al sur del pais";
     }
     alert(mensaje);

}