function mostrar()
{
let horaDelDia;

                 //use parse float porque me parecio mas adecuado para la hora
    horaDelDia = parseFloat(document.getElementById("txtIdHora").value);
	
	switch(horaDelDia){
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		     alert("es de mañana");
		     break;
	                  }             
}