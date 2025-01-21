const form = document.querySelector('.form')
const resultado = document.querySelector('#resultado')

function processarDados(event){
    event.preventDefault();

    let altura = parseFloat(form.querySelector('#altura').value);  
    let peso = parseFloat(form.querySelector('#peso').value);

    calcularIMC(altura,peso)
}

function calcularIMC(altura,peso){
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert("Por favor, insira valores válidos para altura e peso.");
        return;
    }

    imc = peso / (altura*altura)
    
    resultadoIMC(imc)
}

function resultadoIMC(imc){
    resultadoFinal = ''

    resultadoFinal = 
    imc < 18.5 ? `IMC: ${imc.toFixed(2)} - Abaixo do peso` :
    imc < 24.9 ? `IMC: ${imc.toFixed(2)} - Peso normal` :
    imc < 29.9 ? `IMC: ${imc.toFixed(2)} - Sobrepeso` :
    imc < 34.9 ? `IMC: ${imc.toFixed(2)} - Obesidade grau 1` :
    imc < 39.9 ? `IMC: ${imc.toFixed(2)} - Obesidade grau 2` :
    `IMC: ${imc.toFixed(2)} - Obesidade grau 3`;

    resultado.innerHTML += `<p>${resultadoFinal}</p>`
}

form.addEventListener('submit',processarDados)





//if else padrão:
// if (imc < 18.5) {
//     resultadoFinal = `IMC: ${imc.toFixed(2)} - Abaixo do peso`;
// } else if (imc >= 18.5 && imc < 24.9) {
//     resultadoFinal = `IMC: ${imc.toFixed(2)} - Peso normal`;
// } else if (imc >= 25 && imc < 29.9) {
//     resultadoFinal = `IMC: ${imc.toFixed(2)} - Sobrepeso`;
// } else if (imc >= 30 && imc < 34.9) {
//     resultadoFinal = `IMC: ${imc.toFixed(2)} - Obesidade grau 1`;
// } else if (imc >= 35 && imc < 39.9) {
//     resultadoFinal = `IMC: ${imc.toFixed(2)} - Obesidade grau 2`;
// } else {
//     resultadoFinal = `IMC: ${imc.toFixed(2)} - Obesidade grau 3`;
// }

// //ternário 
// resultadoFinal = 
//     imc < 18.5 ? `IMC: ${imc.toFixed(2)} - Abaixo do peso` :
//     imc < 24.9 ? `IMC: ${imc.toFixed(2)} - Peso normal` :
//     imc < 29.9 ? `IMC: ${imc.toFixed(2)} - Sobrepeso` :
//     imc < 34.9 ? `IMC: ${imc.toFixed(2)} - Obesidade grau 1` :
//     imc < 39.9 ? `IMC: ${imc.toFixed(2)} - Obesidade grau 2` :
//     `IMC: ${imc.toFixed(2)} - Obesidade grau 3`;
