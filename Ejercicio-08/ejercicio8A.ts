import { CountriesResponse } from "./interface/countriesResponse";
// Subir todos sus ejercicios a sus repositorios compartidos.
// - HU: Yo siendo usuario deseo buscar el pais segun lo que se ingrese
//   ---
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
//   ---
//     CA: * Se debe usar la function searchByCodeCountry para realizar una busqueda de paises (codigo abreviado: col,pe,at)
//         * Se debe mostrar en la consola el nombre del país, nombre y simbolo de moneda y el idioma del país.
//         * Se debe mostrar el nombre de los pais vecinos (propiedad borders del response), usando la funcion searchByCodeCountry.

// Ejercicio 08 - a

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

  //* Se debe usar la function searchByCodeCountry para realizar una busqueda de paises (codigo abreviado: col,pe,at)
  const data: CountriesResponse = await searchByCodeCountry("pe");
  // console.log(data);

  const dataCountry = (data: CountriesResponse) => {
    const { name, currencies, languages } = data;
    const { common } = name;
    return {
      country: common,
      currencies,
      languages,
    };
  };
  // * Se debe mostrar en la consola el nombre del país, nombre y simbolo de moneda y el idioma del país.
  console.log(dataCountry(data));

  const neighborCountry = async (data: CountriesResponse) => {
    const { borders } = data;
    return borders.map(async (border) => {
      const neighbor = await searchByCodeCountry(border);
      const { name } = neighbor;
      return console.log(name.common);
    });
  };
  //   * Se debe mostrar el nombre de los pais vecinos (propiedad borders del response), usando la funcion searchByCodeCountry.
  neighborCountry(data);
})();
