import { DatosInmueble } from "./datos-inmueble";

export class DatosPropietario {
    constructor(nombre, documento, genero, fechaNacimiento) {
        this.nombre;
        this.documento;
        this.genero;
        this.fechaNacimiento;
    }
    
    admon() {
        let admon = calcularAdminstracion;
        console.log(admon);
    }

    calcularEdad(fechaNacimiento) {
        let ageDifMs = Date.now() - fechaNacimiento.getTime();
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