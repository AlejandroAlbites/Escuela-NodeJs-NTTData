"use strict";
(() => {
    const sumar = (a, b) => a + b;
    console.log("Resultado de la función sumar es:", sumar(4, 3));
    const operacionesMatematicas = (valor1, valor2, valor3 = "suma") => {
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
