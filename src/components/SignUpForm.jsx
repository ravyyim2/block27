import React from "react";
import { useState } from "react";

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState(""); // since this is a function we call it w/ () and pass it an empty string
  const [password, setPassword] = useState(""); // this is another piece of state that will create an empty string
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const rsp = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      // the block above store the api in the rsp variable on line 12

      const info = await rsp.json();
      console.log(info);
      setToken(info.token);

      setUsername("");
      setPassword("");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <h2>Sign Up Form</h2>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Username:{" "}
          <input
            value={username}
            onChange={(event) => {
              console.log(event.target.value);
              setUsername(event.target.value);
            }}
            id="user-name"
          />
        </label>
        <br />
        <label>
          Password:{" "}
          <input
            value={password}
            onChange={(e) => {
              console.log(e.target.value);
              setPassword(e.target.value);
            }}
            type="password"
            id="user-password"
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
