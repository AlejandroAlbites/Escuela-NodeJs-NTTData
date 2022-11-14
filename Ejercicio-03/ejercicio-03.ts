interface Heroe {
  nombre: string;
  apellido: string;
}

let ironman: Heroe = {
  nombre: "Tony",
  apellido: "Stark",
};

function saludar(nombre: string) {
  console.log("Hola", nombre);
}

saludar(ironman.nombre);
