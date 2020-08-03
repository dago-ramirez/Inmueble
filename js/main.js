const DATOS_FORMULARIO = [
    {
        datos_propietario : {
            nombre : "Juan", 
            documento : "Perez", 
            genero : "H", 
            fech_nac : "10-10-1980"
        }, 
        datos_inmueble : {
            metos_cuadrados : 30, 
            tipo : "C", 
            numero_habitantes : 10, 
            fech_mensualidad : "10-0-2020"
        }
    }
];
	
document.getElementById("btn-guardar-inmueble").addEventListener('click', e =>{
	let nombre_almacenado, documento_almacenado, 
        genero_almacenado, fecha_nac_almacenada,mt_inmueble_almacenado,tipo_inmueble_almacenado, 
        num_habitantes_inmueble_almacenado, fech_men_inmueble_almacenado;
    let inmueble = {
        datos_propietario : {
            nombre : null, 
            documento : null, 
            genero : null, 
            fech_nac : null
        }, 
        datos_inmueble : {
            metos_cuadrados : null, 
            tipo : null, 
            numero_habitantes : 0, 
            fech_mensualidad : null
        }
    };
	if(document.getElementById("frm-mensualidad").reportValidity()){
        
        inmueble.datos_propietario.nombre = document.getElementById("nombre-propietario").value;
        inmueble.datos_propietario.documento = document.getElementById("doc-propietario").value;
        inmueble.datos_propietario.fech_nac = document.getElementById("fecha-nac-propietario").value;
        inmueble.datos_propietario.genero = document.getElementById("genero-propietario").value;
        
        inmueble.datos_inmueble.metos_cuadrados = document.getElementById("metros-cuadrados").value;
        inmueble.datos_inmueble.numero_habitantes = document.getElementById("numero-habitantes").value;
        inmueble.datos_inmueble.fech_mensualidad = document.getElementById("fecha-mensualidad").value;
        
        if(document.getElementById("tipo_apartamento").checked){
            inmueble.datos_inmueble.tipo = document.getElementById("tipo_apartamento").value;
        }else{
            inmueble.datos_inmueble.tipo = document.getElementById("tipo_casa").value;
        }
    }else{
        alert("Error de validación de campos.")
    }
    DATOS_FORMULARIO.push(inmueble);
    document.getElementById("frm-mensualidad").reset();
    alert("Los datos fueron almacenados");
    cargarDatosEnTabla();
    $('#modal-adicionar').modal('toggle');
        
});
// JQuery para llamar al toggle
$(document).ready((e) => {
    $("#btn-adicionar").click((e) => {
        $('#modal-adicionar').modal('toggle');
    });
});

function cargarDatosEnTabla() {
    // Se resetea la tabla
    document.querySelector("#tbl-mensualidades tbody").innerHTML = "";
    // Se recorre el arreglo y se almacenan los datos en la tabla
    DATOS_FORMULARIO.forEach(registro => {
        document.querySelector("#tbl-mensualidades tbody").innerHTML += `<tr>
                                                                        <td>${registro.datos_propietario.nombre}</td>
                                                                        <td>${calcularEdad(new Date(registro.datos_propietario.fech_nac))} años</td>
                                                                        <td>${registro.datos_propietario.genero === H ? "Hombre" : "Mujer"}</td>
                                                                        <td>${0}</td>
                                                                        <td>${registro.datos_inmueble.fech_mensualidad}</td>
                                                                        <td><a>Ver</a></td>
                                                                    <tr/>`;
    });    
}

function calcularEdad(fecha_nacimiento){
    let ageDifMs = Date.now() - fecha_nacimiento.getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function recorrerVector() {
    let arreglo = [3, 5, 8, 1];
    // let r = arreglo.forEach((element, indice) => console.log (indice));
    let r = arreglo.map((element, indice) => element + 1);
    // console.log (indice, element);
    console.log("La función retorna: ", r);
}

function condicionalReducido() {
    let x, year = 1990;
    x = year > 2000 ?  5 :  6;
    return x;
}