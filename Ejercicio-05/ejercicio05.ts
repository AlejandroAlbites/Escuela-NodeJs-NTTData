// Ejercicio 05

(() => {
  console.log("--------------------ejercicio 1 ------------------");
  // 1.- Ejemplo de uso de let y const
  let pet = "perro";
  pet = "loro";
  console.log("variable let:", pet);
  const music = "rock";
  // music = "punck"; // error ya que la variable const no puede cambiar
  console.log("variable const:", music);
  if (true) {
    const music = "Classic";
    console.log("variable const desde otro scope:", music);
  }
  console.log("--------------------ejercicio 2 ------------------");
  // 2.- Crear una interfaz que sirva para validar el siguiente objeto
  interface Casa {
    area: number;
    ambientes: number;
    colorParedes: string;
  }

  const miCasa: Casa = {
    area: 20,
    ambientes: 2,
    colorParedes: "blanco",
  };

  console.log("objeto validado con interfas:", miCasa);

  console.log("--------------------ejercicio 3 ------------------");
  // 3.- Convertir esta funcion a una funcion de flecha
  //   function caluloSumaCuadadro(x, y) {
  //     const resultado = (x + y)^2;
  //     return 'El resultado es ' + resultado;
  //   }

  const caluloSumaCuadadro = (x: number, y: number) => {
    const resultado = (x + y) ** 2;
    return "El resultado es: " + resultado;
  };

  console.log(caluloSumaCuadadro(2, 3));

  console.log("--------------------ejercicio 4 ------------------");

  // 4.- Crear una función con parametros obligatorios, opcionales y por defecto. Para ello usar estos parametros:
  //   - Nombre (obligatorio): string
  //   - Apellido (opcional): string
  //   - Edad (obligatorio): number
  //   - Es Peruano (opcional): boolean (default = true)
  //   Debe imprimir: El nombre del usuario es <nombre> <apellido> con edad de <edad> y con|sin nacionalidad peruana

  const user = (
    nombre: string,
    edad: number,
    apellido?: string,
    esPeruano: boolean = true
  ) =>
    `El nombre del usuario es ${nombre} ${
      apellido ? apellido : ""
    } con edad de ${edad} y ${esPeruano ? "con" : "sin"} nacionalidad peruana`;

  console.log(user("juan", 20, "albites tapia", false));

  console.log(user("pepe", 30));

  console.log("--------------------ejercicio 5 ------------------");
  // 5.- Crear una clase que permita la siguiente estructura
  //   - La clase se debe de llamar rectangulo, con las siguientes propiedades: (base y altura)
  //   - La clase rectangulo debe calular el area y devolver un número

  class Rectangulo {
    public base: number;
    public altura: number;
    constructor(base: number, altura: number) {
      this.base = base;
      this.altura = altura;
    }

    calcularArea() {
      return this.base * this.altura;
    }
  }

  const rectangulo = new Rectangulo(2, 8);
  console.log("el área del rectangulo es:", rectangulo.calcularArea());

  console.log("--------------------ejercicio 6 ------------------");
  // 6.- 3 ejemplos de uso de template literal
  //   a. Debe contener string, number

  const name = "juan";
  const age = 31;

  console.log(`Hola soy ${name} y tengo ${age}`);

  //   b. Debe contener function flecha

  console.log(
    ` Hola ${(() => {
      return "Juan Albites";
    })()}`
  );
  //   c. Debe contener string y usar boolean para cambiar un texto

  let isDog = true;
  const namePet = "firulais";

  console.log(`Mi nombre es ${namePet} y ${isDog ? "soy" : "no soy"} un perro`);

  console.log("--------------------ejercicio 7 ------------------");
  // 7.- 3 ejemplo de uso de desestructuración
  //   a. Desestructuración de todas las variables de un objeto (funsionando interfaces). Las propiedades serian:
  //     - usuario: string
  //     - clave: string
  //     - fecha: fecha actual
  //     - estado: boleano

  interface User {
    usuario: string;
    clave: string;
  }
  interface User {
    fecha: Date;
    estado: boolean;
  }

  const newUser: User = {
    usuario: "Juan Albites",
    clave: "123",
    fecha: new Date(),
    estado: false,
  };

  const { usuario, clave, fecha, estado } = newUser;

  console.log(usuario, clave, fecha, estado);
  //   b. Desestructuración de objecto (usando type). La estructura seria: nombre: string, precio: number

  type Product = {
    nombre: string;
    precio: number;
  };

  const product: Product = {
    nombre: "gaseosa",
    precio: 10,
  };
  const { nombre, precio } = product;

  console.log(nombre, precio);

  //   c. En una funcion flecha, realizar la desestructuración solo de los 2 ultimos elementos del array. El contenido del array es el siguiente:
  //     ['Jhon','Luis','Mateo','Ana']

  const usuarios = (names: string[]) => {
    const [, , a, b] = names;
    return `el ultimo nombre es ${b} y el penultimo es ${a}`;
  };
  const names = ["Jhon", "Luis", "Mateo", "Ana"];
  console.log(usuarios(names));
})();
