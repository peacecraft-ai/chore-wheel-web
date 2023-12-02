export default function Login({setToken}) {

    //
    const handleSubmit = e => {

        //
        e.preventDefault();

        //
        const username = e.target.username.value;
        const password = e.target.password.value;

        //
        fetch(
            "http://127.0.0.1:8000/token",
            {
                method: "POST",
                body: `grant_type=password&username=${username}&password=${password}`,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        )
        .then((response) => {
            if(response.status == 200) {
                return response.json()
            }

            return {error: 'error'}
        })
        .then((data) => {
            if(data.access_token) {
                setToken(data.access_token)
            }
        })
        .catch((error) => console.log(error));
    };

    //
    return (
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
                <input type="submit" value="Log In"/>
            </div>
        </form>
    );
}
