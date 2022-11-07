// const searchByCodeCountry = async (alpha3Code) => {
//   try {
//     const res = await fetch(
//       `https://restcountries.com/v3.1/alpha/${alpha3Code}`
//     );
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// TRABAJO EN CLASE
// - HU: Yo como usuario deseo emitir eventos en cargas de datos con BRASIL
//     CA:
//         * Se debe emitir un evento cuando se tenga una respuesta de las api. ej. ('Se cargo la data: <NombrePais>')
//         * Se debe emitir eventos de falla cuando no se encuentre el vecino del pais (ocasionar el error en el 2do vecino)

import { CountriesResponse } from "./interface/countriesResponse";
import { EventEmitter } from "events";

const eventEmitter = new EventEmitter();

(async () => {
  const searchByCodeCountry = async (alpha3Code: string) => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/alpha/${alpha3Code}`
      );
      const data = await res.json();
      return data[0];
    } catch (error) {
      console.log(error);
    }
  };

  const data: CountriesResponse = await searchByCodeCountry("br");

  const eventApiResponse = (data: CountriesResponse) => {
    const {
      name: { common },
    } = data;
    eventEmitter.on("data cargada", (countryNane: string) => {
      console.log(`Se cargo la data: ${countryNane}`);
    });
    eventEmitter.emit("data cargada", common);
  };

  eventApiResponse(data);

  const eventApiNeighborError = (data: CountriesResponse) => {
    const { borders } = data;
    if (borders.length === 0) {
      return console.log("El pais no limita con ningun otro");
    }
    const newBorders = borders.map((border, index) =>
      index === 1 ? border + "error" : border
    );
    console.log(newBorders); // [   'ARG', 'BOLerror','COL', 'GUF', 'GUY', 'PRY', 'PER', 'SUR', 'URY', 'VEN']
    eventEmitter.on("error", () => {
      console.log("Se detecto un error en el segundo pais vecino");
    });
    return newBorders.map(async (countryCode) => {
      try {
        const neighbor = await searchByCodeCountry(countryCode);
        const { name } = neighbor;
        return console.log(name.common);
      } catch (error) {
        eventEmitter.emit("error");
      }
    });
  };

  eventApiNeighborError(data);
})();
