function mostrar()
{

let destino;
let estacion;
const PRECIO = 15000;
let aumento=0; 
let descuento=0;
let precioFinal;

destino = document.getElementById("txtIdDestino").value;
estacion = document.getElementById("txtIdEstacion").value;

switch(estacion){
    case "Invierno":
          if(destino == "Bariloche"){
            aumento = 20;
          }
          else if(destino == "Mar del plata"){
            descuento = 20;
          }
          else{
            descuento = 10;
          }
          break;

   
    case "Verano":
          if(destino == "Cataratas" || destino == "Cordoba"){
             aumento = 10;
          }
          else if (destino == "Bariloche"){
                   descuento = 20;

          }
          else{
              aumento = 20;
          }
          break;
        
    case "Otoño":
    case "Primavera":
          if(destino != "Cordoba"){
             aumento = 10;
          }
          break;
    }

    if(aumento != 0){
        precioFinal = PRECIO + PRECIO * aumento/100;
    }
    else if(descuento != 0){
        precioFinal = PRECIO - PRECIO * descuento/100;
    }

    else{
        precioFinal = PRECIO;
    }

    alert ("EL precio final es: " + precioFinal);

              
    
                	   
}