// Clase hijo de Persona
import Persona from "./persona.mjs";
class Profesor extends Persona {
  constructor(nombre, edad, asignatura) {
    super(nombre, edad);
    this.asignatura = asignatura;
  }
}
const profesor1 = new Profesor("Paulo", 31, "Matemáticas");
console.log(profesor1);

/* profesor1.nombre = 'Juan';
profesor1.edad = 30; */
