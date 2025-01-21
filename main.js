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