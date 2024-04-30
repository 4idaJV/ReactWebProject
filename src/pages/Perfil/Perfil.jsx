import './Perfil.css'
import {getRecetasUser} from '../../services/getRecetasUser.js'
import { useState,useEffect } from 'react'
import FiltradoTusRecetas from '../../components/Filtrado/FiltradoTusRecetas.jsx'
import { useNavigate } from "react-router-dom";

const Perfil = () => {
  const navegate = useNavigate();
  const [crearRecetas,SetCrearRecetas] = useState([])
  const [nombreUser,SetnombreUser] = useState("")
  //let token = localStorage.setItem("token")
 // let name =localStorage.setItem("nombre")
 let id = -1
 id = localStorage.getItem("id")
 let nombre = localStorage.getItem("name")
  
  if(id == -1){
    console.log("esperando")
  }else {
    useEffect(() => {
      RecetasUsuario()
      SetnombreUser(nombre)
    },[])

  }  
    async function RecetasUsuario() {
      const {recipeUsers} = await getRecetasUser(id)
      SetCrearRecetas(recipeUsers)
  }

  function handleLogOut(e){
    localStorage.clear();
    navegate("/");
  }

  return (
    <section className='TuPerfil'>

      {/* Parte izquierda */}
      <div className='parteIzquierda'>
        {/* imagen usuario */}
        <div className='imagenPerfil'>
          <img src="" alt="" />
        </div>

        {/* Datos del usuario */}
        <div className='labelPerfil'>

            <div className='informacionPerfil'>
              <h2 className='datosUsuario'>Alberto</h2>
              <p className='border'></p>
            </div>

            <div className='informacionPerfil'>
              <h2 className='datosUsuario'>Date of Birth</h2>
              <p className='border'></p>
            </div>

            <div className='informacionPerfil'>
              <h2 className='datosUsuario'>Country</h2>
              <p className='border'></p>
            </div>

            <div className='informacionPerfil'>
              <h2 className='datosUsuario'>E-mail</h2>
              <p className='border'></p>
            </div>

            <div>
              <button className="logOut" onClick={handleLogOut}>
                <span className='logOut-letter'>Log Out</span> 
              </button>
            </div>
        </div>

        
        
      </div>

        {/* Parte derecha */}
      <div className='Bienvenido'>

          <div className='BienvenidoUser'>
            <h1 className='textoBienvenido'>Welcome! <br/>
            <span className='textousuario'>Quasimodo Lorenzo{nombre}</span> </h1>
           
          </div>

          <div className='iconos' >
            <p>iconos</p>
          </div>

          <div className='MisPlatos'>

            <div className='ContenedorRecetasUsuario'>
              <h3 className='tituloCont'>My Saved Menus</h3>
              <FiltradoTusRecetas crearRecetas={crearRecetas}/>
              <div className='borderyellow '></div>
            </div>

            <div className='ContenedorRecetasUsuario'>
              <h3 className='tituloCont'>My Saved Recipes</h3>
              <FiltradoTusRecetas crearRecetas={crearRecetas} />
              <div className='borderyellow '></div>
            </div>

            <div className='ContenedorRecetasUsuario'>
              <h3 className='tituloCont'>My Created Recipes</h3>
              <FiltradoTusRecetas crearRecetas={crearRecetas} />
              <div className='borderyellow '></div>
            </div>

          </div>

      </div>

    </section>
  )
}

export default Perfil