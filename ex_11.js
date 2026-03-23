/*Baseando-se no exercício anterior, crie um programa que calcule o desconto
do INSS de acordo com a faixa salarial.
Tabela de descontos
Faixa Salarial Desconto
    Até R$ 1.000,00 8%
    De R$ 1.000,01 até R$ 1.500,00 8,5%
    Acima de R$ 1.500,00 9%
O programa deverá mostrar:
    ➔ Salário informado
    ➔ Taxa de desconto aplicada
    ➔ Valor do desconto
    ➔ Salário líquido*/

function descontoINSS(){

    let salarioL=0;
    let desconto=0;

    let nome=prompt("Informe seu nome: ");
    let salarioB=parseFloat(prompt("Informe seu salário bruto: "));

    if(salarioB<=1000){
        desconto=salarioB*0.08;
    }else if(salarioB>1000 && salarioB<=1500){
        desconto=salarioB*0.085;
    }else{
        desconto=salarioB*0.09;
    }

    salarioL=salarioB-desconto;

    alert("Nome do funcionário: "+nome+"\n"+
        "Salário Bruto: "+salarioB+"\n"+
        "Valor do desconto do INSS: "+desconto.toFixed(2) +"\n"+
        "Salário líquido: "+salarioL.toFixed(2) );

}