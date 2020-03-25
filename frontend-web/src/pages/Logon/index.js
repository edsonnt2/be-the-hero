import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import "./style.css";

import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";
import api from "../../services/api";

const Logon = () => {
  const [id, setId] = useState("");
  const history = useHistory();
  const handleLogin = async e => {
    e.preventDefault();
    try {
      const response = await api.post("sessions", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);
      history.push("/profile");
    } catch (error) {
      alert("Falha no login, tente novamente.");
    }
  };
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button type="submit" className="button">
            Entrar
          </button>
          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
};

export default Logon;
