"use strict";
(() => {
    const retirarDinero = (montoARetirar) => {
        let dineroACtual = 1000;
        return new Promise((resolve, reject) => {
            if (montoARetirar <= dineroACtual) {
                resolve(`Retiraste ${montoARetirar}, tu saldo disponible es de ${dineroACtual - montoARetirar}`);
            }
            reject(`El monto ingresado(${montoARetirar}) es superior a su dinero actual (${dineroACtual})`);
        });
    };
    retirarDinero(650)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
})();
