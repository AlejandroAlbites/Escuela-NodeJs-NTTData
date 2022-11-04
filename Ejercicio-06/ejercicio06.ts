(() => {
  //     Ejercicio 06
  // 1.- Crear una function de retirarDinero que devuelva una promesa, la cual recibe un parametro tipo numerico,
  //  el cual dentro de la promesa, será validado si es mayor que 1000, devolvera un error de "No hay suficientes montos"
  //  . En caso contrario devolvera un texto de 'monto disponible a retirar' con el resultado de dineroActual (1000) menos monto ingresado.
  //   - Crear un const de la fn retirarDinero
  //   - esta FN debe tener un parametro de entrada tipo numerico (montoARetirar)
  //   - Esta fn debe devolver una promesa
  //   - En la promesa debe tener una condicional para resolver con error si el dinero actual (1000) es menor que el monto a retirar.
  //   - En la promesa en caso de que el monto a retirar sea menor al dineroActual, entonces debe responder 'Monto disponible a retirar (dineroACtual-montoRetiro)'

  const retirarDinero = (montoARetirar: number) => {
    let dineroACtual = 1000;
    return new Promise((resolve, reject) => {
      if (montoARetirar <= dineroACtual) {
        resolve(
          `Retiraste ${montoARetirar}, tu saldo disponible es de ${
            dineroACtual - montoARetirar
          }`
        );
      }
      reject(
        `El monto ingresado(${montoARetirar}) es superior a su dinero actual (${dineroACtual})`
      );
    });
  };

  retirarDinero(650)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
})();
