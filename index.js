let unaCouota = 1; 
let dosCuotas = 2;
let tresCuotas = 3;
let valorMatricula = 7000000;
let dosValorMatricula = 3500000;
let tresValorMatricula = 2333333;

alert("bienvenido a la univerisidad de la calle");
alert("puedes elegir la opcion de pagar tu matricula hasta en 3 cuotas");


let opcionSeleccionadaCuotas = parseInt(prompt(`escoge la cantidad de cuotas que quieres pagar \n ${unaCouota} = 1 cuota \n ${dosCuotas} = 2 cuotas \n ${tresCuotas} = 3 cuotas`));

let descuentoUnacuota = 0.05;
let interesDosCuotas = 0.02;
let interesTresCuotas = 0.02 * 3;

let pagoUnaCuota = Math.round (valorMatricula * ( 1 - descuentoUnacuota));
let pagoDosCuotas = Math.round (dosValorMatricula /2) * ( 1  + interesDosCuotas);
let pagoTresCuotas = Math.round (tresValorMatricula /3) * ( 1  + interesTresCuotas);



if (opcionSeleccionadaCuotas === unaCouota){
    alert(`has seleccionado pagar a 1 cuota`);
    alert(`debes de pagar ${pagoUnaCuota} y obtienes el 5% de descuento`);
} else if ( opcionSeleccionadaCuotas === dosCuotas){
    alert(` has seleccionado pagar a 2 cuotas`); 
    alert(`debes de pagar ${pagoDosCuotas} aplicando el interes del 2% mensual`) ;
} else if ( opcionSeleccionadaCuotas === tresCuotas){
    alert(`has seleccionado pagar a 3 cuotas`); 
    alert(`debes de pagar ${pagoTresCuotas} aplicando el 2% de interes mensual `);
} else {
    alert(`ingresaste mal el numero de cuotas, intenta de nuevo`);
}