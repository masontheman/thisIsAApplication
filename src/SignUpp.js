import { Auth, Hub, API, graphqlOperation } from 'aws-amplify';
import {useState} from 'react';
import { createUserr,createUserP} from './graphql/mutations';
import { useNavigate } from 'react-router-dom';

function SignUpp() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [email, setEmail] = useState('');
const [code, setCode] = useState('');
const [error, setError] = useState('');
const [stage, setStage] = useState('signup');
const history = useNavigate();

const handleSignUpSubmit = async (event) => {
  event.preventDefault();
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email,
      },
      autoSignIn: {
        enabled: true,
      },
    });
    console.log(user, 'user pressed sign up button');
    setStage('confirm');
  } catch (err) {
    setError(err.message);
  }
};

const handleConfirmSubmit = async (event) => {
  event.preventDefault();
  try {
    await Auth.confirmSignUp(username, code, { forceAliasCreation: false });
    console.log('User confirmed',username);
  } catch (err) {
    setError(err.message);
  }
  try {
    const data = {
      username: username,
      pimage: '',
    };
    await API.graphql({
      query: createUserr,
      variables: { input: data },
    });
    console.log('hopefully user was created in model');
  } catch (error) {
    console.log(error)
  }
  try {
    const data = {
      username: username,
      contnet: '',
    };
    await API.graphql({
      query: createUserP,
      variables: { input: data },
    });
    console.log('hopefully userP was created in model');
    history('/')
  } catch (error) {
    console.log(error)
  }

};

return (
  <div>
    {stage === 'signup' && (
      <form onSubmit={handleSignUpSubmit}>
        <h3>Sign Up</h3>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    )}
    {stage === 'confirm' && (
      <form onSubmit={handleConfirmSubmit}>
        <h3>Confirm Sign Up</h3>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <label htmlFor="code">Confirmation Code</label>
        <input
          type="text"
          id="code"
          value={code}
          onChange={(event) => setCode(event.target.value)}
          required
        />
        <button type="submit">Confirm</button>
      </form>
    )}
  </div>
);
}
export default SignUpp;

