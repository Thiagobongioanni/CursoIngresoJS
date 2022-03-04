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

//simil parcial 3 hecho
/*{
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
 let contSiames=0;
 let contTurco=0;
 let contPeterbald=0;
 let contGenerico=0;
 let acumPromedioS=0;
 let acumPromedioT=0;
 let acumPromedioP=0;
 let acumPromedioG=0;
 let promedioS;
 let promedioT;
 let promedioP;
 let promedioG;
 let i;
 let mensaje;
 let mensaje2;
 let mensaje3;
 let mensaje4;
 let mensaje5;


     for(i=0;i<10;i++){      
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
                contSiames++;
                acumPromedioS = acumPromedioS + edad;
                break;

                case "turco":
                contTurco++;
                acumPromedioT = acumPromedioT + edad;
                break;

                case "peterbal":
                contPeterbald++
                acumPromedioP = acumPromedioP + edad;
                break;

                case "generico":
                contGenerico++;
                acumPromedioG = acumPromedioG + edad;
                break;
         }
     }

     promedioS = acumPromedioS / contSiames;
     promedioT = acumPromedioT / contTurco;
     promedioP = acumPromedioP / contPeterbald;
     promedioG = acumPromedioG / contGenerico;
     
     if(contSiames > contGenerico && contSiames > contPeterbald && contSiames > contTurco){
         mensaje5 = "la raza de gato con mas cantidad es siames y su promedio de edad es "+promedioS;
     }

     if(contPeterbald > contGenerico && contPeterbald > contSiames && contPeterbald > contTurco){
        mensaje5 = "la raza de gato con mas cantidad es peterbald y su promedio de edad es de "+promedioP;
     }

     if(contGenerico > contPeterbald && contGenerico > contSiames && contGenerico > contTurco){
        mensaje5 = "la raza de gato con mas cantidad es genericos y su promedio de edad es "+promedioG;
     }

     if(contTurco > contPeterbald && contTurco > contSiames && contTurco > contGenerico){
        mensaje5 = "la raza de gato con mas cantidad es turcos y su promedio de edad es "+promedioT;
     }

    alert(mensaje);
    alert(mensaje2);
    alert(mensaje3);
    alert(mensaje4);  
    alert(mensaje5);
}*/

{
 let ingresePais;
 let ingreseContinente;
 let cantidadHabitantes;
 let nivelPobreza;
 let temperaturaIngresada;
 let contTemperatura=0;
 let contTI=0;
 let contPAT=0;
 let conPBT=0;
 let promedioHab;
 let promedioPAT;
 let acumMenosHabitantes=0;
 let totalHabitantes;
 let habitantesPAT=0;
 let nombreMenosPoblado;
 let minimaTemp=0;
 let acumContinenteMasCantidad;
 let bandera=1;
 let bandera2=1;
 let i;
 let mensaje;
 let mensaje2;

     for(i=0;i<5;i++){
         ingresePais = prompt("ingrese el nombre de un pais")
         while(isNaN(ingresePais)==false){
               ingresePais = prompt("ingrese un pais valido");
         }

         ingreseContinente = prompt("ingrese el continente");
         while(isNaN(ingreseContinente)==false || ingreseContinente != "america" && ingreseContinente != "asia" && ingreseContinente != "europa" && ingreseContinente != "africa" && ingreseContinente != "oceania"){
               ingreseContinente = prompt("ingrese un continente valido");
         }

         cantidadHabitantes = parseInt(prompt("ingrese la cantidad de habitantes"));
         while(isNaN(cantidadHabitantes)==true || cantidadHabitantes < 1 || cantidadHabitantes > 7000000){
               cantidadHabitantes = parseInt(prompt("ingrese una cantidad de habitantes valida"));
         } 
         
         nivelPobreza = prompt("ingrese el nivel de pobreza");
         while(isNaN(nivelPobreza)==false || nivelPobreza != "pobre" && nivelPobreza != "rico" && nivelPobreza != "muy rico"){   
               nivelPobreza = prompt("ingrese un nivel de pobreza valido o ingrese un continente pobre"); 
         }
         if(ingreseContinente == "europa" && nivelPobreza == "pobre" ){
                 nivelPobreza = prompt("ingrese un nivel de pobreza valido o ingrese un continente pobre");          
         }

         temperaturaIngresada = parseFloat(prompt("ingrese la temperatura"));
         while(isNaN(temperaturaIngresada)==true || temperaturaIngresada < -50 || temperaturaIngresada > 50){
               temperaturaIngresada = prompt("ingrese una temperaturaIngresada valida entre -50° y 50°");
         } 

         if((temperaturaIngresada%2)== 0){
            contTemperatura++;
         }

         if((temperaturaIngresada%2)== 1 && ingreseContinente == "europa"){
            contTI++
         }

         if(bandera == 1 || acumMenosHabitantes > cantidadHabitantes){
            acumMenosHabitantes = acumMenosHabitantes + cantidadHabitantes;
            nombreMenosPoblado = ingresePais;
            bandera = 0;
         }

         if(temperaturaIngresada > 40){
            contPAT++;
            habitantesPAT = habitantesPAT + cantidadHabitantes
         }

         if(temperaturaIngresada <= 0){
            conPBT++;
           
         }

         if(bandera2 == 1 || temperaturaIngresada < minimaTemp){
            minimaTemp = minimaTemp + temperaturaIngresada;
            nombrePaisMinimaTemp = ingresePais;
            bandera2 = 0;
         }

         switch(cantidadHabitantes){
             case "america":  
                if(america > asia && america > oceania && america > europa){
                   mensaje5 = "el continente con mas habitantes es america";
                }
                break;

             case "europa":
                if(europa > asia && europa > america && europa > oceania){
                   mensaje5 = "el continente con mas habitantes es europa";
                } 
                break;
             
             case "oceania"
                if(oceania > europa && oceania > asia && oceania > america){
                   mensaje5 = "el continente con mas habitantes es oceania ";
                }
                break;

             case "asia"
               if(asia > europa && asia > oceania && asia > america){
                  mensaje5 = "el continente con mas habitantes es asia";
               }
               break;
     }

     totalHabitantes = cantidadHabitantes + cantidadHabitantes + cantidadHabitantes + cantidadHabitantes + cantidadHabitantes;
     promedioHab = totalHabitantes / 2;

     promedioPAT = habitantesPAT/contPAT;

      mensaje = "la cantidad de numeros pares ingresados en temperatura es de:"+contTemperatura+ 
      "\n la cantidad de impares en las temperaturas de europa es de:"+contTI+ 
      "\n el nombre del pais con menos habitantes es "+nombreMenosPoblado+" y la cantidad es de "+acumMenosHabitantes+ 
      "\n la cantidad de paises que supera los 40° es de "+contPAT+" y la cantidadd de paises con temperaturas bajo cero es de "+conPBT+ 
      "\n el promedio de habitantes entre los paises ingresados es de "+promedioHab+
      "\n el promedio de habitantes entre paises de altas temperaturas es "+promedioPAT+
      "\n la temperatura minima ingresada es de "+minimaTemp+" y el nombre del pais con esa temperatura es "+nombrePaisMinimaTemp+

      alert(mensaje);
      alert(mensaje2);
}