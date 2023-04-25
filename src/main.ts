/*
Crea una función que imprima los 30 próximos años bisiestos siguientes a uno dado.
 - Utiliza el menor número de líneas para resolver el ejercicio.
*/

function bisiestosProximos(año: number) {
  // Año bisiesto es cuando año % 4 === 0
  const añosBisiestos: number[] = [];

  function esBisiesto(year: number) {
    return year % 4 == 0;
  }

  // hallar siguiente bisiesto:
  let añoActual = año;
  while (!esBisiesto(añoActual)) {
    añoActual++;
  }

  const primerBisiesto = añoActual;
  añosBisiestos.push(primerBisiesto);

  for (let i = 1; i < 30; i++) {
    añosBisiestos.push(primerBisiesto + 4 * i);
  }

  console.log(añosBisiestos);
}

// Con recursión
function bisiestosProximosV2(año: number) {
  function esBisiesto(year: number) {
    return year % 4 == 0;
  }

  function bisiestoRecursivo(nuevoAño: number) {
    let añoIterado = nuevoAño;

    // Si es bisiesto, mostrarlo en consola
    if (esBisiesto(añoIterado)) {
      console.log(añoIterado);
    }

    // Parar el proceso cuando hayan pasado 120=30*4 años (cantidad total de años cuando pasaron los 30 años bisiestos pedidos)
    if (añoIterado - año == 120) return;
    // actualizo valor del año iterado
    añoIterado += 1;

    bisiestoRecursivo(añoIterado);
  }

  bisiestoRecursivo(año);
}

bisiestosProximosV2(1899);
