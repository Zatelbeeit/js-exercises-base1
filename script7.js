var shoeSizeInput = document.getElementById("pointure");
var birthYearInput = document.getElementById("annee");
var btnElement = document.getElementById("valider");

btnElement.addEventListener("click", function(){

    var multiplyShoeSize = shoeSizeInput.value * 2;
    var addFive = multiplyShoeSize + 5;
    var timesFifty = addFive * 50;
    var minusBirthYear = timesFifty - birthYearInput.value;
    var addBigNumber = minusBirthYear + 1766;
    
    alert(addBigNumber)



});