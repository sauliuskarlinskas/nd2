import './App.scss';
import {DogCircle, DogOddEven, DogSquare, Medis, Paukstis, Text,ZebraiBebrai,Zuikis} from './Components/001';
//import Vaisius from './Components/002';

function App() {

 
  return (
    <div className="App">
      <header className="App-header">
       <Zuikis />
       <Text text={'Nieko tokio !'}/>
       <ZebraiBebrai/>
       <Medis m1='Liepa' m2='Klevas'/>
       <Paukstis p1='Varna' p2='Kovas' textColor='lime'/>
       <DogSquare />
       <DogCircle />
       <DogOddEven />
      </header>
    </div>
  );
}

export default App;
