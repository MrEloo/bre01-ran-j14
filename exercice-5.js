window.addEventListener("DOMContentLoaded", function(){
    let users = [
        ["Mari", "Doucet"],
        ["Hugues", "Froger"],
        ["Alex", "Terieur"],
        ["Anne", "O'Neam"]
    ];
    
    let tableau = document.createElement("table");
    
    for (let i = 0; i < users.length; i++) {
        
        let tr = document.createElement("tr");
        
        for (let j = 0; j < users[i].length; j++) {
            let td = document.createElement("td");
            td.innerText = users[i][j];
            tr.appendChild(td);
        }
        tableau.appendChild(tr); 
    }

    document.body.appendChild(tableau); 
});