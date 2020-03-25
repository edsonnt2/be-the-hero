import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import "./style.css";
import logoImg from "../../assets/logo.svg";

import api from "../../services/api";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    city: "",
    uf: ""
  });
  const { name, email, whatsapp, city, uf } = data;

  const history = useHistory();

  const onChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleRegister = async e => {
    e.preventDefault();

    try {
      const response = await api.post("ongs", data);
      alert(`Seu ID de acesso: ${response.data.id}`);
      history.push("/");
    } catch (error) {
      alert("Erro no cadastro, tente novamente.");
    }
  };

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>

          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            name="name"
            placeholder="Nome da ONG"
            value={name}
            onChange={onChange}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={onChange}
          />
          <input
            name="whatsapp"
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={onChange}
          />
          <div className="input-group">
            <input
              name="city"
              placeholder="Cidade"
              value={city}
              onChange={onChange}
            />
            <input
              name="uf"
              placeholder="UF"
              maxLength="2"
              style={{ width: 80 }}
              value={uf}
              onChange={onChange}
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
