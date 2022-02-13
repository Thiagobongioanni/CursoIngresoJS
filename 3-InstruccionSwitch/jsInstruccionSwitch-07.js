function mostrar()
{
 let ubicacionElejida;

     ubicacionElejida = document.getElementById("txtIdDestino").value;


     switch(ubicacionElejida){
           case("Cataratas"):
                alert("esta ubicado al norte del pais");
                break;

           case("Mar del plata"):
                alert("esta ubicado al este del pais");
                break;

           case("Bariloche"):
                alert("esta ubicado al oeste del pais");
                break;

            default:
                alert("esta ubicado al sur del pais");
     }

}