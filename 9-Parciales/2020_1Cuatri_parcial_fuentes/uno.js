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
 let precioMinimo=0;
 let fabricantesA=0;
 let alcoholBarato=301;
 let maximoUnidad=0;
 let precioMaxUnidad=0;
 let cantidadAlcohol=0;
 let acumJ=0;
 let mensajeA;
 let mensajeB;
 let mensajeC;
 
     for(let i=0; i<5; i++){
         producto = prompt("ingrese el  producto");  
         while(producto != "barbijo" && producto != "jabon" && producto != "alcohol"){
        	producto = prompt("ingrese un producto valido");
         }

          precio = parseFloat(prompt("ingrese un precio entre 100 y 300"));
          while(precio > 300 || precio < 100 || isNaN(precio)==true){
                  precio = prompt("ingrese un precio valido");

          }

          unidades = parseInt(prompt("ingrese cuantas unidades son"));

          while(unidades <= 0 || unidades >=1000 || isNaN(unidades)==true){
                unidades("ingrese una cantidad valida entre 1 y 1000")
          }
        
          marca = prompt("ingrese la marca");
          fabricante = prompt("ingrese el fabricante");

          if(producto == "alcohol" && precio < alcoholBarato){   
           	 cantidadAlcohol = unidades;
           	 alcoholBarato = precio;
           	 fabricantesA = fabricante;  
             
          }

          else if(producto == "jabon"){
        	      acumJ=acumJ+unidades;
          }

          if(maximoUnidad<unidades){
        	 maximoUnidad = unidades;
        	 precioMaxUnidad = precio;
          }
      }
    mensajeA = "hay "+cantidadAlcohol+" unidades del alcohol mas barato y el fabricante es "+fabricantesA;
    mensajeB = "el producto con mas unidades es "+maximoUnidad+" y su precio es de"+precioMaxUnidad;
    mensajeC = "los jabones son en total "+acumJ;

    alert(mensajeA);
    alert(mensajeB);
    alert(mensajeC);
}
