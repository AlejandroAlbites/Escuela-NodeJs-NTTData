"use strict";
(() => {
    console.log("--------------------ejercicio 1 ------------------");
    let pet = "perro";
    pet = "loro";
    console.log("variable let:", pet);
    const music = "rock";
    console.log("variable const:", music);
    if (true) {
        const music = "Classic";
        console.log("variable const desde otro scope:", music);
    }
    console.log("--------------------ejercicio 2 ------------------");
    const miCasa = {
        area: 20,
        ambientes: 2,
        colorParedes: "blanco",
    };
    console.log("objeto validado con interfas:", miCasa);
    console.log("--------------------ejercicio 3 ------------------");
    const caluloSumaCuadadro = (x, y) => {
        const resultado = (x + y) ** 2;
        return "El resultado es: " + resultado;
    };
    console.log(caluloSumaCuadadro(2, 3));
    console.log("--------------------ejercicio 4 ------------------");
    const user = (nombre, edad, apellido, esPeruano = true) => `El nombre del usuario es ${nombre} ${apellido ? apellido : ""} con edad de ${edad} y ${esPeruano ? "con" : "sin"} nacionalidad peruana`;
    console.log(user("juan", 20, "albites tapia", false));
    console.log(user("pepe", 30));
    console.log("--------------------ejercicio 5 ------------------");
    class Rectangulo {
        constructor(base, altura) {
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
    const name = "juan";
    const age = 31;
    console.log(`Hola soy ${name} y tengo ${age}`);
    console.log(` Hola ${(() => {
        return "Juan Albites";
    })()}`);
    let isDog = true;
    const namePet = "firulais";
    console.log(`Mi nombre es ${namePet} y ${isDog ? "soy" : "no soy"} un perro`);
    console.log("--------------------ejercicio 7 ------------------");
    const newUser = {
        usuario: "Juan Albites",
        clave: "123",
        fecha: new Date(),
        estado: false,
    };
    const { usuario, clave, fecha, estado } = newUser;
    console.log(usuario, clave, fecha, estado);
    const product = {
        nombre: "gaseosa",
        precio: 10,
    };
    const { nombre, precio } = product;
    console.log(nombre, precio);
    const usuarios = (names) => {
        const [, , a, b] = names;
        return `el ultimo nombre es ${b} y el penultimo es ${a}`;
    };
    const names = ["Jhon", "Luis", "Mateo", "Ana"];
    console.log(usuarios(names));
})();
