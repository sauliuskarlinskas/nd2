import './App.scss';
import {DogBigLetter, DogCircle, DogOddEven, DogSquare, DogsColor, Medis, Paukstis, Text,ZebraiBebrai,Zuikis} from './Components/001';
import {  Buttons, Buttons2, Buttons3, Buttons4, Buttons5, Sq4 } from './Components/002';
import { KvadrataiSuPlius, Medziai, PliusIatminti } from './Components/003';

import './buttons.scss';

function App() {

 
  return (
    <div className="App">
      <header className="App-header">
       <Medziai />
       <KvadrataiSuPlius />
       <PliusIatminti />
      </header>
    </div>
  );
}

export default App;
