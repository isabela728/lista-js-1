/*Crie um programa que declare duas variáveis inteiras e atribua valores a elas.
O programa deverá mostrar:
➔ a) A diferença entre as duas variáveis.
➔ b) O dobro da primeira variável somado ao triplo da segunda.
➔ c) A multiplicação das duas variáveis.*/

function operacoes(){

    let diferenca=0;
    let soma=0;
    let mult=0;

    let numero=parseInt(prompt("Insira um número inteiro:"));
    let numero2=parseInt(prompt("Insira outro número inteiro:"));

    if(numero>numero2){
        diferenca=numero-numero2;
    }else{
        diferenca=numero2-numero;
    }

    soma=(2*numero)+(3*numero2);
    mult=numero*numero2;

    alert("A diferença entre as duas variáveis: "+diferenca +"\n"+
        "O dobro da primeira variável somado ao triplo da segunda: "+soma+ "\n"+
        "A multiplicação das duas variáveis: " +mult);
}