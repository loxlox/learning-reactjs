import { useState } from "react";
import FetchApi from "./fetchApi";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [staySignIn, setStaySignIn] = useState(false);

  const handleSubmitForm = (evt) => {
    evt.preventDefault();

    const payload = {
      Email: email,
      Password: password,
      StaySignIn: staySignIn,
    };

    FetchApi("http://192.168.50.197:3000/users/login", "POST", payload).then(
      (response) => console.log(response)
    );
  };

  // console.log("email: ", email);
  // console.log("password: ", password);
  // console.log("staySignIn: ", staySignIn);

  return (
    <div className="App">
      <form autoComplete="off" onSubmit={(evt) => handleSubmitForm(evt)}>
        <input
          type="text"
          name="username"
          placeholder="Input username"
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Input password"
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
        />
        <label>
          <input
            type="checkbox"
            name="staySignIn"
            checked={staySignIn}
            onChange={(evt) => setStaySignIn(evt.target.checked)}
          />
          Stay Sign In
        </label>
        <button type="submit">login</button>
      </form>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
