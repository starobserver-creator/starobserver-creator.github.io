const BigButton = document.getElementById("Bigger");

BigButton.addEventListener("click", function() {
    // alert("Hello, world!");
    document.getElementById("TextArea").style.fontSize = "24pt";
});

document.getElementById("fancy").addEventListener("change",function(){
    document.getElementById("TextArea").style.fontFamily = "cursive";
    document.getElementById("boring").checked = false;

});

document.getElementById("boring").addEventListener("change",function(){
    document.getElementById("TextArea").style.fontFamily = "Arial";
    document.getElementById("fancy").checked = false;
});