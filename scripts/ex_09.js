/*Crie um programa que declare duas variáveis inteiras.
O programa deve mostrar no console:
Os dois valores do maior para o menor.*/

function maiormenor(){

    let numero=parseInt(prompt("Insira um número"));
    let numero2=parseInt(prompt("Insira outro número"));

    if(numero>numero2){
        console.log(numero+", "+ numero2);
    }else{
        console.log(numero2+", "+ numero);
    }

}