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
 let calculoDescuento;
 let precioDescontado;
 let marcaLamparas;
 let Precio = 35;
 





    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marcaLamparas = document.getElementById("Marca").value;

    if(cantidad >= 6 && marcaLamparas == "Osram"){
       calculoDescuento = Precio * -0.50;
       precioDescontado = calculoDescuento + Precio;
       }

   else if(cantidad == 5 && marcaLamparas == "ArgentinaLuz"){
        calculoDescuento = Precio * -0.40;
        precioDescontado = calculoDescuento + Precio;
    }

    else if(cantidad == 5 && marcaLamparas  != "ArgentinaLuz"){
        calculoDescuento = Precio * -0.30;
        precioDescontado = calculoDescuento + Precio;
    }

    else if (cantidad == 4 && marcaLamparas == "ArgentinaLuz"){
             calculoDescuento = Precio * -0.25;
             precioDescontado = calculoDescuento + Precio;

    }

    else if (cantidad == 4 && marcaLamparas == "FelipeLamparas"){
             calculoDescuento = Precio * -0.25;
             precioDescontado = calculoDescuento + Precio;
    }

    else if (cantidad == 4 && marcaLamparas != "ArgentinaLuz"){
             calculoDescuento = Precio * -0.20;
             precioDescontado = calculoDescuento + Precio;

    }

    else if (cantidad == 4 && marcaLamparas != "FelipeLamparas"){
             calculoDescuento = Precio * -0.20;
             precioDescontado = calculoDescuento + Precio;
    }

    else if (cantidad == 3 && marcaLamparas == "ArgentinaLuz"){
             calculoDescuento = Precio * -0.15;
             precioDescontado = calculoDescuento + Precio;
    }

    else if (cantidad == 3 && marcaLamparas == "FelipeLamparas"){
             calculoDescuento = Precio * -0.10;
             precioDescontado = calculoDescuento + Precio;
    }

    else if (cantidad == 3 && marcaLamparas != "ArgentinaLuz"){
             calculoDescuento = Precio * -0.05;
             precioDescontado = calculoDescuento + Precio;
    }

    else if (cantidad == 3 && marcaLamparas != "FelipeLamparas"){
             calculoDescuento = Precio * -0,5;
             precioDescontado = calculoDescuento + Precio;
    }

    
        document.getElementById("txtIdprecioDescuento").value = precioDescontado;
    
}
