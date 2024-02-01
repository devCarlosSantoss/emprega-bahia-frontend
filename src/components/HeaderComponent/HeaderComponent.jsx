import "./HeaderComponent.css";
import logo from "../../assets/react.svg";
import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={logo} width={60} height={60} alt="logo" />
      </div>
      <nav className="nav-link">
        <div className="links-list">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/vagas">Vagas</Link>
            </li>
            <li>
              <Link to="/about">Sobre Nós</Link>
            </li>
          </ul>
          <div className="nav-account">
            <Link><button>Login</button></Link>
            <Link to="/cadastro">
              <button>Criar Conta</button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default HeaderComponent;
