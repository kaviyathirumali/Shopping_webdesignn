import React, { useState} from 'react';
import Shop from './Shop';
const RegistrationForm = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (username && email && password) {
      onRegister({ username, email, password });
    } else {
      console.log("Registration failed. Please fill in all fields.");
    }
  };

  return (
    <div className='loginsignup'>
        <div className='loginsignup-container'>
            <h1>Registration</h1>
        
        <div className='loginsignup-filed'>
          <input type="text" placeholder='Your name' value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="email" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={handleRegister}>Register</button>
        <p className="loginsignup-login">Already have an account?<span>Login here</span></p>
                <div className="loginsignup-agree flex mr-2 gap-3">
                    <input type="checkbox" name="" id=""/>
                    <p>By continuing, i agree to the terms of use & privacy policy</p>
                </div>
    </div>
    </div>
  );
};

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    if (username && password) {
      onLogin({ username, password });
    } else {
      console.log("Login failed. Please enter username and password.");
    }
  };

  return (
    <div className='loginsignup'>
        <div className='loginsignup-container'>
            <h1>Sign Up</h1>
      <div className='loginsignup-filed'>
          <input type="text" placeholder='Your name' value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={handleLogin}>Continue</button>
    </div>
    </div>
  );
};

const LoginSignUp = () => {
  const [registeredUser, setRegisteredUser] = useState(null);
  const [logedIn, setLogedIn]=useState(false)

  const handleRegister = (userData) => {  
    console.log('User registered:', userData);
    setRegisteredUser(userData);
    
  };

  const handleLogin = (loginData) => {
    if (registeredUser && loginData.username === registeredUser.username && loginData.password === registeredUser.password) {
      console.log('Login successful');
      setLogedIn(true)
    } else {
      console.log('Login failed. Invalid credentials.');
    }
  };

  return (
    <div>
        {!logedIn ? (
      !registeredUser?(
        <RegistrationForm onRegister={handleRegister} />
      ):(
            <LoginForm onLogin={handleLogin}/>
        )
        ):(
            <Shop/>
        )}

    </div>
  );
};

export default LoginSignUp;