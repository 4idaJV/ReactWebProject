import './Perfil.css'
import {getRecetasUser} from '../../services/getRecetasUser.js'
import { useState,useEffect } from 'react'
import FiltradoTusRecetas from '../../components/Filtrado/FiltradoTusRecetas.jsx'


const Perfil = () => {
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

  return (
    <section className='TuPerfil'>
        <h1>hola {nombreUser}</h1>
        <div>
          <h1>Mis Recetas</h1>

          <div className=''>
          <FiltradoTusRecetas crearRecetas={crearRecetas} />
          </div>
        </div>

    </section>
  )
}

export default Perfil