// Header.jsx
import './Header.css';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect } from 'react';
import { Link } from "react-router-dom";

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
    <div className="header">
      <div className='logo'>
        <img src="file:///home/reboot/Downloads/logo_200x200-removebg-preview.png" alt="Logo" />
      </div>
      <nav className="navigation">
        <ul className="nav-list">
        <Link to='/'><li>About Us</li></Link>
        <Link to='/recetas'><li>Recetas</li></Link>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
      <button type='button'  onClick={handleClick}>Crear Menu</button>
      <Link to='/login'><button type='button'>Log In</button></Link>
      <Link to='/SignUp'><button type='button'>SignUp</button></Link>

    </div>
  );
}

export default Header;
