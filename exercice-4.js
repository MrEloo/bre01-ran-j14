window.addEventListener("DOMContentLoaded", function(){
    
    let ul = document.createElement("ul")
    
    
    let pokemons = ["Pikachu", "Salameche", "Bulbizarre", "Carapuce"];
    
    for(let i = 0; i < pokemons.length ; i++){
        
        
        let li = document.createElement("li")
        
        li.innerText = pokemons[i]
        
        ul.appendChild(li)
        document.body.appendChild(ul)
    }
});