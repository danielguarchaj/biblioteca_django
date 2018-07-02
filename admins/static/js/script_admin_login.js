
$(function () {

    $('#btn_iniciar_login').on('click', function () {
        var correo = $('#txt_correo_login').val();
        var password = $('#txt_password_login').val();
        if(!correo || !password){
            alert('Ingresa un correo y una contraseña');
            return;
        }
        login_data = {correo: correo, password: password};
        $.ajax({
            url: 'http://127.0.0.1:8000/admins/login/validar_login/',
            type: 'post',
            data: { data: JSON.stringify(login_data), csrfmiddlewaretoken: $('input:hidden[name=csrfmiddlewaretoken]').val()},
            datatype: 'json',
            success: function (response) {
                switch (response.val) {
                    case '1':
                        console.log('Inicia');
                        break;
                    case '0':
                        console.log('No Inicia');
                        break;
                    default:break;
                }
            },
            error: function (error) {
                alert('Error login!');
                console.log(error);
            }
        });

    })

})
