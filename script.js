const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular')
const resultado = document.querySelector('#result');

function btnOnClick () {
    const sumaResult = input1.value + input2.value;
    resultado.innerText = "El Resultado es: " + sumaResult;
}