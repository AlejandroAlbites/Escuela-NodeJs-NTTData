// ** Ejercicio 04 En typescript van a declarar 2 funciones que impriman en consola la siguiente
//  variable: function 01 -Recibir 2 valores (numeros) -Imprimir en consola la suma de los mismos.
//   function 02 -Recibir 3 valores (parametros) valor1: numero valor2: numero valor3: (opcional) string -
//   Imprimir la multiplicacion/division/suma/resta, dependiento del valor3. Por defecto debe ser suma

// Usar interfaces
// Usar constantes/let
// Enviar al chat la impresión de cada funcion.
(() => {
  interface Sumar {
    (a: number, b: number): number;
  }
  const sumar: Sumar = (a, b) => a + b;

  console.log("Resultado de la función sumar es:", sumar(4, 3));

  interface Operaciones {
    (valor1: number, valor2: number, valor3?: string): number | string;
  }

  const operacionesMatematicas: Operaciones = (
    valor1,
    valor2,
    valor3 = "suma"
  ) => {
    let operador = valor3;

    if (operador === "suma") {
      return sumar(valor1, valor2);
    }
    if (operador === "resta") {
      return valor1 - valor2;
    }
    if (operador === "multiplicacion") {
      return valor1 * valor2;
    }
    if (operador === "division") {
      return valor1 / valor2;
    }

    return "El operador ingresado no es correcto";
  };

  console.log(operacionesMatematicas(8, 4));
  console.log(operacionesMatematicas(8, 4, "resta"));
  console.log(operacionesMatematicas(8, 4, "multiplicacion"));
  console.log(operacionesMatematicas(8, 4, "division"));
  console.log(operacionesMatematicas(8, 4, "exponencial"));
})();
