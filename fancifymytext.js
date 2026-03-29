const BigButton = document.getElementById("Bigger");

BigButton.addEventListener("click", function() {
    alert("Hello, world!");
    TextArea.style.fontSize = "24pt";
});

document.getElementById("fancy").addEventListener("change",function(){
    if(this.checked){
        alert("Fancifying the text!");
        TextArea.style.color = "blue";
        TextArea.style.fontWeight = "bold";
        TextArea.style.textDecoration = "underline";
    }
   

});
document.getElementById("Moo").addEventListener("click",function(){
    const text = TextArea.value.toUpperCase();
    let parts = text.split(".");
    TextArea.value = parts.join("-Moo.");
});

document.getElementById("boring").addEventListener("change",function(){
        if(this.checked){
            alert("Back to boring...");
            TextArea.style.color = "black";
            TextArea.style.fontWeight = "normal";
            TextArea.style.textDecoration = "none";
            
        }
});