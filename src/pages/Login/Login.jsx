import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const { loginUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const success = loginUser(email, password);
    if (success) {
      navigate("/");
    } else {
      setError(`Ungültige Anmeldedaten! Bitte versuchen Sie es erneut.`);
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginBox}>
        <h2>Anmelden</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">E-Mail:</label>
            <input
              type="email"
              id="email"
              title="füge deine Email-Adresse ein!"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Passwort:</label>
            <input
              type="password"
              id="password"
              title="füge deine Passwort ein!"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit">Anmelden</button>
        </form>

        <div className={styles.regiBox}>
          <h2>Neu bei SHOP LOUNGE?</h2>
          <button onClick={() => navigate("/registration")}>Konto erstellen</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
