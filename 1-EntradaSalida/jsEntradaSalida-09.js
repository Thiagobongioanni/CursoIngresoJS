/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
//variables declaradas
  let sueldoIngresado;
  let resultadoSueldo;	
  let aumento;
  let resultado;


//si no lo ordenaba de esta manera no funcionaba :C

sueldoIngresado = parseInt(document.getElementById("txtIdSueldo").value);

aumento = sueldoIngresado * 0.10;
resultadoSueldo = sueldoIngresado + aumento;

document.getElementById("txtIdResultado").value = resultadoSueldo;
}
