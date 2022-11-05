(() => {
  // Historia de usuarios

  interface resultadoAleatorio {
    puntos: number;
    aleatorio: number;
  }

  const ingresaNumero = (ingreso?: number) => {
    return new Promise<resultadoAleatorio>((resolve, reject) => {
      const numeroNuevo = Number(ingreso);

      const numeroAleatorio = Math.floor(Math.random() * 5 + 1);

      if (isNaN(numeroNuevo)) {
        reject(new Error("tipo de entrada incorrecto"));
      }

      let respuesta: resultadoAleatorio;
      if (numeroNuevo === numeroAleatorio) {
        // puntos obtenidos
        // numero aleatorio
        respuesta = {
          puntos: 5,
          aleatorio: numeroAleatorio,
        };
      } else if (
        numeroNuevo === numeroAleatorio - 1 ||
        numeroNuevo === numeroAleatorio + 1
      ) {
        respuesta = {
          puntos: 2,
          aleatorio: numeroAleatorio,
        };
      } else {
        respuesta = {
          puntos: 0,
          aleatorio: numeroAleatorio,
        };
      }

      resolve(respuesta);
    });
  };

  const continuarAdivinanza = (terminar = false) => {
    return new Promise<boolean>((resolve) => {
      if (terminar) {
        resolve(false);
      }
      setTimeout(() => {
        console.log("Nuevo intento");
        resolve(true);
      }, 2000);
    });
  };

  const interfaceUsuario = async (status?: boolean) => {
    try {
      const resultado = await ingresaNumero(3);
      const { puntos, aleatorio } = resultado;
      console.log(
        `El resultado del numero aleatorio es ${aleatorio} y obtuviste ${puntos} puntos`
      );
      const continuar = await continuarAdivinanza(status);
      if (continuar) {
        interfaceUsuario(continuar);
      } else {
        console.log("fin del juego");
      }
    } catch (error) {
      console.error(error);
    }
  };

  interfaceUsuario(true);
})();
