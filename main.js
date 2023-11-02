function checkWin() {
    const lines = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    for (const line of lines) {
        const [a, b, c] = line;
        const divA = document.querySelector(`.div${a}`);
        const divB = document.querySelector(`.div${b}`);
        const divC = document.querySelector(`.div${c}`);

        if (divA.classList.contains('rouge') && divB.classList.contains('rouge') && divC.classList.contains('rouge')) {
            return 'rouge';
        }

        if (divA.classList.contains('vert') && divB.classList.contains('vert') && divC.classList.contains('vert')) {
            return 'vert';
        }
    }

    return null;
}



let div = document.querySelector(".parent");
let estRouge = true;
let divs = document.querySelectorAll('.div1, .div2, .div3, .div4, .div5, .div6, .div7, .div8, .div9');

divs.forEach((div) => {
    div.addEventListener('click', (e) => {
        if (!e.target.classList.contains('selected')) {
            if (estRouge) {
                e.target.classList.remove('vert');
                e.target.classList.add('rouge', 'selected');
                estRouge = false;
            } else {
                e.target.classList.remove('rouge');
                e.target.classList.add('vert', 'selected');
                estRouge = true;
            }

            const winner = checkWin();
            if (winner) {
                alert(`Le joueur ${winner} a gagné !`);
                // Réinitialisez le jeu ici si vous le souhaitez.
            }
        }
    });
});