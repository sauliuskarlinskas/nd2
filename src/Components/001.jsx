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

    const dogs = ['šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis', 'šuo'];
    const dog = dogs.map((dog, index) => {
        if (index % 2 === 0) {
            return (
                <div className="sq-bin">
                    {
                        dogs.map((d, i) => <div key={i} className="sq">{d}</div>)
                    }

                </div>
            )
        }
        else {
            return (
                <div className="crc-bin">
                    {
                        dogs.map((d, i) => <div key={i} className="crc">{d}</div>)
                    }


                </div>
            )
        }
    }
    )
}
export { Text, Zuikis, ZebraiBebrai, Medis, Paukstis, DogSquare, DogCircle, DogOddEven }