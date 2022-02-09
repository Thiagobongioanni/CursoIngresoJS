/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    let sueldoIngresado;
	let resultadoSueldo;
	let reduccionSueldo;
	
sueldoIngresado = parseInt(document.getElementById("txtIdImporte").value);

reduccionSueldo = sueldoIngresado * -0.25 ;
resultadoSueldo = reduccionSueldo + sueldoIngresado;

document.getElementById("txtIdResultado").value = resultadoSueldo;

}





	








/*ignorar ejercicio extra*/


//E/S 10Bis1: Debemos lograr tomar el importe por ID.T ransformarlo a entero (parseInt),
 //luego pedirle al usuario un % de descuento (USTEDES RESUELVEN COMO LE PIDEN EL NUMERO)
 // y mostrar el importe en el cuadro de texto "RESULTADO"	

/*let importeIngresado;
let totalFinal;
let descuentoIngresadoPrompt;
let calculo;

importeIngresado = parseInt(document.getElementById("txtIdImporte").value);
descuentoIngresadoPrompt = parseInt(prompt("ingrese su descuento"));

calculo = descuentoIngresadoPrompt  * importeIngresado /100;

totalFinal = importeIngresado - calculo;

document.getElementById("txtIdResultado").value = totalFinal;*/





/*ignorar otro ejercicio extra*/

/*E/S : se debe pedir el nombre del producto al usuario, el importe 
y tambien se debe pedir el porcentaje de descuento al usuario, 
se debe: mostrar el importe final por ID y ademas mostrar el mensaje: 
 "Usted compro un XXXXXX con XX % de descuento, el precio final es XXXX" 

 let nombreProducto;
 let importeIngresado;
 let descuentoIngresado;
 let totalConDescuento;
 let cuenta;
 let mensaje;

importeIngresado =parseInt(document.getElementById("txtIdImporte").value);
 nombreProducto = prompt("ingrese el nombre de su producto");
 descuentoIngresado = parseInt(prompt("ingrese su descuento"));
 

 cuenta = importeIngresado * descuentoIngresado/100;
 totalConDescuento = importeIngresado - cuenta;

 document.getElementById("txtIdResultado").value = totalConDescuento;



mensaje = "usted compro un " + nombreProducto + 
" con " +descuentoIngresado+"% de descuento,el precio final es "+totalConDescuento;

alert(mensaje);*/