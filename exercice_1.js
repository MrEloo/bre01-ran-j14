window.addEventListener("DOMContentLoaded", function(){
    let ul = document.querySelector("#ingredients")
    let li = document.createElement("li")
    let sucre = document.createTextNode("sucre")
    
    li.appendChild(sucre)
    console.log(li)
    ul.appendChild(li)
    
    
});