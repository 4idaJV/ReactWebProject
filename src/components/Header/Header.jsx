import "./Header.css";
import foto from "../../../public/imagenes/1.png";
import foto2 from "../../../public/imagenes/cuenta.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={foto} alt="Log" />
      </div>
      <nav className="navigation">
        <button className="boton">CREATE MENU</button>
        <ul className="nav-list">
          <li>
            <a href="#">RECIPIES</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
        <button className="login">
          <img src={foto2} alt="Log" />
        </button>
      </nav>
    </div>
  );
};

export default Header;
