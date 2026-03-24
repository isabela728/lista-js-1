/*A empresa Mawer precisa realizar seu balanço financeiro anual.
Crie um algoritmo que:
Solicite para cada um dos 12 meses do ano:
    ● O ganho bruto do mês
    ● Os gastos do mês
Ao final, o programa deverá mostrar:
    ● Ganho bruto anual
    ● Gasto anual
    ● Saldo financeiro anual
O programa também deverá informar se a empresa teve:
    ● Lucro
    ● Prejuízo*/

function balancoFinanceiro(){

    let mes=1;
    let soma_ganho=0;
    let soma_gasto=0;
    let saldo=0;

    for(let i=1; i<=12; i++){
        let ganho=parseFloat(prompt("Informe o ganho bruto do mês "+i));
        let gasto=parseFloat(prompt("Informe o gasto do mês "+i));
        soma_ganho+=ganho;
        soma_gasto+=gasto;
        
    }

    saldo=soma_ganho-soma_gasto;

    alert(
    "Ganho bruto anual: R$ " + soma_ganho + "\n" +
    "Gasto anual: R$ " + soma_gasto + "\n" +
    "Saldo financeiro anual: R$ " + saldo);

    if(saldo>0){
        alert("Lucro!");
    }else if(saldo<0){
        alert("Prejuízo!");
    }else{
        alert("Não sobrou nada para o betinha!");
    }

}