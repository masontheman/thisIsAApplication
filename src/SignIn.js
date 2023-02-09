import React, { useState } from "react";
import { Auth } from 'aws-amplify';
import { useNavigate, Link } from 'react-router-dom';
export default function SignIn(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const history = useNavigate();
    const handleSubmit = async event => {
        event.preventDefault();
        try {
          await Auth.signIn(username, password);
          history('/')
        } catch (error) {
          setError(error.message);
        }
      };
    
      return (
        <>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Sign In</button>
          {error && <p>{error}</p>}
        </form>
        <p>
        don't have an account yet? 
        </p>
        <Link to="/signup">Sign Up</Link>
        </>
      );
}
