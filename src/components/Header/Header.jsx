
/* // Header.jsx
import './Header1.css';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import foto from "../../../public/imagenes/1.png";
import foto2 from "../../../public/imagenes/cuenta.png";


const Header = () => {
  const navegate = useNavigate()
  const [tokens,SetTokens] = useState('')

  useEffect(() => {
    const token = localStorage.getItem("token")
    SetTokens(token)
  })

  function handleClick(e) {
    if (!tokens) {
      alert('Registrate para acceder a tu menu')
      navegate('/login')
    } else {
      navegate('/CrearTablas')
    }
  }


  return (
    <div className="header1">
      <Link to='/'> <div className="logo">
        <img src={foto} alt="Log" />
      </div></Link>
      <nav className="navigation">
        <button className="boton" onClick={handleClick}>CREATE MENU</button>
        <ul className="nav-list">

          <li>
          <Link to='/'><a href="#">RECIPIES</a></Link>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>

        </ul>
        <Link to='/login'><button className ="login">
          <img src={foto2} alt="Log" />
        </button></Link>
      </nav>

    </div>
  );
};

export default Header;
 */