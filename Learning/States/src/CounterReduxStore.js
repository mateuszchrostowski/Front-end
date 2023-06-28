import React from "react";
import {incremen, decrement, increment} from './storeSlices/counterSlice'
import { useDispatch, useSelector } from "react-redux";

function Counter(){
    const count = useSelector( (state) => state.counter.value );
    const dispatch = useDispatch();

    return (
        <div>
            <h1> Prosty kliker </h1>
            <p> Kliknięto { count } razy </p>
            <button onClick={ () => { dispatch(increment()) } }>Inkrementuj</button>
            <button onClick={ () => { dispatch(decrement()) } }>Dekrementuj</button>
        </div>
    )
} 