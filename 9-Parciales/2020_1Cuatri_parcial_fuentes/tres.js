function mostrar()
/*{//terminado
let nombreIngresado;
let edadIngresada;
let sexoIngresado;
let estadoCivil;
let temperaturaCorporal;
let respuesta="s";
let bandera=1;
let mayorTemp;
let nombreMayTemp;
let contadorViudos=0;
let contadorSolterosViudos=0;
let contadorMayores=0;
let contadorHombresSolteros=0;
let acumEdad=0;
let promedio;

    while(respuesta == "s"){  
    	  nombreIngresado = prompt("ingrese su nombre");
          while(isNaN(nombreIngresado)==false){
                nombreIngresado = prompt("ingrese un nombre valido");
          }

    	 edadIngresada = parseInt(prompt("ingrese su edad"));
	     while(isNaN(edadIngresada)== true){
	           edadIngresada = parseFloat(prompt("ingrese una edad valida"));
	     }

	     sexoIngresado = prompt("ingrese su sexo/genero");
	     while(sexoIngresado != "f" && sexoIngresado != "m"){
	           sexoIngresado = prompt("ingrese un sexo valido entre f/m");
	     }

	     estadoCivil = prompt("ingrese su estado civil");
	     while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo"){
	           estadoCivil = prompt("ingrese un estado civil valido entre: soltero/viudo/casado");
         }

         temperaturaCorporal = parseFloat(prompt("ingrese su temperatura"));
         while(temperaturaCorporal >= "45" || temperaturaCorporal <= "20"){
         	   temperaturaCorporal = parseFloat(prompt("ingrese una temperatura valida entre 20 y 45"));
         }

        respuesta = prompt("quiere ingresar mas datos? s/n");
        
        if(bandera == 1 || temperaturaCorporal > mayorTemp){
           mayorTemp = temperaturaCorporal;
           nombreMayTemp = nombreIngresado;
           bandera = 0;
        }

        if(estadoCivil == "viudo" && edadIngresada >= 18){
           contadorViudos++;
        }

        if(sexoIngresado == "m" && estadoCivil != "casado"){
           contadorSolterosViudos++;
        } 

        if(edadIngresada > 60 && temperaturaCorporal > 38){
           contadorMayores++;
        }

        if(sexoIngresado == "m" && estadoCivil == "soltero"){
           acumEdad = acumEdad + edadIngresada;
           contadorHombresSolteros++;
        }

    }
     
     promedio = acumEdad / contadorHombresSolteros; 
     
     alert("el nombre de la persona con mas temperatura es: "+nombreMayTemp);
     alert("la cantidad de mayores de edad viudos es de: "+contadorViudos);
     alert("la cantidad de hombres que hay solteros o viudos es de: "+contadorSolterosViudos);
     alert("la cantidad de personas mayores con mas de 38° de temperatura es de: "+contadorMayores);
     alert("el promedio de edad entre los hombres solteros es de: "+promedio);
}*/

{
let	nombreAlumno;
let carrera;
let estadoCarrera;
let sexoIngresado;
let edad;
let nota;
let contAlumnosP=0;
let contAlumnosPsi=0;
let contDG=0;
let contMujeresEnP=0;
let contNoBinario=0;
let notasFinalizantes;
let acumNotas=0;
let respuesta="s";
let nombreDelMasViejoPsi;
let generoDelMasViejoPsi;
let edadDelMasViejoPsi;
let bandera=true;
let nombreMejorNotaPsiNb;
let mejorNotaPsiNb;
let estadoCarreraNbPsi;
let contNotasFinalizantes=0;


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

         edad = parseInt(prompt("ingrese su edad"));
         while(isNaN(edad)==true){
         	   edad = prompt("ingrese una edad valida");
         }

         nota = parseInt(prompt("ingrese su nota"));
         while(isNaN(nota)==true && nota < 0 && nota >10){
         	   nota = prompt("ingrese una nota valida");
         }

         switch(carrera){
         	    case "programacion":
         	          contAlumnosP++;
         	          if(sexoIngresado == "femenino"){
         	          	 contMujeresEnP++
         	          }
         	          break;

         	    case "psicologia":
         	          contAlumnosPsi++;
         	          break;

         	    case "diseño grafico":
         	          contDG++;
         	          break;

         	    if(sexoIngresado == "nobinario"){
         	       contNoBinario++;
                }

                if(estadoCarrera == "finalizado"){
                   acumNotas = acumNotas + nota;
                   contNotasFinalizantes++;
                }
                if(edadDelMasViejoPsi < edad || bandera == true){
                   edadDelMasViejoPsi = edad;
                   nombreDelMasViejoPsi = nombreAlumno;
                   generoDelMasViejoPsi = sexoIngresado;
                   bandera=false
                }

                if(sexoIngresado == "nobinario" && nota > mejorNotaPsiNb){
                   nombreMejorNotaPsiNb = nombreAlumno;
                   mejorNotaPsiNb = nota;
                   estadoCarreraNbPsi = estadoCarrera;
                }
          }

         respuesta = prompt("quiere ingresar mas datos? s/n");
    } 
 
   document.write("la cantidad de alumnos de programacion es de: "+contAlumnosP+" de psicologia son: "+contAlumnosPsi+" y en diseño grafico son: "+contDG+ "<br>");
   document.write()
   document.write()
   document.write()
   document.write()
   document.write()
   document.write()

}

/*{
let ingresoMascota;
let razaP;
let razaG
let Pajaro;
let otros;
let i;

    for(i=0;i<10;i++)
        ingresoMascota = prompt("ingrese su mascota");
        while(ingresoMascota != "gato" && ingresoMascota !="perro" && ingresoMascota != "pájaro" && ingresoMascota != "otros"){
        	  ingresoMascota = prompt("ingrese una mascota valida");
        }
        razaP = prompt("ingrese la raza del perro");
        while(razaP != "pastor" && razaP != "toy" && razaP != "callejero"){
        	  razaP = prompt("ingrese una raza valida");
        }
        
        razaG = prompt("ingrese la raza del gato");
        while(razaG != "siames" && razaG != "turco" && razaG != "peterbald" && razaG != "generico"){
        	  razaG = prompt("ingrese una raza valida");
        }                      	      

}*/