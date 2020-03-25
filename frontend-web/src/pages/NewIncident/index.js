import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import "./style.css";

import logoImg from "../../assets/logo.svg";
import api from "../../services/api";

const NewIncident = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    value: ""
  });
  const { title, description, value } = data;
  const ongId = localStorage.getItem("ongId");

  const history = useHistory();

  const onChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleNewIncidents = async e => {
    e.preventDefault();

    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ongId
        }
      });
      history.push("/profile");
    } catch (error) {
      alert("Erro no cadastro, tente novamente.");
    }
  };

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>
        <form onSubmit={handleNewIncidents}>
          <input
            placeholder="Título do caso"
            name="title"
            value={title}
            onChange={onChange}
          />
          <textarea
            placeholder="Descrição"
            name="description"
            value={description}
            onChange={onChange}
          />
          <input
            placeholder="Valor em reais"
            name="value"
            value={value}
            onChange={onChange}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewIncident;
