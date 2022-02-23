function mostrar()
{
let precioIngresado;
let descuentoIngresado;
let precioFinal;
let calculoDescuento;

    precioIngresado = parseFloat(prompt("ingrese el precio"));
    descuentoIngresado = parseFloat(prompt("ingrese el porcentaje de descuento"));

    precioFinal = precioIngresado * (descuentoIngresado/100);

   

    parseFloat(document.getElementById("elPrecioFinal").value = precioFinal);
}
