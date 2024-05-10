//funcion que aplica el estilo a la opcion seleccionada y quita la previamente seleccionada
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className ="";
    opciones[1].className ="";
    opciones[2].className ="";
    opciones[3].className ="";
    opciones[4].className ="";
    link.className ="seleccionado"

    //hacemos desaparecer el menu una vez que se ha seleccionado una opcion en el modo responsive
    var x =document.getElementById("nav");
    x.className ="";
}
//funcion que muestra el menu
function responsiveMenu() {
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

