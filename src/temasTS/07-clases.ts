class Persona{
    nombre: string;
    edad:number;
    constructor(nombre:string, edad:number){ //inicialiazar propiedades de la clase (pasar argumentos)
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
        console.log(`nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}
const persona1 = new Persona( "", 0);
persona1.nombre = 'Juan';
persona1.edad = 30;
persona1.imprimir();
const persona2 = new Persona("", 0);