import InputForm from "../InputForm/InputForm";
import "./Formulario.css";
import Section from "../sessao/section";

const FormularioCadastro = () => {
  const signup = async () => { };
  return (
    <>
      <section className="form-section">
        <form onSubmit={signup}>
          <h1>Cadastre-se</h1>
          <div>
            <InputForm
              Id="username"
              forId="username"
              tipo="text"
              placeholder="Digite seu nome de usuário"
              obrigatorio
            >Nome de Usuário:</InputForm>
            <InputForm
              valor="Nome Completo:"
              Id="nome"
              forId="nome"
              tipo="text"
              placeholder="Digite o seu nome completo"
              obrigatorio
            >Nome Completo</InputForm>
            <InputForm
              Id="email"
              forId="email"
              tipo="email"
              placeholder="Digite seu email:"
              obrigatorio
            >Email:</InputForm>
            <InputForm
              valor="Senha:"
              Id="senha"
              forId="senha"
              tipo="password"
              length="8"
              placeholder="Digite sua senha"
              obrigatorio
            >Senha:</InputForm>
            <InputForm placeholder="Digite seu telefone" type="tel" maxLength="11" obrigatorio>
              Telefone:</InputForm>
          </div>
        </form>
      </section>
      <Section></Section>
    </>
  );
};

export default FormularioCadastro;
