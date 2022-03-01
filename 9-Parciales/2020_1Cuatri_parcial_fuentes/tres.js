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
 let nombreMascota;
 let razaPerros;
 let edad;
 let acumPerroMasViejo=0;
 let acumGatoMasViejo=0;
 let acumPajaroMasViejo=0;
 let acumOtrosMasViejos=0;
 let nombreMasViejoPerro;
 let nombreMasViejoPajaro;
 let nombreMasViejoOtros;
 let nombreMasViejoGato;
 let contSiames;
 let contTurco;
 let contPeterbald;
 let contGenerico;
 let acumPromedioS=0;
 let promedioSiames;
 let i;
 let mensaje;
 let mensaje2;
 let mensaje3;
 let mensaje4;
 let mensaje5;


     for(i=0;i<2;i++){      
         ingresoMascota = prompt("ingrese su mascota");
         while(ingresoMascota != "gato" && ingresoMascota !="perro" && ingresoMascota != "pajaro" && ingresoMascota != "otros"){
        	   ingresoMascota = prompt("ingrese una mascota valida");
         }

         nombreMascota = prompt("ingrese el nombre de su mascota");
         while(isNaN(nombreMascota)==false){
               nombreMascota = prompt("ingrese un nombre valido");
         }

         if(ingresoMascota == "perro"){  
            razaPerro = prompt("ingrese la raza del perro");
            while(razaPerro != "pastor" && razaPerro != "toy" && razaPerro != "callejero"){
        	      razaPerro = prompt("ingrese una raza valida");
            } 
            edad == prompt("ingrese la edad");
            while(edad < 1 || edad > 20){
               edad == prompt("ingrese una edad valida");
            }
         } 

         if(ingresoMascota == "gato"){
            razaGatos = prompt("ingrese la raza del gato")
            while(razaGatos != "siames" && razaGatos != "turco" && razaGatos != "peterbald" && razaGatos != "generico"){
                  razaGatos = prompt("ingrese una raza de gato valida");
            }
            edad = parseInt(prompt("ingrese la edad del gato"));
            while(edad < 1 || edad > 20){
               edad = parseInt(prompt("ingrese una edad valida"));
            }
         }    

         if(ingresoMascota == "otros"){
            edad = parseInt(prompt("ingrese la edad"))
            while(edad < 1 || edad > 100){
               parseInt(prompt("ingrese una edad valida"));
            }
         } 

         if(ingresoMascota == "pajaro"){
            edad = parseInt(prompt("ingrese la edad"))
            while(edad < 1 || edad > 50){
               parseInt(prompt("ingrese una edad valida"));
            }
         }  

         if(ingresoMascota == "perro" && acumPerroMasViejo < edad){
            acumPerroMasViejo = acumPerroMasViejo + edad;
            nombreMasViejoPerro = nombreMascota;
            mensaje = "el nombre del perro mas viejo es "+nombreMasViejoPerro;
         }

          if(ingresoMascota == "gato" && acumGatoMasViejo < edad){
            acumGatoMasViejo = acumGatoMasViejo + edad;
            nombreMasViejoGato = nombreMascota;
            mensaje2 = "el nombre del gato mas viejo es "+nombreMasViejoGato;
         }

         if(ingresoMascota == "pajaro" && acumPajaroMasViejo < edad){
            acumPajaroMasViejo = acumPajaroMasViejo + edad;
            nombreMasViejoPajaro = nombreMascota;
            mensaje3 = "el nombre del pajaro mas viejo es "+nombreMasViejoPajaro;
         }

         if(ingresoMascota == "otros" && acumOtrosMasViejos < edad){
            acumOtrosMasViejos = acumOtrosMasViejos + edad;
            nombreMasViejoOtros = nombreMascota;
            mensaje4 = "el nombre del mas viejo de otros es "+nombreMasViejoOtros;          
         }

         switch(razaGatos){
                case "siames":
                contSiames++
                break;

                case "turco":
                contTurco++;
                break;

                case "peterbal":
                contPeterbald++
                break;

                case "generico":
                contGenerico++;
                break;
         }

         if(contSiames > contGenerico && contSiames > contPeterbald && contSiames > contTurco){
            acumPromedioS = acumPromedioS + edad
             mensaje5 = "la raza de gato con mas cantidad es siames y su promedio de edad es "+promedioSiames;

          }

          if(contPeterbald > contGenerico && contPeterbald > contSiames && contPeterbald > contTurco){
             mensaje5 = "la raza de gato con mas cantidad es peterbald";
          }

          if(contGenerico > contPeterbald && contGenerico > contSiames && contGenerico > contTurco){
             mensaje5 = "la raza de gato con mas cantidad es genericos";
          }

          if(contTurco > contPeterbald && contTurco > contSiames && contTurco > contGenerico){
             mensaje5 = "la raza de gato con mas cantidad es turcos";
          }
     }

     promedioSiames = acumPromedioS / contSiames

         

    //alert(mensaje);
    //alert(mensaje2);
    //alert(mensaje3);
    //alert(mensaje4);
    alert(mensaje5);
    
}