console.log(document.querySelector('h3'));
console.log(document.querySelector('.h3-danger'));
console.log(document.querySelector('#parrafo'));
console.log(document.getElementById('parrafo'));
console.log("---");
console.log(document.querySelectorAll('h3'));

console.log("Modificar");
const parrafo = document.querySelector("#parrafo");
parrafo.textContent = 'texto desde js';
//parrafo.innerHTML = '<b>texto desde vanilla</b>';
parrafo.classList.add('h3-danger', 'my-2');