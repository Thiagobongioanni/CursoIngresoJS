function mostrar()
{
let numero;
let maximo = 10;
let minimo = 1;

numero = Math.round(Math.random()*(maximo - minimo) + minimo);

if (numero >= 9){
	alert("EXCELENTE " + numero);	
    }

    else if (numero >=4) {
    alert("Aprobo " + numero)
      }

    else{
    	alert("Vamos, la proxima se puede "+numero)
    }
}