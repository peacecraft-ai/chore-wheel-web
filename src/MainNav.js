
//
export default function MainNav({setCurrScreen, token}) {

    //
    const changeScreen = (e, screen) => {
        e.preventDefault()
        setCurrScreen(screen)
    }

    //
    return (
        <div>
            {token ? (
                <ul>
                    <li>
                        <a href="#" onClick={e => changeScreen(e, 'home')}>Home</a>
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
                        <a href="#" onClick={e => changeScreen(e, 'login')}>Log in</a>
                    </li>
                </ul>
            )}
        </div>
    );
}
