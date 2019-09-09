var prenom = "";
var nom = "Lou";
var ville = "Mende";
var valider = document.getElementById("valider");
valider.addEventListener("click", function(){
    alert("Bonjour \n" + prenom + "\n" + nom +"\n" + ville);
})
