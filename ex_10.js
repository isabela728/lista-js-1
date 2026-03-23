/*Crie um programa que simule uma folha de pagamento simples.
O programa deve solicitar:
    ➔ Nome do funcionário
    ➔ Salário bruto
    ➔ Considere que a taxa de desconto do INSS é de 8%.
O programa deverá mostrar:
    ➔ Nome do funcionário
    ➔ Salário bruto
    ➔ Valor do desconto do INSS
    ➔ Salário líquido*/

function folhaPagamento(){

    let salarioL=0;
    let desconto=0;

    let nome=prompt("Informe seu nome: ");
    let salarioB=parseFloat(prompt("Informe seu salário bruto: "));

    desconto=salarioB*0.08;
    salarioL=salarioB-desconto;

    alert("Nome do funcionário: "+nome+"\n"+
        "Salário Bruto: "+salarioB+"\n"+
        "Valor do desconto do INSS: "+desconto+"\n"+
        "Salário líquido: "+salarioL );

}