import { useState } from "react";
import "./App.css";
import SignUpForm from "./components/SignUpForm";
import Aunthentication from "./components/Aunthenticate";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <div>
        <SignUpForm setToken={setToken} />
      </div>
      <div>
        <Aunthentication token={token} />
      </div>
    </>
  );
}

export default App;
