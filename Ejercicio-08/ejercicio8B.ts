(() => {
  // Ejercicio 08 -b

  // - HU: Yo siendo usuario requiero hornear una pizza congelada. Cada actividad se debe realizar mediantes funciones flecha.
  //     CA: * Primero se debe precalentar el horno durante 5 segundos. Al terminar debe sonar la alerta del horno (ej. 'Bep Bep Beeep! Horno Calentado!')
  //         * Mientras se precalienta el horno, sacas la pizza y abres la caja y la pones en el sarten de pizzas (duración de actividad 3seg).
  //         * Como el horno aun sigue caliente, te tomas un refresco.
  //         * Con el Horno precalentado. Se procede a meter la pizza al horno y calentarla por 10 segundos. Al terminar debe sonar la alerta del horno (ej. 'Bep Bep Beeep! Pizza lista!')
  //         * Mientras la pizza se calienta, miras la TV.

  interface Pizza {
    estaPrecalentado: boolean;
    estaHorneado: boolean;
  }
  const estadoPizza: Pizza = {
    estaPrecalentado: false,
    estaHorneado: false,
  };

  const precalentarHorno = () => {
    return new Promise<boolean>((resolve) => {
      console.log("iniciado el precalentamiento del horno");
      prepararPizza();
      setTimeout(() => {
        console.log("Bep Bep Beeep! Horno Calentado!");
        resolve(true);
      }, 5000);
    });
  };

  const prepararPizza = () => {
    return new Promise<boolean>((resolve) => {
      console.log(
        "mientras se precalienta el horno, saca la pizza y se pone en sarten de pizzas"
      );
      setTimeout(() => {
        console.log("se termino de alistar las pizzas");
        resolve(true);
      }, 3000);
    });
  };

  const tomarRefresco = async (estadoPrecalentado: boolean) => {
    return new Promise((resolve) => {
      if (estadoPrecalentado) {
        console.log("empiezo a tomar un refreso");
        setTimeout(() => {
          resolve(console.log("dejo de tomar mi refresco"));
        }, 3000);
      }
    });
  };

  const hornearPizzas = () => {
    return new Promise<boolean>((resolve) => {
      console.log("inicia el horneado de pizzas");
      mirarTv(estadoPizza.estaHorneado);
      setTimeout(() => {
        console.log("Bep Bep Beeep! Pizzas listas!");
        resolve(true);
      }, 10000);
    });
  };

  const mirarTv = (estaHorneado: boolean) => {
    return estaHorneado
      ? console.log("terminar de ver tv")
      : console.log("mirando tv mientras se hornea la pizza");
  };

  const inicioActividades = async () => {
    const estadoPrecalentado = await precalentarHorno();
    estadoPizza.estaPrecalentado = estadoPrecalentado;
    await tomarRefresco(estadoPizza.estaPrecalentado);
    const estadoHorneado = await hornearPizzas();
    estadoPizza.estaHorneado = estadoHorneado;
    mirarTv(estadoPizza.estaHorneado);
  };
  inicioActividades();
})();
