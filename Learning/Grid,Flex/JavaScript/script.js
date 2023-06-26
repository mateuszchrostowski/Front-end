// wybór jednego elementu
document.getElementById('paragraf').innerText = "Hello World!";
document.querySelector('#paragraf').innerHTML += "<h1>Hello world!</h1>"; // zwraca pierwsze wystąpienie elementu w kodzie
document.querySelector('.kontenerek').style.backgroundColor = 'yellow';

// wybór wielu elementów z kodu
console.log(document.getElementsByClassName('kontenerek'));
var kontenerki = document.getElementsByClassName('kontenerek'); //wybór wszystkich elementów, które mają klasę kontenerek

for( var i=0; i<kontenerki.length; i++){
    kontenerki[i].style.backgroundColor = 'green'; // ustawiam kolor konkretnego elementu w tablicy
}

for ( var kontener of kontenerki ){ // to działa jak foreach, czyli iteruje po wszystkich elementach w kolekcji
    kontener.style.backgroundColor = 'blue';
}

document.getElementsByName('nazwa') // wybierze wszystkie elementy, które mają przypisany atrybut Name
document.getElementsByTagName('div'); //wybierze wszystkie elementy <div>

// getElementById - zwraca jeden element
// getElementsByXXX - zwraca tablicę elementów

//querySelector() - zwraca zawsze jeden element, jak jest ich wiele to pierwszy pasujący
//querySelectorAll() - zwraca kolekcję iterowalną elementów

var kontenerki_tab = document.getElementsByClassName('kontenerek');
var kontenerki_kol = document.querySelectorAll('.kontenerek');

console.log(`kontenerki_tab = ${kontenerki_tab}`);
console.log(`kontenerki_kol = ${kontenerki_kol}`);

var pow2 = x => x*x;

kontenerki_kol.forEach( function(kontenerek){
    nazwaFunkcji('Zamieniam kolor'); // działa mechanizm hoistingu
    kontenerek.style.backgroundColor = "red";
    nazwaFunkcji(1);
    console.log(pow2(10));
});

kontenerki_kol.forEach( x => {
    console.log(x);
});

function nazwaFunkcji(parametr){
    console.log(parametr);
}

// funkcja strzałka - funkcja anonimowa
(parametr) => {
    console.log(parametr);
}

console.log(pow2);
console.log(typeof(pow2));
console.log(pow2(2));
pow2(10);

var nazwa = 'wartość'; // zmienna dostępna dla całego skryptu

let nazwaZmiennej = "wartość"; // zmienna zakresowa, której zakresem życia są {}

var y = 200;

{
    console.log(y);
    let x = 2;
    var y = 100;
    console.log(x);
    console.log(y);
    //console.log(nazwaZmiennej);
    let nazwaZmiennej = "Nowa wartość";
    console.log(nazwaZmiennej);
}

console.log(nazwaZmiennej);
console.log(y);
//console.log(x); // BŁAD - nazwa zmiennej nie istnieje

const pi = 3.14; // stała

const pow3 = x => x*x*x; // zmienna, która nie zmienia swojej wartości w trakcie działania skryptu 

const obj = {
    pole1: "wartość",
    pole2: "wartość",
    metoda1: () => {
        console.log('Hello World!')
    }
}



