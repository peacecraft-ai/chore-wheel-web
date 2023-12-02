import './App.css';
import { useState } from 'react';
import CurrScreen from './CurrScreen';

function App() {

  //
  const [currScreen, setCurrScreen] = useState('home');

  //
  const changeScreen = (e, screen) => {
    e.preventDefault();
    setCurrScreen(screen);
  }

  //
  return (
    <div>
      <div>
        <ul>
          <li>
            <a href="#" onClick={e => changeScreen(e, 'home')}>Home</a>
          </li>
          <li>
            <a href="#" onClick={e => changeScreen(e, 'signup')}>Sign Up</a>
          </li>
          <li>
            <a href="#" onClick={e => changeScreen(e, 'login')}>Log in</a>
          </li>
        </ul>
      </div>
      <div>
        <CurrScreen currScreen={currScreen}/>
      </div>
    </div>
  );
}

export default App;
