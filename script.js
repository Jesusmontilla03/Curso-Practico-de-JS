const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular')
const resultado = document.querySelector('#result');

// form.addEventListener('submit', sumarInputValues);
btn.addEventListener('click', sumarInputValues);

function sumarInputValues () {
    // console.log(event);
    // event.preventDefault();
    const sumaResult = input1.value + input2.value;
    resultado.innerText = "El Resultado es: " + sumaResult;
}