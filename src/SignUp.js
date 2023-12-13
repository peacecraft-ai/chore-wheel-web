import { useState, useRef } from 'react'

export default function SignUp() {

    //
    const [success, setSuccess] = useState(false)
    const errorRef = useRef(null)
    let timeoutId = null

    //
    const handleSubmit = e => {

        //
        e.preventDefault();

        //
        const username = e.target.username.value;
        const password = e.target.password.value;

        //
        fetch(
            "http://0.0.0.0:8000/create-user",
            {
                method: "POST",
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            if(data) {
                clearTimeout(timeoutId)
                errorRef.current.innerHTML = data.detail
                errorRef.current.style.display = 'block'
                timeoutId = setTimeout(
                    () => {
                        errorRef.current.style.display = 'none'
                    },
                    4000,
                )
            }
            else {
                setSuccess(true)
            }
        })
        .catch((error) => console.log(`error: ${error}`));
    };

    //
    return (
        <>
        {success ? (
            <div>Sign up successful! You can now log in.</div>
        ) : (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input id="username" name="username"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password"/>
                </div>
                <div>
                    <input type="submit" value="Sign Up"/>
                </div>
                <div ref={errorRef} className='hidden-error'>
                </div>
            </form>
        )}
        </>
    );
}
