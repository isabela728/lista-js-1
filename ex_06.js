/*Crie um algoritmo que peça ao usuário uma letra do alfabeto.
O programa deverá verificar se a letra digitada é:
    ➔ Vogal
    ➔ Consoante
E mostrar o resultado no console*/

function verificaLetra(){

    let letra=prompt("Insira uma letra do alfabeto");

    if(letra == "a"||letra == "e"||letra == "i"||letra == "o"||letra == "u"){
        console.log("Vogal");
    }else{
        console.log("Consoante");
    }

}