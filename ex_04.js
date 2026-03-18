/*Crie um algoritmo que solicite 4 valores inteiros ao usuário.
Ao final, o programa deve mostrar os números em ordem decrescente.*/

function ordenar(){

    let numeros = [];
    let resultado = "";

    for (let i = 0; i < 4; i++) {
        numeros[i] = parseInt(prompt("Digite um número:"));
    }

    for (let i = 0; i < 4; i++) {
        for (let j = i + 1; j < 4; j++) {
            
            if (numeros[i] < numeros[j]) {
                let temp = numeros[i];
                numeros[i] = numeros[j];
                numeros[j] = temp;
            }

        }
    }

    for (let i = 0; i < 4; i++) {
        resultado += numeros[i];

        if (i < 3) {
            resultado += ", ";
        }
    }

    alert(resultado);

}