(() => {
  //      01 Solucionar el sgte problema, mediante promesas:
  //   Mi amiga Kayo promete hacer una torta para mi cumpleaños en dos semanas.
  //   Si todo va bien, y Kayo no se enferma, tendremos una cierta cantidad de tortas. (Las tortas son contables en este tutorial 😆).
  //    De lo contrario, si Kayo se enferma, no tendremos tortas.
  //   De cualquier manera, todavía vamos a tener una fiesta.

  const obtenerTorta = (estaEnferma: boolean) => {
    let cantidadTortas: number;
    return new Promise((resolve, reject) => {
      if (estaEnferma) {
        cantidadTortas = 0;
        reject(
          `La cantidad de tortas será ${cantidadTortas}, Kaya esta enferma`
        );
      }
      cantidadTortas = 10;
      resolve(`Kaya no esta enferma, nos va preparar ${20} tortas`);
    });
  };
  obtenerTorta(false)
    .then((res) => console.log(res))
    .catch((error) => console.log(error))
    .finally(() => console.log("De todas formas tendremos fiesta"));
})();
