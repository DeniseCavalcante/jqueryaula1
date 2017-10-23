//var botao = document.getElementById("btnCadastrar");
// botao.onclick = function(event){
// event.preventDefault();
// alert("mensagem marota");
// };


// $("#btnCadastrar").click(function(event){
//     event.preventDefault();
//     alert("mensagem marota");
// });

var comecou= false;
var letrasChutadas = [];
var palavra = "";

$("#cadastro button").click(function (event) {
    event.preventDefault();
    // alert("mensagem marota");
    //declarar varavel palavra com o valor do input
    palavra = $("#palavra").val(); //metodo
    //verificar se o campo esta vazio
    if (palavra === "") {
        //se estiver vazio mostra uma msg de errro
        alert("por favor preencha o campo!");
    } else {
        for (var i = 0; i < palavra.length; i++) {
            var span = $("<span>" + palavra[i] + "</span>");
            span.appendTo(".letras");

        }

        //se nao estiver vazio montar os underlines
        //se nao estiver vazio mostrar a tela forca
        //adicionar classe na tela da forca
        $("#forca").addClass("visivel");
        //remover a classe na tela do cadastro
        $("#cadastro").removeClass("visivel");
        comecou = true;
    }


});

$(document).keydown(function (event) {
    if (comecou) {
        var letra = event.key;
        //validando se é apenas uma letra
        if(letra.length > 1){
            return;
        }
 
        //vai verificar se a letra ja foi utilizada
if (letrasChutadas.indexOf(letra) !== -1){
    return;
}
        //registrar a letra utilizada
        letrasChutadas.push(letra);
        var span = $("<span>"+letra+"</span>");
        console.log(span);
        span.appendTo(".letras-usadas");

        //letra existe na palavra cadastrada?
        if(palavra.indexOf(letra) != -1){

        }
        //se sim 
        //mostra no campo a letra corresponde
        for ( var i = 0; i< palavra.length; i++){
            var letra2 = palavra[i];
            //se a letra que pressionei for igual a letra que estou iterando 
            if(letra==letra2){
                // i é o indice que temos que mostrar na tela
                $(".letras span"). eq(i).addClass("visivel");
            }
        }
        //se a palavra estiver completa
        //mostra o final correto
        //se nao 
        //mostra o membro do boneco
        //se excedeu as tentativas 
        //familia chora e fica triste

    }


});