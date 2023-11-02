window.addEventListener("DOMContentLoaded", function(){
    let form = document.querySelector("#form");
    
    let ul = document.createElement("ul");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        
        let input = document.querySelector("#newTask");
        let currentValue = input.value;
        

        if(currentValue === ""){
            alert ("erreur, votre champs est vide")
        }else {
            
        let li = document.createElement("li");
        let span = document.createElement("span")
        
        li.innerText = currentValue;
        span.innerHTML = "\u00d7"
        
        li.appendChild(span)
        ul.appendChild(li);

        document.body.appendChild(ul);
        
        input.value = ""; 
        }
        
    });
    
    ul.addEventListener("click", (e)=>{
        if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove()
        }
    }, false)
});