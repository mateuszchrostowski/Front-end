let listaTaskow = null;

const task = (index, nazwa) => {
    return {
        index: index,
        name: nazwa
    }
};

const historiaTaskow = localStorage.getItem('tasksHistory');
if ( historiaTaskow ){
    listaTaskow = JSON.parse(historiaTaskow);
    console.log(listaTaskow);
} else {
    listaTaskow = [];
}

document.querySelector('#dodajTaska').onclick = () => {
    const nowyTask = task(listaTaskow.length, document.querySelector('input[name="nowyTask"]').value);
    listaTaskow.push(nowyTask);
    console.log(listaTaskow);
    localStorage.setItem('tasksHistory', JSON.stringify(listaTaskow));
}


document.querySelector('#dodajWpis').onclick = () => {
    console.log("OK");
    const tekst = document.querySelector('input[name="nowyTask"]').value;

    const paragraf = document.createElement('p');
    paragraf.innerText = tekst;
    paragraf.id = "identyfikator";
    paragraf.style.color = "red";

    document.querySelector('.listaTaskow').appendChild(paragraf);
}
