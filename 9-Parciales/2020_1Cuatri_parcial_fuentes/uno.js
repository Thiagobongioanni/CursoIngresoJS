/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/
function mostrar()
{
 let producto;
 let unidades=1;
 let marca;
 let fabricante;
 let precio;
 let menPrecioA=999;
 let minFabricantesA;
 let minUnidadesA;
 let maximoUni=999;
 let precioMaxUni;
 let minPrecio;
 let acumJ=0;
 let i;
 let mensajeA;
 let mensajeB;
 let mensajeC;
 
     for(i=0; i<5; i++){
         producto = prompt("ingrese el  producto");  
         while(producto != "barbijo" && producto != "jabon" && producto != "alcohol"){
        	producto = prompt("ingrese un producto valido");
         }

          precio = parseInt(prompt("ingrese un precio entre 100 y 300"));
          while(precio > 300 || precio < 100 || isNaN(precio)==true){
                  precio = prompt("ingrese un precio valido");

          }

          unidades = prompt("ingrese cuantas unidades son");
          while(unidades <= 0 || unidades >=1000){
                unidades("ingrese una cantidad valida entre 1 y 1000")
          }
        
          marca = prompt("ingrese la marca");
          fabricante = prompt("ingrese el fabricante");

          if(producto == "alcohol"){
             if(precio<minPrecio){
           	    menPrecioA = precio;
           	    minUnidadesA = unidades;
           	    minFabricantesA = fabricante;
             }
          }
          else if(producto == "jabon"){
        	      acumJ=acumJ+unidades;
          }

          if(maximoUni<unidades){
        	 maximoUni = unidades;
        	 precioMaxUni = precio;
          }
    }
    mensajeA = "hay "+minUnidadesA +" del alcohol mas barato y el fabricante es "+minFabricantesA;
    mensajeB = "el producto con mas unidades es "+maximoUni;
    mensajeC = "los jabones son en total "+acumJ;

    alert(mensajeA);
    alert(mensajeB);
    alert(mensajeC);
}
