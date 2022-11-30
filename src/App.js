import logo from "./logo.svg";
import "./App.css";
import Forminput from "./componets/Forminput";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("")

  console.log(username)
  return (
    <dev className="app">
      <form>
        <Forminput placeholder="Username" setUsername={setUsername}/>
        <Forminput placeholder="Email" />
        <Forminput placeholder="Full name" />
        <Forminput placeholder="Password" />
      </form>
    </dev>
  );
}

export default App;
