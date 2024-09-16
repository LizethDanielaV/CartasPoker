//Agregar los datos del form automaticamente en la tabla
var formu = document.getElementById('formu');

formu.addEventListener('submit', function(event){
    event.preventDefault();

    let obj ={
         numero :document.getElementById('numero').value,
        carta :document.getElementById('descripcion').value,
        cantidad: 0
    }
    
    let datos = JSON.parse(localStorage.getItem('daticos'));
    datos.push(obj);
    localStorage.setItem('daticos', JSON.stringify(datos));
    pintarTabla();
});

//Contar los click
/*
var imagen = document.querySelector('.contenIndividual');
imagen.addEventListener('click', function(event){
    event.preventDefault();
    let datos = JSON.parse(localStorage.getItem('daticos'));
    datos.forEach(function(item){
        if(item.numero == this.dataset.numCarta){
            item.cantidad ++;
        }
    });
    localStorage.setItem('daticos', JSON.stringify(datos));
    pintarTabla();

});*/
var btnCartas = document.querySelectorAll('.contenIndividual');

// Agregar el evento 'click' a cada elemento
btnCartas.forEach(function(btnCarta) {
    btnCarta.addEventListener('click', function() {
        // Obtener los datos de localStorage
        var datos = localStorage.getItem('daticos');
        datos = JSON.parse(datos);

        // Recorrer los elementos del arreglo 'datos'
        for (let item of datos) {
            // Verificar si el número de la carta coincide con el 'data-carta'
            if (item.numero == this.dataset.carta) {
                item.cantidad++;
            }
        }

        // Guardar los datos actualizados en localStorage
        localStorage.setItem('daticos', JSON.stringify(datos));

        // Llamar a la función para pintar la tabla
        pintarTabla();
    });
});

//Funcion para cargar el JSON en el LocalStorage
function cargarJSON() {
    let miObjeto = [
        { 'numero': '1', 'carta': 'as', 'cantidad': '0' },
        { 'numero': '2', 'carta': '2 de diamantes', 'cantidad': '0' }
    ];
    localStorage.setItem('daticos', JSON.stringify(miObjeto));
}
//Pinto la tabla con los datos que de por sí ya va a tener el localStorage
function pintarTabla(){
    //convierto los datos de nuevo a un arreglo de objetos
    let datos = JSON.parse(localStorage.getItem("daticos"));

    let bodyTb = document.getElementById('bodyTabla')
    //borro cualquier contenido dentro del cuerpo de la tabla
    bodyTb.innerHTML='';
    //recorro el arreglo y agrego a la tabla los datos
    datos.forEach(function(item){
        bodyTb.innerHTML += `<tr>
  				<td>${item.numero}</td>
  				<td>${item.carta}</td>
  				<td>${item.cantidad}</td>
			</tr>`;
    });
}

cargarJSON();
pintarTabla();



