/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
let cantidad;
let marcaLamparas;
let descuento;
let precioFinal;
let precioDescuento;
let precioTotal;
let precioImpuesto;
let totalFinalImpuesto;
let mensaje;
const PRECIO=35;
    
    cantidad = document.getElementById("txtIdCantidad").value;
    marcaLamparas = document.getElementById("Marca").value;

    switch(cantidad){
           case "6":     
           switch(marcaLamparas){ 
                  case "Osram":
                  descuento = 0.50;
                  break;
            }
    }

    switch(cantidad){   
           case "5":
           switch(marcaLamparas){
                  case "ArgentinaLuz":
                  descuento = 0.40;
                  break;

                  default:
                          descuento = 0.30;
                  break;
           }
    }
    switch(cantidad){  
           case "4":
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
    switch(cantidad){
           case "3":
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

    precioTotal = PRECIO * cantidad;
    precioDescuento = precioTotal * descuento;
    precioFinal = precioTotal - precioDescuento;

    switch(precioFinal){  
           case 120:
           case 121:
           case 122:
           case 122.5:
           case 123:  
           precioImpuesto = precioFinal * 0.10;
           totalFinalImpuesto = precioImpuesto + precioFinal;
           alert("IIBB Usted pago $"+totalFinalImpuesto);
           break;
     }

    parseFloat(document.getElementById("txtIdprecioDescuento").value = precioFinal);
}





 // switch cantidad if marca   
/*    
let cantidad;
let descuento;
let marcaLamparas;
let precioTotal;
let precioDescuento;
let precioFinal;
let precioImpuesto;
let totalFinalImpuesto;
const PRECIO=35;

      cantidad = document.getElementById("txtIdCantidad").value
      marcaLamparas = document.getElementById("Marca").value

      switch(cantidad){
             case "6":
             if(marcaLamparas == "Osram"){
                descuento = 0.50;
             }
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

      }

      precioTotal = PRECIO * cantidad;
      precioDescuento = precioTotal * descuento;
      precioFinal = precioTotal - precioDescuento;

      if(precioFinal >= 120){   
       precioImpuesto = precioFinal * 0.10;
       totalFinalImpuesto = precioImpuesto + precioFinal;
       alert("IIBB Usted pago $"+totalFinalImpuesto);
     }

      parseFloat(document.getElementById("txtIdprecioDescuento").value = precioFinal);
*/


// solo if

 /*let cantidad;
 let Descuento;
 let precioTotal;
 let marcaLamparas;
 let PRECIO = 35;
 let precioFinal;
 let precioDescuento;
 let precioImpuesto;
 let totalFinalImpuesto;
 

     cantidad = parseInt(document.getElementById("txtIdCantidad").value);
     marcaLamparas = document.getElementById("Marca").value;


     if(cantidad == 6 && marcaLamparas == "Osram"){
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
     
     precioTotal = PRECIO * cantidad;
     precioDescuento = precioTotal * Descuento;
     precioFinal = precioTotal - precioDescuento;
        
     
     if(precioFinal >= 120){   
       precioImpuesto = precioFinal * 0.10;
       totalFinalImpuesto = precioImpuesto + precioFinal;
       alert("IIBB Usted pago $"+totalFinalImpuesto);
     }
    
     document.getElementById("txtIdprecioDescuento").value = precioFinal;*/   


//if cantidad switch marca
/*
let cantidad;
let marcaLamparas;
let descuento;
let precioTotal;
let precioFinal;
let precioDescuento;
const PRECIO=35;
let totalFinalImpuesto;
let precioImpuesto;
 
    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marcaLamparas = document.getElementById("Marca").value;

    if(cantidad >= 6){
       switch(marcaLamparas){
              case "Osram":
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
    
  precioTotal = PRECIO * cantidad;
  precioDescuento = precioTotal * descuento;
  precioFinal = precioTotal - precioDescuento;

    if(precioFinal >= 120){   
       precioImpuesto = precioFinal * 0.10;
       totalFinalImpuesto = precioImpuesto + precioFinal;
       alert("IIBB Usted pago $"+totalFinalImpuesto);
   }

 parseFloat(document.getElementById("txtIdprecioDescuento").value = precioFinal);

*/
