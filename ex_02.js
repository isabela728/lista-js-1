/*A NASA precisa de sua ajuda para realizar um lançamento de foguete.
Crie um algoritmo que faça uma contagem regressiva para o lançamento,
iniciando em 10 e indo até 0.
Ao final da contagem, exiba a mensagem:
"Lançamento realizado!"*/

/*ESSE É PARA SE CASO O SOR QUEIRA QUE TUDO APARECA DE UMA VEZ

function lancarFoguete(){

    let numero = 10;
    let resultado = "";

    for(let i = numero; i >= 0; i--){
        resultado += i + ", ";
    }

    resultado += "Lançamento realizado!";
    
    alert(resultado);
}*/

/*E ESSE É PRA SE CASO O SOR ACEITE SER UM DE CADA VEZ AO APERTAR OK*/

function lancarFoguete(){

    let numero=10;

    while(numero>=0){

        alert(numero);
        numero--;

    }

    alert ("Lançamento realizado!");

}