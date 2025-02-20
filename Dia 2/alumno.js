const Persona = require("./persona.mjs");
// Clase hijo de Persona
class Alumno extends Persona {
  constructor(curso) {
    this.curso = curso;
  }
}
