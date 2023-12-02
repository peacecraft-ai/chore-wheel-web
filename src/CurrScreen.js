import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';

export default function CurrScreen({currScreen, setToken, token}) {

    //
    if(token) {
        return <Home/>
    }
    else {
        if(currScreen == 'login') {
            return <Login setToken={setToken}/>
        }
        else if(currScreen == 'signup') {
            return <SignUp/>
        }

        return <Home/>
    }
}
