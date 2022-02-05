/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{ 
  //variables declaradas

    let numero1;
    let numero2;	
    let resultado;
    let mensaje;

  //datos

    numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
    numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
  
  //concatenar

    resultado = numero1 + numero2;
    mensaje = "la suma es " + resultado;
    alert(mensaje);	
}

function restar()
{
  //variables declaradas

    let number1;
    let number2;
    let resultado;
    let mensaje;

//datos

  number1 = parseInt(document.getElementById("txtIdNumeroUno").value);
  number2 = parseInt(document.getElementById("txtIdNumeroDos").value);

//concatenar

  resultado = number1 - number2;
  mensaje = "la resta es " + resultado;
  alert(mensaje);
}


function multiplicar()
{

//variables declaradas

    let numeros1;
    let numeros2;
    let resultado;
    let mensaje;

//datos

  numeros1 = parseInt(document.getElementById("txtIdNumeroUno").value);
  numeros2 = parseInt(document.getElementById("txtIdNumeroDos").value);	

//concatenar

  resultado = numeros1 * numeros2;
  mensaje = "la multiplicacion da " + resultado;
  alert(mensaje)
}


function dividir()
{
//variables declaradas 
  let num1;
  let num2;
  let resultado;
  let mensaje;

//datos

  num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
  num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

 //concatenar

   resultado = num1 / num2;
   mensaje = "el cociente es " + resultado;
   alert(mensaje)
}
