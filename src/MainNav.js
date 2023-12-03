
//
export default function MainNav({setCurrScreen, token, setToken}) {

    //
    const changeScreen = (e, screen) => {
        e.preventDefault()
        setCurrScreen(screen)
    }

    //
    const logOut = e => {
        e.preventDefault()
        setToken(undefined)
        setCurrScreen('home')
    }

    //
    return (
        <div>
            {token ? (
                <ul>
                    <li>
                        <a href="#" onClick={e => changeScreen(e, 'home')}>Home</a>
                    </li>
                    <li>
                        <a href="#" onClick={e => logOut(e)}>Log Out</a>
                    </li>
                </ul>
            ) : (
                <ul>
                    <li>
                        <a href="#" onClick={e => changeScreen(e, 'home')}>Home</a>
                    </li>
                    <li>
                        <a href="#" onClick={e => changeScreen(e, 'signup')}>Sign Up</a>
                    </li>
                    <li>
                        <a href="#" onClick={e => changeScreen(e, 'login')}>Log In</a>
                    </li>
                </ul>
            )}
        </div>
    );
}
