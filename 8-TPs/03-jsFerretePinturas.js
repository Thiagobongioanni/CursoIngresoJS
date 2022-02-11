/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
  let temperaturaFaherenheit;
  let transformacion;
  let mensaje;

      temperaturaFaherenheit = parseFloat(document.getElementById("txtIdTemperatura").value);

      transformacion = (temperaturaFaherenheit - 32) * 5 / 9;
      mensaje = +temperaturaFaherenheit+ " Fahrenheit son " +transformacion+ " centígrados";

      alert(mensaje);
}

function CentigradosFahrenheit () 
{
  let temperaturaCentigrados2;
  let transformacion2;
  let mensaje;

      temperaturaCentigrados2 = parseFloat(document.getElementById("txtIdTemperatura").value);

      transformacion2 = temperaturaCentigrados2 * 1.8 + 32;
      mensaje = +temperaturaCentigrados2+ " centigrados son " +transformacion2+ " Fahrenheit";

      alert(mensaje);

}
