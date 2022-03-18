"use strick";

$(function(){
    $("#exibir").click(function(){
        Formulario();
    })    
});  

$("#limpar").click(function() {
    $("#Form").empty()
});

                                                                                                                                                                            
function Formulario(){
    let NomeC = $("#NomedoCliente").val();
    let numeroC = $("#NumerodoCliente").val();
    let dtaluguel = $("#dataAluguel").val();
    let vlalguel = $("#valorAluguel").val();
    $("#Form").append(`
    <table>
    <tr>
    <td>Numero de serie:<td>
    <td>${NomeC}</td>
    </tr>
    <tr>
    <td>Numero do cliente:<td>
    <td>${numeroC}</td>
    </tr>
    <tr>
    <td>Data do aluguel:<td>
    <td>${dtaluguel}</td>
    </tr>
    <tr>
    <td>Valor do aluguel:<td>
    <td> R$ ${vlalguel}</td>
    </tr>`)
}