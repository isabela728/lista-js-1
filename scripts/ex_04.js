/*Crie um algoritmo que solicite 4 valores inteiros ao usuário.
Ao final, o programa deve mostrar os números em ordem decrescente.*/

function ordenar(){

    let numeros = [];

    for (let i = 0; i < 4; i++) {
        numeros.push(Number(prompt("Digite um número:")));
    }

    numeros.sort((a,b) =>b - a);

    alert("Ordem decrescente:"+numeros);

}