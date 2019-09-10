var age = document.getElementById("age")

document.getElementById("valider").addEventListener("click", function(){
    if ( age.value > 18 )
    {
        age.value = ("Vous êtes majeur")
    }
    else
    {
        age.value = ("Vous êtes mineur")
    }
    alert(age.value)
})