/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. */


function CalcularPrecio () 
{
// solo if
/*
 let cantidad;
 let Descuento=0;
 let marcaLamparas;
 let PRECIO = 35;
 let precioFinal;
 let totalFinalImpuesto;
 

     cantidad = parseInt(document.getElementById("txtIdCantidad").value);
     marcaLamparas = document.getElementById("Marca").value;


     if(cantidad >= 6){
        Descuento = 0.50;   
      }

     else if(cantidad == 5 && marcaLamparas == "ArgentinaLuz"){
             Descuento =  0.40; 
     }

     else if(cantidad == 5 && marcaLamparas  != "ArgentinaLuz"){
             Descuento =  0.30;  
     }

     else if (cantidad == 4 && marcaLamparas == "ArgentinaLuz"){
              Descuento =  0.25;
            
     }

     else if (cantidad == 4 && marcaLamparas == "FelipeLamparas"){
              Descuento = 0.25;         
     }

     else if (cantidad == 4 && marcaLamparas != "ArgentinaLuz"){
              Descuento =  0.20;
            
     }

     else if (cantidad == 4 && marcaLamparas != "FelipeLamparas"){
              Descuento = 0.20;           
     }

     else if (cantidad == 3 && marcaLamparas == "ArgentinaLuz"){
              Descuento = 0.15;          
     }

     else if (cantidad == 3 && marcaLamparas == "FelipeLamparas"){
              Descuento =  0.10;
     }

     else if (cantidad == 3 && marcaLamparas != "ArgentinaLuz"){
              Descuento = 0.05;        
     }

     else if (cantidad == 3 && marcaLamparas != "FelipeLamparas"){
              Descuento = 0.05;
     } 
     
     precioFinal = PRECIO * cantidad;
     Descuento = precioFinal * Descuento;
     precioFinal = precioFinal - Descuento;
        
     
     if(precioFinal >= 120){   
       totalFinalImpuesto = precioFinal * 0.10;
       totalFinalImpuesto = totalFinalImpuesto + precioFinal;
       alert("IIBB Usted pago $"+totalFinalImpuesto);
     }
    
     document.getElementById("txtIdprecioDescuento").value = precioFinal;
*/




//switch cantidad if marca
/*let cantidad;
let descuento=0;
let marcaLamparas;
let precioFinal;
let totalFinalImpuesto;
const PRECIO=35;

      cantidad = document.getElementById("txtIdCantidad").value
      marcaLamparas = document.getElementById("Marca").value

      switch(cantidad){
             default:
                    descuento = 0.50;                  
             break;

             case "5":
             if(marcaLamparas == "ArgentinaLuz"){
                descuento = 0.40;
             }
             else{
                  descuento = 0.30;
             }
             break;

             case "4":
             if(marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas"){
                descuento = 0.25;
             }
             else{
                  descuento = 0.20;
             }
             break;

             case "3":
             if(marcaLamparas == "ArgentinaLuz"){
                descuento = 0.15;
             }

             else if(marcaLamparas == "FelipeLamparas"){
                     descuento = 0.10;
             }

             else{
                  descuento = 0.05;
             }
             break; 

             case "2":
             case "1":
             if(marcaLamparas == "Osram" || marcaLamparas != "Osram"){
                descuento = 0.00
             }
             break;
                                
        }    

      precioFinal = PRECIO * cantidad;
      descuento = precioFinal * descuento;
      precioFinal = precioFinal - descuento;

      if(precioFinal >= 120){   
         totalFinalImpuesto = precioFinal * 0.10;
         totalFinalImpuesto = totalFinalImpuesto + precioFinal;
         alert("IIBB Usted pago $"+totalFinalImpuesto);
      }

      parseFloat(document.getElementById("txtIdprecioDescuento").value = precioFinal);
*/

/*
    // solo switch
let cantidad;
let marcaLamparas;
let descuento=0;
let precioFinal;
let totalFinalImpuesto;
const PRECIO=35;
    
    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marcaLamparas = document.getElementById("Marca").value;

    switch(cantidad){
           case (1):
           case (2):
           switch(marcaLamparas){
                  case "ArgentinaLuz":
                  case "FelipeLamparas":
                  case "JeLuz":
                  case "HazIluminacion":
                  case "Osram":
                  descuento = 0.00;
           }
           break;

           case(3):
           switch(marcaLamparas){
                  case "ArgentinaLuz":
                  descuento = 0.15;
                  break;

                  case "FelipeLamparas":
                  descuento = 0.10;
                  break;

                  case "JeLuz":
                  case "HazIluminacion":
                  case "Osram":
                  descuento = 0.05;
                  break
           }
           break;

           case (4):
           switch(marcaLamparas){
                  case "ArgentinaLuz":
                  case "FelipeLamparas":
                  descuento = 0.25;
                  break;
            
                  case "JeLuz":
                  case "HazIluminacion":
                  case "Osram":
                  descuento = 0.20;
                  break;
           }
           break;     

           case (5):
           switch(marcaLamparas){
                  case "ArgentinaLuz":
                  descuento = 0.40;
                  break;

                  case "FelipeLamparas":
                  case "JeLuz":
                  case "HazIluminacion":
                  case "Osram":
                  descuento = 0.30;
                  break;
            }
            break;

            default:
                    descuento = 0.50;
                    break;
           
    } 

    precioFinal = PRECIO * cantidad;
    descuento = precioFinal * descuento;
    precioFinal = precioFinal - descuento;    
    
    switch(precioFinal){

//no se me ocurre otra manera ya que si declaro un default me hace el calculo siempre
           case 120:
           case 121:
           case 122:
           case 122.5:
           case 140:
           case 157.5:
           case 175:

           totalFinalImpuesto = precioFinal * 0.10;
           totalFinalImpuesto = totalFinalImpuesto + precioFinal;
           alert("IIBB Usted pago $"+totalFinalImpuesto);
           break;
     }

   parseFloat(document.getElementById("txtIdprecioDescuento").value = precioFinal); */


// if cantidad switch marca

let cantidad;
let marcaLamparas;
let descuento=0;
let precioFinal;
const PRECIO=35;
let totalFinalImpuesto;

 
    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marcaLamparas = document.getElementById("Marca").value;

    if(cantidad >= 6){
       switch(marcaLamparas){
              case "Osram":
              case "FelipeLamparas":
              case "JeLuz":
              case "HazIluminacion":
              case "ArgentinaLuz":
              descuento = 0.50;
              break;
       }
    }
    
    else if(cantidad == 5){
            switch(marcaLamparas){
                   case "ArgentinaLuz":  
                   descuento = 0.40;
                   break;
                   default:
                   descuento = 0.30;
                   break;     
            }

    } 

    else if(cantidad == 4){
            switch(marcaLamparas){
                   case "ArgentinaLuz":
                   case "FelipeLamparas":
                   descuento = 0.25;
                   break;
                   default:
                          descuento = 0.20;
                          break;
            }
    }

    else if(cantidad == 3){
       switch(marcaLamparas){
              case "ArgentinaLuz":
              descuento = 0.15; 
              break;

              case "FelipeLamparas":
              descuento = 0.10;
              break;

              default:
                     descuento = 0.05;
              break;
            }
    }
    
 precioFinal = PRECIO * cantidad;
  descuento = precioFinal * descuento;
  precioFinal = precioFinal - descuento;

    if(precioFinal >= 120){   
       totalFinalImpuesto = precioFinal * 0.10;
       totalFinalImpuesto = totalFinalImpuesto + precioFinal;
       alert("IIBB Usted pago $"+totalFinalImpuesto);
   }

 parseFloat(document.getElementById("txtIdprecioDescuento").value = precioFinal);
}