import './App.css';

function MyButton() {
  function handleClick() {
    fetch("http://127.0.0.1:8000/token", {
      method: "POST",
      body: "grant_type=password&username=johndoe&password=secret",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <MyButton />
    </div>
  );
}

export default App;
