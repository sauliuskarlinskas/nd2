import { useState } from "react"

//1.
function Medziai() {
    const [listAzuolas, setListAzuolas] = useState([]);
    const addAzuolas = _ => {
        setListAzuolas(listAzuolas => [...listAzuolas, <div className="squareBlue">Azuolas</div>]);
    }
    const [listBerzas, setListBerzas] = useState([]);
    const addBerzas = _ => {
        setListBerzas(listBerzas => [...listBerzas, <div className="squareBlue">Berzas</div>]);
    }
    const [listUosis, setListUosis] = useState([]);
    const addUosis = _ => {
        setListUosis(listUosis => [...listUosis, <div className="squareBlue">Uosis</div>]);
    }

    return (
        <>
            <div className="container">
                <div className="greenSq">
                    <div style={{ display: "flex", flexWrap: "wrap" }}>{listAzuolas}</div>
                </div>
                <div className="greenSq">
                    <div>{listBerzas}</div>
                </div>
                <div className="greenSq">
                    <div>{listUosis}</div>
                </div>
            </div>
            <div className="container">
                <button className="gray" onClick={addAzuolas}>Azuolas</button>
                <button className="blue" onClick={addBerzas}>Berzas</button>
                <button className="red" onClick={addUosis}>Uosis</button>
            </div>
        </>
    )
}


//2.
function SubState() {
    const [count, setCount] = useState(0);

    const add1 = _ => {
        setCount(c => c + 1);
    }

    return (
        <div className="squareBlack">
            <div className="content">
                <div className="content">{count}</div>
                <button className="blue" onClick={add1}>+</button>
            </div>
        </div>
    )

}
function KvadrataiSuPlius() {
    const [rect, setRect] = useState([]);
    const add = _ => setRect(r => [...r, <SubState />]);
    return (
        <>
            <button className="red" onClick={_ => add()}>Add</button>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {
                    rect.map((_a, i) => <div key={i}><SubState /></div>)
                }
            </div>
        </>
    )
}


//3.
function PliusIatminti() {
    
    const n = localStorage.getItem('number value') === null ? 0 : JSON.parse(localStorage.getItem('number value'));
    const [number, setNumber] = useState(n);
    const add1 = _ => {
        setNumber(c => c + 1);
    }

    localStorage.setItem('number value', JSON.stringify(number) );
    return (
        <>
            <div>{number}</div>
            <button className="grey" onClick={add1}>+</button>
        </>
    )
}


export { Medziai, KvadrataiSuPlius, PliusIatminti }