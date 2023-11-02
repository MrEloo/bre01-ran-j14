window.addEventListener("DOMContentLoaded", function(){
    
    let section = document.querySelector("#deuxieme_section")
    
    let newTitle = document.createElement("h2")
    let newText = document.createElement("p")
    
    newText.innerText = "Le paragraphe de la deuxième section"
    newTitle.innerText = "Le titre de la deuxième section"   
    
    section.appendChild(newTitle)
    section.appendChild(newText)
    
    console.log("newTitle")
    
});