import "./Header1.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navegate = useNavigate();
  const [tokens, SetTokens] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    SetTokens(token);
  });

  function handleClick(e) {
    if (!tokens) {
      alert("Registrate para acceder a tu menu");
      navegate("/login");
    } else {
      navegate("/CrearTablas");
    }
  }

  function handlePerfil(e) {
    if (!tokens) {
      alert("Registrate para acceder a tu menu");
      navegate("/login");
    } else {
      navegate("/Perfil");
    }
  }

  return (
    <header className="header">
      <section id="sectionHeader1">
        <Link to="/">
          {" "}
          <div className="logo">
            <img src="../public/imagenes/1.png" alt="Log" />
          </div>
        </Link>

        <div className="nav-list">
          <Link to="/recetas">
            <p>RECIPES</p>
          </Link>

          {/* <Link to="/Perfil">
            <p>PROFILE</p>
          </Link> */}

          <Link to="/CrearReceta">
            <p>CREATE RECIPE</p>
          </Link>
        </div>
      </section>
      <section id="sectionHeader2">
        
        <button className="boton" onClick={handleClick}>
          CREATE MENU
        </button>
        <div className="login">

          <button className="login">
            <img src="../public/imagenes/fuerza.png" alt="Log" />
          </button>
        
          <button className="login" onClick={handlePerfil}>
            <img src="../public/imagenes/cuenta.png" alt="Log" />
          </button>
       </div>
      </section>
    </header>
  );
};

export default Header;
