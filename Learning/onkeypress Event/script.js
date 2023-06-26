const main = document.getElementById('main');

const div = document.createElement('div');
main.appendChild(div);

div.style.width = '100px';
div.style.height = '100px';
div.style.backgroundColor = 'black';
div.style.position = "absolute";

let x = 0;
let y = 0;

div.style.left = x + "px";
div.style.top = y + "px";

// onkeypress - reaguje na znaki alfabetu
// onkeydown - reaguje na wszystkie przyciski na klawiaturze (również te kontrolne) 

window.onkeydown = (e) => {
    e.preventDefault();
    console.log(e.keyCode);
    switch ( e.keyCode ){
        case 37:
            x -= 10;
            break;
        case 38:
            y -= 10;
            break;
        case 39:
            x += 10;
            break;
        case 40:
            y += 10;
            break;
        default:
            break;
    }
    div.style.left = x + "px";
    div.style.top = y + "px";
}

console.log(typeof(window.innerWidth));

main.style.width = window.innerWidth + "px";
main.style.height = window.innerHeight + "px";

main.style.border = "2px solid black";

window.onresize = () => {
    console.log("Reakcja na zdarzenie");
    main.style.width = window.innerWidth + "px";
    main.style.height = window.innerHeight + "px";
};