import rand from "./Functions/rand"



//1.1
function Zuikis() {
    return (
        <>
            <h1 style={{ color: "pink" }}>LABAS, ZUIKI!</h1>
        </>
    )
}


//1.2
function Text({ text }) {
    return <h1>{text}</h1>
}


//1.3
function ZebraiBebrai() {
    return (
        <>
            {
                rand(0, 1)
                    ? <h1 style={{ color: "red" }}>Zebrai ir Bebrai</h1>
                    : <h1 style={{ color: "blue" }}>Zebrai ir Bebrai</h1>
            }
        </>
    );
}


//1.4
function Medis({ m1, m2 }) {

    return (
        <div>
            <h1>{m1}</h1>
            <h2>{m2}</h2>
        </div>
    )
}

//1.5
function Paukstis({ p1, p2, textColor }) {
    return (
        <div>
            <h1 style={{ color: textColor }}>{p1}</h1>
            <h2 style={{ color: textColor }}>{p2}</h2>
        </div>
    )
}

//2
const dogs = [
    { id: 0, name: 'šunius' },
    { id: 1, name: 'šuo' },
    { id: 2, name: 'Bobikas' },
    { id: 3, name: 'kudlius' },
    { id: 4, name: 'Šarikas' },
    { id: 5, name: 'avigalvis' },
];

//2.1
function DogSquare() {

    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];


    return (
        <div className="sq-bin">
            {
                dogs.map((d, i) => <div key={i} className="sq">{d}</div>)
            }

        </div>
    )
}

//2.2
function DogCircle() {

    const dogs = ['šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis', 'šuo'];

    return (
        <div className="crc-bin">
            {
                dogs.sort((a, b) => a.length - b.length).map((d, i) => <div key={i} className="crc">{++i}.{d}</div>)
            }

        </div>
    )
}

//2.3
function DogOddEven() {
    const dogsList = dogs.map((dog, index) => {
        if (index % 2 === 0) {
            return <li className="squareRed">{dog.name}</li>;
        }
        else {
            return <li className="circle">{dog.name}</li>
        }
    })
    return <ul>{dogsList}</ul>;
}

//2.4
function DogBigLetter() {
    const dogsList = dogs.filter(dog => dog.name[0] === dog.name[0].toLowerCase()).map(dog => <li key={dog.id}>{dog.name}</li>);

    return <ul>{dogsList}</ul>;
}

//2,5
function DogsColor() {
    const dogsList = dogs.map(dog => {
        if (dog.name.length > 6) {
            return <li key={dog.id} style={{ color: 'green' }}>{dog.name.length}</li>;
        }
        else {
            return <li key={dog.id} style={{ color: 'red' }}>{dog.name.length}</li>
        }
    })
    return <ul>{dogsList}</ul>;
}
export { Text, Zuikis, ZebraiBebrai, Medis, Paukstis, DogSquare, DogCircle, DogOddEven, DogBigLetter, DogsColor }