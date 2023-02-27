
//Esto comentado eran formas que probe antes y no me funcionaron y no sé por qué, help.
//Tuve muchos problemas con el js, aunque al final encontré la forma de que funcione, no me
//queda claro qué hago mal para que la otra forma no funcione. Lo dejo comentado por las dudas.

//Tambien quise usar un mouseover (o mouseenter), con las barras de habilidades cosa
//de agregar más js. La idea era que las barritas se rellenen cuando le pasara el mouse encima
//pero no me salió.



// let claro = "##f7f7f7"
// let oscuro = "#121212"
// document.getElementById("btn-modo-dia").onclick= function() {
//     console.log("captura boton dia");
//     document.body.style.backgroundColor = claro;
// };

// document.getElementById("btn-modo-noche").onclick= function() {
//     console.log("captura boton noche");
//     document.body.style.backgroundColor = oscuro;
// };


// (El DEFAULT es modo oscuro)

document.getElementById("btn-modo-dia").addEventListener('click', function(){
    document.body.classList.add('modoclaro');
})

document.getElementById("btn-modo-noche").addEventListener('click', function(){
    document.body.classList.remove('modoclaro');
})



