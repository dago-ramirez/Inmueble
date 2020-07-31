document.getElementById("btn-guardar-inmueble").addEventListener('click', (e) =>{
	if(document.getElementById("frm-mensualidad").reportValidity()){
        var nombre, documento, genero, fecha_nac, nombre_almacenado, documento_almacenado,
            genero_almacenado, fecha_nac_almacenada;
        nombre = document.getElementById("nombre-propietario");
        localStorage.setItem("nombre-propietario", nombre.value);
        nombre_almacenado = localStorage.getItem("nombre-propietario");

        documento = document.getElementById("doc-propietario");
        localStorage.setItem("doc-propietario", documento.value);
        documento_almacenado = localStorage.getItem("doc-propietario");

        genero = document.getElementById("genero-propietario");
        localStorage.setItem("genero-propietario", genero.value);
        genero_almacenado = localStorage.setItem("genero-propietario");


        fecha_nac = document.getElementById("fecha-nac-propietario");
        localStorage.setItem("fecha-nac-propietario", fecha_nac.value);
        fecha_nac_almacenada = localStorage.setItem("fecha-nac-propietario");


        console.log(nombre_almacenado, documento_almacenado, genero_almacena, fecha_nac_almacenada);        
    }else{
        //alert("Error de validación de campos.")
    }
}
);


	
    	
$(document).ready((e) => {
    $("#btn-adicionar").click((e) => {
        $('#modal-adicionar').modal('toggle');
    });
});