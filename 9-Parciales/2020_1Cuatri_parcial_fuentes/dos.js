function mostrar()
{
 let tipoDeProducto;
 let acumCemento;
 let precioCemento;
 let acumCal;
 let precioCal;
 let acumArena;
 let cantidadBolsas;
 let precioIngresado;
 let descuento;
 let precioFinal;
 let respuesta="s";
 let maximoUnidad;   
 let mensaje;
 let mensaje2;

     while(respuesta == "s"){
           tipoDeProducto = prompt("ingrese el producto");
           while(tipoDeProducto != "cal" && tipoDeProducto != "arena" && tipoDeProducto != "cemento" ){
                 tipoDeProducto = prompt("ingrese un producto valido");
           }

           cantidadBolsas = prompt("ingrese una cantidad de bolsas");
           while(cantidadBolsas < 0 || isNaN(cantidadBolsas)== true){
                 cantidadBolsas = prompt("ingrese una cantidad valida");
           }
           
           precioIngresado = prompt("ingrese el precio");
           while(precioIngresado < 0 || isNaN(precioIngresado)== true){
                precioIngresado = prompt("ingrese un precio valido");
           }

           if(cantidadBolsas > 10){
              descuento = 0.15;
           }

           if(cantidadBolsas > 30){
              descuento = 0.25;
           }

           switch(tipoDeProducto){
                case "cemento":
                  acumCemento = acumCemento + cantidadBolsas;
                  precioCemento = precioIngresado * cantidadBolsas;
                  break;
                case "cal":
                  acumCal = acumCal + cantidadBolsas;
                  precioCal = precioIngresado * cantidadBolsas;
                  break;
                  case "arena":
           }
           
           respuesta = prompt("quiere ingresar mas datos? s/n");    
     }

     precioBruto = precioIngresado * cantidadBolsas;

     if(descuento != 0){
        alert("el total bruto es de "+precioBruto);
     }


     precioFinal = precioIngresado * cantidadBolsas;
     descuento = precioFinal * descuento;
     precioFinal = precioFinal - descuento;
     
     mensaje = " el total final con descuento es de "+precioFinal;
     mensaje2 = "el producto con mas unidades es "+maximoUnidad

     alert(mensaje);
     alert(mensaje2);
     
}
