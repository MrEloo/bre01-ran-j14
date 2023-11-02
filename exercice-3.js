window.addEventListener("DOMContentLoaded", function(){
    let lien = document.querySelector("#lien")
    
    let paragraphre = document.createElement("a")
    
    paragraphre.href = "https://www.google.fr/"
    paragraphre.textContent = "ici"
    
    lien.appendChild(paragraphre)
});