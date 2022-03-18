"use strict";
$(function(){
    $("#calcular").click(function(){
        calculo();
    });
});  

function calculo(){
    let totalR = $("#total").val();
    let vista = $("input:radio[name=compra]:checked").val();
    let deb = $("input:radio[name=compra]:checked").val();
    let cred = $("input:radio[name=compra]:checked").val();
    let resul = $(".compra").load();
    if(vista){
        resul = totalR-(10/100);
        $("#pagar").text(`${resul}`);
    }
    if(deb){
        resul = totalR-(7/100);
        $("#pagar").text(`${resul}`);
    }
    if(cred){
        resul = totalR-0;
        $("#pagar").text(`${resul}`);
    }
}