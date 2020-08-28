import DatosInmueble from './clases/inmueble.js';

export default class DatosPropietario {
    constructor(nombre, documento, genero, fecha_nacimiento) {
        this.nombre = nombre;
        this.documento = documento;
        this.genero = genero;
        this.fecha_nacimiento = fecha_nacimiento;
        this.inmueble = inmueble;
    }

    asignarInmueble(metros_cuadrados, tipo, num_habitantes, fecha_mensualidad) {

    }
    
    admon() {
        return calcularAdminstracion;        
    }

    calcularEdad(_n) {
        let ageDifMs = Date.now() - this.fecha_nacimiento.getTime();
        let ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    get nombre() {
        return this.nombre;
    }

    get documento() {
        return this.documento;
    }

    get genero() {
        return this.genero;
    }

    get edad() {
        return this.calcularEdad;
    }
}