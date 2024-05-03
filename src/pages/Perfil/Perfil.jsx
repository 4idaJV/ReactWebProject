import './Perfil.css'
import {getRecetasUser} from '../../services/getRecetasUser.js'
import { useState,useEffect } from 'react'
import FiltradoTusRecetas from '../../components/Filtrado/FiltradoTusRecetas.jsx'
import FiltradoTusRecetasFav from '../../components/Filtrado/FiltradoRecetasFav.jsx'
import { useNavigate } from "react-router-dom";
import {getRecetasFav} from '../../services/getRecetasFav.js'
import axios from "axios";

const Perfil = () => {
  const navegate = useNavigate();
  const [crearRecetas,SetCrearRecetas] = useState([])
  const [crearRecetasFAV,SetCrearRecetasFAV] = useState([])
  const [nombreUser,SetnombreUser] = useState("")
  const [Url_Imagen,SetUrl_Imagen] = useState("")

 let id = -1
 id = localStorage.getItem("id")
 let nombre = localStorage.getItem("name")
  

    useEffect(() => {
      RecetasUsuario()
      SetnombreUser(nombre)
      getRecetasFavoritos()
    },[])
    45
   
    async function RecetasUsuario() {
      const {recipeUsers} = await getRecetasUser(id)
      SetCrearRecetas(recipeUsers)
  }

  async function getRecetasFavoritos() {
    const {recipes} = await getRecetasFav(id)
    SetCrearRecetasFAV(recipes)
}


  function handleLogOut(){
    localStorage.clear();
    navegate("/");
  }

  const ChangeUploadImage = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();

    data.append("file" , file )
    data.append("upload_preset" , "subir_imagenes");

    const response = await axios.post("https://api.cloudinary.com/v1_1/dy0qrz2ww/image/upload",
  data)
   SetUrl_Imagen(response.data.secure_url)
  }



  function handleTuRecetas(){
    if(crearRecetas.length == []){
      return(
        <p>
         espera
        </p>
      )
    } else {
      return(
      <>
      { 
        crearRecetas.map((receta,i)=> {
          return <FiltradoTusRecetas key={i} crearRecetas={crearRecetas} receta={receta} />
        })}
      </>

      )
    }
  }

  //console.log(crearRecetas)

  return (
    <section className='TuPerfil'>

      {/* Parte izquierda */}
      <div className='parteIzquierda'>
        {/* imagen usuario */}
        <div className='centrarimagenesperfil' >
         {Url_Imagen && (
            <div>
              <img className='imagenPerfil' src={Url_Imagen} alt="" />
            </div>
          )} 
        </div>
        <input type='file' accept='image/*' onChange={ChangeUploadImage} />
        {/* Datos del usuario */}
        <div className='labelPerfil'>
            <div className='informacionPerfil'>
              <h2 className='datosUsuario'>Full Name</h2>
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
            <span className='textousuario'>{nombreUser}</span></h1>
          </div>


          <div className='MisPlatos'>

            {/* <div className='ContenedorRecetasUsuario'>
              <h3 className='tituloCont'>My Saved Menus</h3>
              {/* <FiltradoTusRecetas crearRecetas={crearRecetas}/> 
              <div className='borderyellow '></div>
            </div>  */}

            <div className='ContenedorRecetasUsuario'>
              <h3 className='tituloCont'>My Saved Recipes</h3>
              <FiltradoTusRecetasFav crearRecetasFAV={crearRecetasFAV} />
              <div className='borderyellow '></div>
            </div>

            <div className='ContenedorRecetasUsuario'>
              <h3 className='tituloCont'>My Created Recipes</h3>
              <div className='misRecetas'>
                  {handleTuRecetas()}  
              </div>
                
              <div className='borderyellow '></div>
            </div>
          </div>

      </div>
    </section>
  )
}

export default Perfil