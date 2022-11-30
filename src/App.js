import "./App.css";
import Forminput from "./componets/Forminput";
import { useRef } from "react";

function App() {
  // const [username, setUsername] = useState("");
  const usernameRef = useRef();

  console.log("re-rendered");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
  };
  return (
    <dev className="app">
      <form onSubmit={handleSubmit}>
        <Forminput name="username" placeholder="Username" />
        <Forminput name="email" placeholder="Email" />
        <Forminput name="fullname" placeholder="Full name" />
        <Forminput name="password" placeholder="Password" />
        <button>Submit</button>
      </form>
    </dev>
  );
}

export default App;
