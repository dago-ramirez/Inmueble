export default class DatosInmueble {
    constructor(metros_cuadrados, tipo, num_habitantes, fecha_mensualidad) {
        this.metros_cuadrados = metros_cuadrados;
        this.tipo = tipo;
        this.num_habitantes = num_habitantes;
        this.fecha_mensualidad = fecha_mensualidad;
    }

    calcularAdministracion() {
        let administracion = this.tipo === "A" ? this.metros_cuadrados * 1500 + 50000 : this.metros_cuadrados * 1500 + 100000;
        return administracion;
    }
    
    // calcularCuotaAseo() {
    //     let cuota_aseo = this.calcularAdministracion * 0.1 + this.metrosCuadrados * 1000;
    // }

    // calcularDerechosGimnasio() {

    // }

    set metrosCuadrados() {
        this.metros_cuadrados = this.metros_cuadrados;
    }

    set tipo() {
        this.tipo = tipo;
    }

    set numHabitantes() {
        this.num_habitantes = this.num_habitantes;
    }

    set fechaMensualidad() {
        this.calcularAdministracion + this.calcularCuotaAseo + this.calcularDerechosGimnasio;
    }

    get metrosCuadrados() {
        return this.metros_cuadrados;
    }

    get tipo() {
        return this.tipo;
    }

    get numHabitantes() {
        return this.num_habitantes;
    }

    get fechaMensualidad() {
        return this.calcularAdministracion + this.calcularCuotaAseo + this.calcularDerechosGimnasio;
    }
}