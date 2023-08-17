// components/LoginForm.js
import { useState } from 'react';
import axios from 'axios';
import styles from "./index.module.css";

function LoginForm(props: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/auth/login`, {
        email,
        password,
      });      
      props.onLogin(response);
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div className={styles["login-container"]}>
      <form className={styles["login-form"]} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className={styles["form-group"]}>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className={styles["form-group"]}>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit" className={styles["login-button"]}>Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
