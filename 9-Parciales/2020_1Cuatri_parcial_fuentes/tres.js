function mostrar()
/*{
let nombreIngresado;
let edadIngresada;
let sexoIngresado;
let estadoCivil;
let temperaturaCorporal;
let respuesta="s";
let bandera=1;
let mayorTemp;
let nombreMayTemp;
let contadorSolterosViudos;
let contadorMayores;
let contadorHombresSolteros;
let acumEdad;

    while(respuesta == "s"){  
    	  nombreIngresado = prompt("ingrese su nombre");

    	 edadIngresada = prompt("ingrese su edad");
	     while(isNaN(edadIngresada)== true){
	           edadIngresada = prompt("ingrese una edad valida");
	     }

	     sexoIngresado = prompt("ingrese su sexo/genero");
	     while(sexoIngresado != "f" && sexoIngresado != "m"){
	           sexoIngresado = prompt("ingrese un sexo valido entre f/m");
	     }

	     estadoCivil = prompt("ingrese su estado civil");
	     while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo"){
	           estadoCivil = prompt("ingrese un estado civil valido entre: soltero/viudo/casado");
         }

         temperaturaCorporal = prompt("ingrese su temperatura");
         while(temperaturaCorporal >= "45" || temperaturaCorporal <= "20"){
         	   temperaturaCorporal = prompt("ingrese una temperatura valida");
         }

        respuesta = prompt("quiere ingresar mas datos? s/n");
        
        if(bandera == 1 || temperaturaCorporal > mayorTemp){
           mayorTemp = temperaturaCorporal;
           nombreMayTemp = nombreIngresado;
           bandera = 0;
        }

        if(estadoCivil == "viudo" && edadIngresada > 18){
           contadorViudos++
        }

        if(sexoIngresado == "m" && estadoCivil != "casado"){
           contadorSolterosViudos++
        } 

        if(edadIngresada > 60 && temperaturaCorporal > 38){
           contadorMayores++;
        }

        if(estadoCivil == "soltero" && sexoIngresado == "m"){
           acumEdad=acumEdad + edadIngresada
           contadorHombresSolteros++;

        }

    }

     promedio = acumEdad / contadorHombresSolteros; 
     
     alert(""+nombreMayTemp);
     alert(""+contadorViudos);
     alert(""+contadorSolterosViudos);
     alert(""+contadorMayores);
     alert(""+promedio);
}*/

/*terminarlo{
let	nombreAlumno;
let carrera;
let estadoCarrera;
let sexoIngresado;
let edad;
let nota;
let contAlumnosP;
let contAlumnosPsi;
let contMujeresEnP;
let contNoBinario;
let notasFinalizantes;
let respuesta="s";


    while(respuesta == "s"){
    	 nombreAlumno = prompt("ingrese su nombre");

    	 carrera = prompt("ingrese la carrera");
         while(carrera != "programacion" && carrera != "psicologia"  && carrera != "diseño grafico"){
         	   carrera = prompt("ingrese una carrera valida");
         }

         estadoCarrera = prompt("ingrese el estado de su carrera");
         while(estadoCarrera != "en curso" && estadoCarrera != "abandono" && estadoCarrera != "finalizado"){
               estadoCarrera = prompt("ingrese un estado de carrera valido");
         }

         sexoIngresado = prompt("ingrese su sexo");
         while(sexoIngresado != "masculino" && sexoIngresado != "femenino" && sexoIngresado != "nobinario"){
         	   sexoIngresado = prompt("ingrese un sexo valido");
         }

         edad = prompt("ingrese su edad");
         while(isNaN(edad)==true){
         	   edad = prompt("ingrese una edad valida");
         }

         nota = prompt("ingrese su nota");
         while(isNaN(nota)==true && nota < 0 && nota >10){
         	   nota = prompt("ingrese una nota valida");
         }

         switch(carrera){
         	    case "programacion":
         	          contAlumnosP++
         	          if(sexoIngresado == "femenino"){
         	          	 contMujeresEnP++
         	          }
         	          break;

         	    case "psicologia":
         	          contAlumnosPsi:
         	          break;

         	    case "diseño grafico":
         	          contDG++
         	          break;

         	    if(sexoIngresado == "nobinario"){
         	       contNoBinario++;
                }

                if(){
                  notasFinalizantes++
                }
          }

         respuesta = prompt("quiere ingresar mas datos? s/n");
    }       

}*/

{
let ingresoMascota;
let i;

    for(i=0;i<10;i++)
    ingresoMascota = prompt("ingrese su mascota");
}