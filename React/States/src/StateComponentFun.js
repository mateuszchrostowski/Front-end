import React, { useEffect, useState } from 'react';

function StateComponentFun() {
    const [count, setCount] = useState(0);
    const [myVal, setMyVal] = useState(null);

    useEffect(() => {
        document.title = `Klikacz naliczył ${count} kliknięć!`;

        function handleMyValChange(value){
            setMyVal(value.myVal);
        }

        // handleMyValChange - taką funkcję przekazujemy jako callback
    });


    return(
        <div>
            <h1> Prosty kliker </h1>
            <p> Kliknięto { count } razy </p>
            <button onClick={ () => { setCount(count + 1) } }>Inkrementuj</button>
        </div>
    )
}