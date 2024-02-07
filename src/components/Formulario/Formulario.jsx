import { useState } from "react";
import InputForm from "../InputForm/InputForm";
import "./Formulario.css";
import axios from "axios";

const FormularioCadastro = () => {
  
  const [formData, setFormData] = useState({
    username: null,
    name: null,
    email: null,
    password: null,
    phone: null,
    office: null,
  });

  const handleChange = async (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const signup = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post("http://localhost:8081/api/users/signup", formData, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
      if (response.data.success || response.status == 200) {
        // O cadastro foi bem-sucedido, você pode redirecionar o usuário ou realizar outras ações necessárias.
        console.log("Cadastro bem-sucedido!");
      } else {
        // Tratar erro aqui, por exemplo, exibir uma mensagem de erro para o usuário.
        console.error("Falha no cadastro");
      }
    } catch (error) {
      console.error("Erro ao fazer cadastro", error);
    }

    limparForm();
  };

  const limparForm = () => {
    setFormData({
      username: "",
      name: "",
      email: "",
      password: "",
      phone: "",
      office: "",
    })
  }

  return (
    <section className="form-section">
      <form onSubmit={signup} className="d-flex flex-column form-container">
        <h1>Cadastre-se</h1>
        <div>
          <InputForm
            Id="username"
            forId="username"
            tipo="text"
            obrigatorio
            value={formData.username}
            onChange={handleChange}
          >
            Nome de Usuário:
          </InputForm>
          <InputForm
            Id="name"
            forId="name"
            tipo="text"
            obrigatorio
            value={formData.name}
            onChange={handleChange}
          >
            Nome Completo:
          </InputForm>
          <InputForm
            Id="email"
            forId="email"
            tipo="email"
            obrigatorio
            value={formData.email}
            onChange={handleChange}
          >
            Email:
          </InputForm>
          <InputForm
            Id="password"
            forId="password"
            tipo="password"
            length="8"
            obrigatorio
            value={formData.password}
            onChange={handleChange}
          >
            Senha:
          </InputForm>
          <InputForm
            Id="phone"
            forId="phone"
            type="tel"
            maxLength="11"
            obrigatorio
            value={formData.phone}
            onChange={handleChange}
          >
            Telefone:
          </InputForm>
          <InputForm
            Id="office"
            forId="office"
            type="text"
            obrigatorio
            value={formData.office}
            onChange={handleChange}
          >
            Função:
          </InputForm>
        </div>
        <div className="btn-container">
          <button className="btn btn-primary btn-signup">Cadastrar</button>
        </div>
      </form>
    </section>
  );
};

export default FormularioCadastro;
