import './App.css';
import { useState } from 'react';
import CurrScreen from './CurrScreen';
import MainNav from './MainNav';
import useToken from './useToken';

function App() {

  //
  const [currScreen, setCurrScreen] = useState('home');
  const { token, setToken } = useToken();

  //
  return (
    <div>
      <MainNav setCurrScreen={setCurrScreen} token={token} setToken={setToken}/>
      <div>
        <CurrScreen currScreen={currScreen} token={token} setToken={setToken}/>
      </div>
    </div>
  );
}

export default App;
