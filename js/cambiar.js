function cambio(){
    let celda = document.getElementById("c1x1");
    celda.innerHTML = '<button onclick="cambio2()" id="c1x1">Cambiar a C2X2</button>';
}
function cambio2(){
    let celda = document.getElementById("c1x1");
    celda.innerHTML = '<label id="c1x1">X</label>';
}