var premier_nombre = document.getElementById("premier_nombre");
var deuxieme_nombre = document.getElementById("deuxieme_nombre");

document.getElementById("valider").addEventListener("click", function(){
    alert(parseInt(premier_nombre.value) * parseFloat(deuxieme_nombre.value))
})
