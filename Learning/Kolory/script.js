const podglad = document.querySelector('.podgladKoloru');
const kolor = {
    r: 0,
    g: 0,
    b: 0
}

const kolory_ls = window.localStorage.getItem('kolory');

if ( kolory_ls ){
    const kolory_ls_obj = JSON.parse(kolory_ls);
    kolor.r = kolory_ls_obj.r;
    kolor.g = kolory_ls_obj.g;
    kolor.b = kolory_ls_obj.b;

    document.querySelector('input[name="czerwony"]').value = kolor.r;
    document.querySelector('input[name="zielony"]').value = kolor.g;
    document.querySelector('input[name="niebieski"]').value = kolor.b;
}

const setLeadingZero = (value) => {
    //if ( parseInt(value) < 10 ) return `0${value}`;
    if ( value.length == 1 ) return "0" + value;
    return value;
}

// modyfikacja parametrów podglądu
const setColor = () => {
    podglad.style.backgroundColor = `rgba(${kolor.r}, ${kolor.g}, ${kolor.b})`;
    document.querySelector('#R_val').innerText = setLeadingZero(kolor.r.toString(16));
    document.querySelector('#G_val').innerText = setLeadingZero(kolor.g.toString(16));
    document.querySelector('#B_val').innerText = setLeadingZero(kolor.b.toString(16));
}

setColor();

document.querySelectorAll('input[type="range"]').forEach( (x) => {
    /* x.addEventListener('change', (e) => {
        // logika
    });*/
    x.onchange = (e) => {
        const val = parseInt(e.target.value);
        
        switch ( e.target.name ){
            case "czerwony":
                kolor.r = val;
                break;
            case "niebieski":
                kolor.b = val;
                break;
            case "zielony":
                kolor.g = val;
                break;
            default:
                break;
        }

        setColor();
        localStorage.setItem('kolory', JSON.stringify(kolor));
    };

});
