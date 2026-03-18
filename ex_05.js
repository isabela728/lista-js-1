/*Desenvolva um algoritmo que:
    ➔ Peça um número inteiro ao usuário.
    ➔ Verifique se o número é par ou ímpar.
O programa deverá:
    ➔ Se for par, transformá-lo em ímpar.
    ➔ Se for ímpar, transformá-lo em par.
    ➔ Mostre o valor final no console.
*/

function parImpar(){

    let transform=0;

    let numero=parseFloat(prompt("Insira um número inteiro"));

    if(numero%2==0){
        console.log("Transformando número par em ímpar...");
        transform=numero+1;
        console.log(transform);
    }else{
        console.log("Transformando número ímpar em par...");
        transform=numero+1;
        console.log(transform);
    }

}