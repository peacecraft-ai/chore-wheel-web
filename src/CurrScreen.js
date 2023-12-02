import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';

export default function CurrScreen({currScreen}) {
    if(currScreen == 'login') {
        return <Login/>
    }
    else if(currScreen == 'signup') {
        return <SignUp/>
    }

    return <Home/>
}
