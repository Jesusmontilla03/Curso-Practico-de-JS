const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const clase = document.getElementsByClassName('one');
const identificador = document.getElementById('two');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    clase,
    identificador,
    input
});

h1.innerText = 'EXELCIOR'