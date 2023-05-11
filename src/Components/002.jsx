import { useState } from "react";
import rand from "./Functions/rand"

//1.
function Buttons() {

    const [shape, setShape] = useState('squareRed');

    const changeShape = _ => {
        setShape(shape => shape === 'squareRed' ? 'circle' : 'squareRed');
    }

    return (
        <>
            <div className={shape}></div>
            <button className="red" onClick={changeShape}>change</button>
        </>
    )
}

//2.
function Buttons2() {

    const [shape, setShape] = useState('squareBlue');
    const changeShape = _ => {
        setShape(shape => shape === 'squareBlue' ? 'circle' : 'squareBlue');
    }

    const [count, setCount] = useState(rand(5,25));
    const random = _ => {
        setCount(c => rand(5,25) );
    }

    return (
        <>
            <div className={shape}>{count}</div>
            <button className="blue" onClick={changeShape}>change</button>
            <button className="yellow" onClick={random}>random</button>
        </>
    )
}

//3.
function Buttons3 () {

    const [count, setCount] = useState(0);

    const add1 = _ => {
        setCount(c => c +1);
    }
    const reduse3 = _ => {
        setCount(c => c -3);
    }

    return (
        <>
            <div>{count}</div>
            <button className="black" onClick={add1}>+</button>
            <button className="grey" onClick={reduse3}>-</button>
        </>
    ) 
}

//4.
function Buttons4(){

    const [squareList, setSquareList] = useState([]);
    const addsquare = _ => {
        setSquareList([...squareList, <div className="squareRed"></div> ])
    }
    return (
        <>
            <button className="red" onClick={addsquare}>add</button>
            <div style={{display: "flex", flexWrap:"wrap"}}>{squareList}</div>
        </>
    ) 
}

//5.
function Buttons5(){

    const [squareList, setSquareList] = useState([]);
    const addsquareBlue = _ => {
        setSquareList([...squareList, <div className="squareBlue"></div> ]);
    }
    const addsquareRed = _ => {
        setSquareList([...squareList, <div className="squareRed"></div> ]);
    }
    const reset = _ => {
        setSquareList([]);
    }
    return (
        <>
            <button className="blue" onClick={addsquareBlue}>add</button>
            <button className="red" onClick={addsquareRed}>add</button>
            <button className="grey" onClick={reset}>reset</button>
            <div style={{display: "flex", flexWrap:"wrap"}}>{squareList}</div>
        </>
    ) 
}

export { Buttons, Buttons2, Buttons3, Buttons4, Buttons5 }