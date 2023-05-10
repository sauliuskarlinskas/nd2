import { useState } from "react";
import rand from "./Functions/rand"

function Buttons() {

    const [shape, setShape] = useState('square');

    const changeShape = _ => {
        setShape(shape => shape === 'square' ? 'circle' : 'square');
    }

    return (
        <>
            <div className={shape}></div>
            <button onClick={changeShape}>change</button>
        </>
    )
}

function Buttons2() {

    const [shape, setShape] = useState('square');
    const changeShape = _ => {
        setShape(shape => shape === 'square' ? 'circle' : 'square');
    }

    const [count, setCount] = useState(rand(5,25));
    const random = _ => {
        setCount(c => rand(5,25) );
    }

    return (
        <>
            <div className={shape}>{count}</div>
            <button onClick={changeShape}>change</button>
            <button onClick={random}>random</button>
        </>
    )
}


export { Buttons, Buttons2 }