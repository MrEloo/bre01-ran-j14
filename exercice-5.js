window.addEventListener("DOMContentLoaded", function(){
    let users = [
        ["Mari", "Doucet"],
        ["Hugues", "Froger"],
        ["Alex", "Terieur"],
        ["Anne", "O'Neam"]
    ];
    
    let tableau = document.createElement("table");
    
    let thead = document.createElement("thead");
    let titreRow = document.createElement("tr");
    let titreNom = document.createElement("th");
    let titrePrenom = document.createElement("th");
    titreNom.innerText = "Prenom";
    titrePrenom.innerText = "Nom";
    titreRow.appendChild(titreNom);
    titreRow.appendChild(titrePrenom);
    thead.appendChild(titreRow);
    tableau.appendChild(thead);
    
    let tbody = document.createElement("tbody");
    
    for (let i = 0; i < users.length; i++) {
        
        let tr = document.createElement("tr");
        
        for (let j = 0; j < users[i].length; j++) {
            let td = document.createElement("td");
            td.innerText = users[i][j];
            tr.appendChild(td);
        }
        tbody.appendChild(tr); 
    }
    
    tableau.appendChild(tbody)

    document.body.appendChild(tableau); 
});