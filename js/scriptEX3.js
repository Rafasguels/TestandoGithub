str = "";
corInfracao = "";

for(var i=0; i < detran.length; i++){
 
    if(detran[i].pontos >=7){
        corInfracao = "class='infra_grave'";
    }else{                   
        corInfracao = "class='infra_padrao'";
    }                    
     
     str = str +"<p>";
     str = str +"<span "+corInfracao+">";
     str = str + "Código = "+detran[i].cod + "</br>";
     str = str + "Descrição = "+detran[i].descricao+ "</br>";
     str = str + "Gravidade = "+detran[i].gravidade+ "</br>";
     str = str + "Pontos na carteira = "+detran[i].pontos+ "</br>";
     str = str + "Valor R$ "+detran[i].valor+ "</br>";
     str = str +"</span>";
     str = str +"</p>";
 }  ~
 document.write(str);