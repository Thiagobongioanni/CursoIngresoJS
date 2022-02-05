/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
  //variables declaradas
    let numero1;
    let numero2;	
    let resultado;
    let mensaje;

//datos

  numero1 = parseInt(document.getElementById("txtIdNumeroDividendo").value);
  numero2 = parseInt(document.getElementById("txtIdNumeroDivisor").value);

 //concatenar

   resultado = numero1 / numero2;
   mensaje = "el resto es " + resultado;
   alert(mensaje);	
	
}
