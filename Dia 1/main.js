// Crear clase Estudiante
class Estudiante {
  // Método constructor
  constructor({ nombre, edad, puntos, materiasAprobadas = [] }) {
    // Atributos
    this.nombre = nombre;
    this.edad = edad;
    this.puntos = puntos;
  }
}

// Copia 1
const estudiante1 = new Estudiante("Juan", 20, 100);
estudiante1.nombre = "Juan";
estudiante1.edad = 20;
estudiante1.puntos = 100;

// Copia 2
const estudiante2 = new Estudiante();
estudiante2.nombre = "Ana";
estudiante2.edad = 21;
estudiante2.puntos = 90;

// Copia 3
const estudiante3 = new Estudiante();
estudiante3.nombre = "Pedro";
estudiante3.edad = 22;
estudiante3.puntos = 80;
