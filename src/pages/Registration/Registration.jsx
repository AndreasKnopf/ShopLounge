import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import styles from "./Registration.module.css";

export default function Registration() {
  const { registerUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    zipCode: "",
    city: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = registerUser(formData);
    if (success) {
      navigate("/");
    } else {
      setError("Die E-Mail-Adresse ist bereits registriert. Bitte logge dich mit deinen Daten ein.");
    }
  };

  return (
    <div className={styles.registrationWrapper}>
      <div className={styles.registrationBox}>
        <h2>Konto erstellen</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Vorname:</label>
            <input
              type="text"
              name="firstName"
              title="gib hier deinen Vornamen ein."
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Nachname:</label>
            <input
              type="text"
              name="lastName"
              title="gib hier deinen Nachnamen ein."
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Adresse:</label>
            <input
              type="text"
              name="address"
              title="gib hier deine Straße und Hausnummer ein."
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>PLZ:</label>
            <input
              type="text"
              name="zipCode"
              title="gib hier deine Postleitzahl ein."
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Ort:</label>
            <input
              type="text"
              name="city"
              title="gib hier deinen Wohnort ein."
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              title="gib hier deine E-Mailadresse ein."
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Passwort:</label>
            <input
              type="password"
              name="password"
              title="gib hier dein gewünschtes Passwort ein."
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Konto erstellen</button>
        </form>
      </div>
      {error && (
        <p className={styles.error} style={{ color: "red" }}>
          {error}
        </p>
      )}
    </div>
  );
}
