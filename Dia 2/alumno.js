import Persona from "./persona.mjs";
// Clase hijo de Persona
class Alumno extends Persona {
  constructor(nombre, edad, curso) {
    super(nombre, edad);
    this.curso = curso;
  }
  saludar() {
    console.log(`Hola, soy ${this.nombre} y estudio en el curso: ${this.curso}`);
  }
}

const alumno1 = new Alumno("Paulo", 31, "Primero DS");
alumno1.saludar();
const persona1 = new Persona("Juan", 30);
persona1.saludar();
