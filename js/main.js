$(document).ready(function(){

    $('#cpf').mask('000.000.000-00');

    $('#telefone').mask('(00) 0000-00009')
    $('#telefone').blur(function(e){
        $(this).val().length === 15 ? $('#telefone').mask('(00) 00000-0009') : $('#telefone').mask('(00) 0000-00009')
    })

    $('#cep').mask('00000-000')

    $('form').validate({
        rules:{
            nome:{
                required: true,
            },
            telefone:{
                required: true,
            },
            email:{
                required: true,
                email: true
            },
            cpf:{
                required: true,
            }
        },
        messages:{
            nome: {
                required: 'Por favor, insira o seu nome',
            },
            telefone:{
                required: 'O campo telefone é obrigatório',
            },
            email:{
                required: 'O campo e-mail é obrigatório',
                email: 'Digite um e-mail válido'
            },
            cpf: {
                required: 'O campo CPF é obrigatório',
            }
        },
        submitHandler: function(form){
            alert('Formulário enviado com sucesso!')
        },
        invalidHandler: function(evento,validator) {
            let camposIncorretos = validator.numberOfInvalids();
            alert(`Existem ${camposIncorretos} campos incorretos`);
        },
    })

    
})