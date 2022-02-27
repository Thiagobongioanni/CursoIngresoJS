function mostrar()
/*{//terminado original
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


//terminado simil 2
/*{
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
let acumNotas=0;
let respuesta="s";
let nombreDelMasViejoPsi;
let generoDelMasViejoPsi;
let edadDelMasViejoPsi;
let bandera=true;
let bandera2=true;
let nombreMejorNotaPsiNb;
let mejorNotaPsiNb;
let estadoCarreraNbPsi;
let contNotasFinalizantes=0;
let promedioNotasFinalizantes;
let mensaje;


    while(respuesta == "s"){
    	  nombreAlumno = prompt("ingrese su nombre");
          while(isNaN(nombreAlumno)==false){
                nombreAlumno = prompt("ingrese un nombre valido");
          }

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
         	    edad = parseInt(prompt("ingrese una edad valida"));
          }

          nota = parseInt(prompt("ingrese su nota"));
          while(isNaN(nota)==true || nota > 10 || nota < 0){  
         	    nota = parseInt(prompt("ingrese una nota valida"));     
          }

          switch(carrera){
         	     case "programacion":
         	           contAlumnosP++;
         	           if(sexoIngresado == "femenino"){
         	              contMujeresEnP++;
         	           }
         	           break;

         	     case "psicologia":
         	           contAlumnosPsi++;
                      
                       if(bandera == true || edadDelMasViejoPsi < edad ){
                          edadDelMasViejoPsi = edad;
                          nombreDelMasViejoPsi = nombreAlumno;
                          generoDelMasViejoPsi = sexoIngresado;
                          bandera=false;
                       }

                       if(bandera2 == true || sexoIngresado == "nobinario" && nota > mejorNotaPsiNb){
                          nombreMejorNotaPsiNb = nombreAlumno;
                          mejorNotaPsiNb = nota;
                          estadoCarreraNbPsi = estadoCarrera;
                          bandera2=false;
                       }
         	           break;

         	     case "diseño grafico":
         	           contDG++;
         	           break;
          }

          if(sexoIngresado == "nobinario"){
             contNoBinario++;
          }

          if(estadoCarrera == "finalizado"){
             acumNotas = acumNotas + nota;
             contNotasFinalizantes++;
          }

          if(contAlumnosPsi > contDG && contAlumnosPsi > contAlumnosP){
             mensaje = "la carrera con mas alumnos es psicologia";
          }

          if(contAlumnosP > contDG && contAlumnosP > contAlumnosPsi){
             mensaje = "la carrera con mas alumnos es programacion";
          }

          if(contDG > contAlumnosP && contDG > contAlumnosPsi){
             mensaje = "la carrera con mas alumnos es diseño grafico";
          }

          respuesta = prompt("quiere ingresar mas datos? s/n");
    } 

    promedioNotasFinalizantes = acumNotas / contNotasFinalizantes;
 
    document.write("la cantidad de alumnos de programacion es de: "+contAlumnosP+" de psicologia son: "+contAlumnosPsi+" y en diseño grafico son: "+contDG+ "<br>");
    document.write("la cantidad de mujeres cursando la carrera de programacion es de : "+contMujeresEnP+"<br>");
    document.write("la cantidad de alumnos no binarios es de: "+contNoBinario+"<br>");
    document.write("el promedio de las notas de los alumnos finalizantes es de: "+promedioNotasFinalizantes+"<br>");
    document.write("el nombre del alumno mas viejo en psicologia es: "+nombreDelMasViejoPsi+" su edad es: "+edadDelMasViejoPsi+" y su genero es:"+generoDelMasViejoPsi+"<br>");
    document.write("el nombre del mejor alumno no binario en psicologia es: "+nombreMejorNotaPsiNb+" su nota es de: "+mejorNotaPsiNb+" el estado de su carrera es: "+estadoCarreraNbPsi+"<br>");
    document.write(mensaje);
}*/

{
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

}