export class DatosInmueble {
    constructor(metrosCuadrados, tipo, numeroHabitantes, fechaMensualidad) {
        this.metrosCuadrados;
        this.tipo;
        this.numeroHabitantes;
        this.fechaMensualidad;
    }

    calcularAdministracion(metrosCuadrados) {
        let administracion = this.tipo === "A" ? metrosCuadrados * 1500 + 50000 : metrosCuadrados * 1500 + 100000;
        return administracion;
    }
    
    // calcularCuotaAseo() {
    //     let cuota_aseo = this.calcularAdministracion * 0.1 + this.metrosCuadrados * 1000;
    // }

    // calcularDerechosGimnasio() {

    // }

    // get metrosCuadrados() {
    //     return this.metrosCuadrados;
    // }

    // get tipo() {
    //     return this.tipo;
    // }

    // get numeroHabitantes() {
    //     return this.numeroHabitantes;
    // }

    // get mensualidad() {
    //     return this.calcularAdministracion + this.calcularCuotaAseo + this.calcularDerechosGimnasio;
    // }
}