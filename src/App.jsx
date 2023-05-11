import './App.scss';
import {DogBigLetter, DogCircle, DogOddEven, DogSquare, DogsColor, Medis, Paukstis, Text,ZebraiBebrai,Zuikis} from './Components/001';
//import {  Buttons, Buttons2, Buttons3, Buttons4, Buttons5 } from './Components/002';

import './buttons.scss';

function App() {

 
  return (
    <div className="App">
      <header className="App-header">
       <DogBigLetter />
       <DogOddEven />
       <DogsColor />
       <DogCircle />
       <DogSquare />
      </header>
    </div>
  );
}

export default App;
