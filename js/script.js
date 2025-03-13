 // Aquí tu código;

 document.getElementById('agregar').addEventListener('click', function() {
    let nuevoElemento = prompt('Añade un nuevo elemento');

    if(nuevoElemento) {
        let li = document.createElement('li');

        li.textContent = nuevoElemento;

        document.getElementById('lista').appendChild(li)
    }
 });