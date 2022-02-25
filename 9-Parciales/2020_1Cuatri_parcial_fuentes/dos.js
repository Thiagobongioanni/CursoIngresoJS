function mostrar()
{
 let tipoDeProducto;
 let cantidadBolsas;
 let precioIngresado;
 let descuento;
 let precioFinal;
 let respuesta="s";   
 let mensaje;

     while(respuesta == "s"){
           tipoDeProducto = prompt("ingrese el producto");

           if(tipoDeProducto != "cal" && tipoDeProducto != "arena" && tipoDeProducto != "cemento" ){
              tipoDeProducto = prompt("ingrese un producto valido");
           }

           cantidadBolsas = prompt("ingrese una cantidad de bolsas");

           if(cantidadBolsas < 0){
              cantidadBolsas = prompt("ingrese una cantidad valida");
           }
           
           precioIngresado = prompt("ingrese el precio");

           if(precioIngresado < 0){
              precioIngresado = prompt("ingrese un precio valido");
           }

           if(cantidadBolsas > 10){
              descuento = 0.15;
           }

           if(cantidadBolsas > 30){
              descuento = 0.25;
           }
           
           
      respuesta = prompt("quiere ingresar mas datos? s/n");    
     }

     precioFinal = precioIngresado * cantidadBolsas;
     descuento = precioFinal * descuento;
     precioFinal = precioFinal - descuento;

     precioBruto = precioIngresado * cantidadBolsas;

     mensaje = "el precio bruto es de "+precioBruto+"\n y el total final con descuento es de "+precioFinal;

     alert(mensaje);
     
}
