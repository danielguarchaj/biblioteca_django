var Administradores = []; //array Administradores que contendra todos los administradores ingresados por el usuario en localStorage

var administrador = { //Protoripo administrador que sirve para crear nuevos administradores
    id: '',
    nombres: '',
    apellidos: '',
    direccion: '',
    telefono: '',
    correo: '',
    password: '',
    genero: '',
    nacimiento: '',
    cui: '',
    municipio: ''
};

function ValidarRegistroNuevo() { //se validan los campos del nuevo registro y se inserta si no hay error si hay error se notifica al usuario
    var error = false;
    var mensaje = '';

    if ($('#txt_nombres').val() == '') {
        mensaje += '\n-Nombre invalido';
        error = true;
    }

    if ($('#txt_apellidos').val() == '') {
        mensaje += '\n-Apellido invalido';
        error = true;
    }

    if ($('#txt_direccion').val() == '') {
        mensaje += '\n-Direccion invalida';
        error = true;
    }

    if (!ValidarTelefono($('#txt_telefono').val())) {
        mensaje += '\n-Telefono invalido';
        error = true;
    }

    if (!ValidarCorreo($('#txt_correo').val())) {
        mensaje += '\n-Correo invalido';
        error = true;
    }

    /*if (CorreoDuplicado($('#txt_correo').val())) {
        mensaje += '\n-El correo ' + $('#txt_correo').val() + ' ya esta registrada con otra cuenta';
        error = true;
    }*/

    if (!ValidarPassword($('#txt_password').val())) {
        mensaje += '\n-La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros simbolos';
        error = true;
    }

    if ($('#txt_password').val() != $('#txt_confirmar_password').val()) {
        mensaje += '\n-Las contraseñas no coinciden';
        error = true;
    }

    if (!$('input:radio[name=radio_genero]:checked').val()) {
        mensaje += '\n-Seleccione su genero';
        error = true;
    }

    if (!ValidarFecha($('#txt_nacimiento').val())) {
        mensaje += '\n-Formato de fecha incorrecta';
        error = true;
    }

    if (!ValidarCui($('#txt_cui').val())) {
        mensaje += '\n-Cui invalido';
        error = true;
    }

    if (!$('input:radio[name=radio_autorizacion_menores]:checked').val() && !MayorEdad($('#txt_nacimiento').val())) {
        mensaje += '\n-Debes indicar que tienes autorizacion';
        error = true;
    }

    if (!$("#chk_terminos_condiciones").prop("checked")) {
        mensaje += '\n-Debes aceptar los terminos y condiciones de uso';
        error = true;
    }

    if (!error) {
        var nuevo_administrador = Object.create(administrador);
        nuevo_administrador.id = Administradores.length + 1;
        nuevo_administrador.nombres = $('#txt_nombres').val();
        nuevo_administrador.apellidos = $('#txt_apellidos').val();
        nuevo_administrador.direccion = $('#txt_direccion').val();
        nuevo_administrador.telefono = $('#txt_telefono').val();
        nuevo_administrador.correo = $('#txt_correo').val();
        nuevo_administrador.password = $('#txt_password').val();
        nuevo_administrador.genero = $('input:radio[name=radio_genero]:checked').val();
        nuevo_administrador.nacimiento = $('#txt_nacimiento').val();
        nuevo_administrador.cui = $('#txt_cui').val();
        nuevo_administrador.municipio = $('#slc_municipio').val();
        //AJAX
        $.ajax({
            url: 'http://127.0.0.1:8000/admins/registro/nuevo_admin/',
            type: 'post',
            //data: {nuevo_administrador: nuevo_administrador, csrfmiddlewaretoken: $('input:hidden[name=csrfmiddlewaretoken]').val()},
            data: { nombres: $('#txt_nombres').val(),
                    apellidos: $('#txt_apellidos').val(),
                    direccion: $('#txt_direccion').val(),
                    telefono: $('#txt_telefono').val(),
                    correo: $('#txt_correo').val(),
                    password: $('#txt_password').val(),
                    genero: $('input:radio[name=radio_genero]:checked').val(),
                    nacimiento: $('#txt_nacimiento').val(),
                    cui: $('#txt_cui').val(),
                    municipio: $('#slc_municipio').val(), csrfmiddlewaretoken: $('input:hidden[name=csrfmiddlewaretoken]').val()},
            datatype: 'json',
            success: function (response) {
                alert(response)
                switch (response.val) {
                    case 0:
                        alert('Internal Server Error');
                        break;
                    case 1:
                        alert('Administrador agregado');
                        break;
                    case 2:
                        alert('Correo repetido');
                        break;
                    default:
                }
            },
            error: function (error) {
                alert('Error agregando' + error)
            }
        });

    } else {
        alert(mensaje);
    }
}

$(function() {
    $('#btn_registrar').click(function() { //boton registrar que llama la funcion para validar registro
        ValidarRegistroNuevo();
    });
    $('#slc_departamento').on('change', function() { //funcion que se ejecuta en el evento change del select del departamento
        $.ajax({
            url: 'http://127.0.0.1:8000/admins/registro/cargar_municipios/',
            type: 'post',
            data: {departamento_id: $('#slc_departamento').val(), csrfmiddlewaretoken: $('input:hidden[name=csrfmiddlewaretoken]').val()},
            datatype: 'json',
            success: function (response) {
                $('#slc_municipio').html(response);
                switch (response.val) {
                    case 0:
                        alert('Internal Server Error');
                        break;
                    case 1:
                        alert('Municipios cargados');
                        break;
                    default:break;
                }
            },
            error: function (error) {
                alert('Error cargando municipios' + error)
            }
        });
    });
    /*$("#txt_correo").blur(function() {
        var correo = $('#txt_correo').val();
        if (CorreoDuplicado(correo)) alert('El correo ' + correo + ' ya esta registrada con otra cuenta');
    });*/
});
