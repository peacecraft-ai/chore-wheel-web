import './App.css';
import { useState } from 'react';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';

function App() {

  //
  const [currScreen, setCurrScreen] = useState('home');

  //
  const changeScreen = (e, screen) => {
    e.preventDefault();
    setCurrScreen(screen);
  }

  //
  function CurrScreen() {
    let screen = <Home/>

    if(currScreen == 'login') {
      screen = <Login/>
    }
    else if(currScreen == 'signup') {
      screen = <SignUp/>
    }

    return (
      <div>
        {screen}
      </div>
    );
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
      <CurrScreen/>
    </div>
  );
}

export default App;
