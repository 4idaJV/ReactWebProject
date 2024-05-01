import './Filtrado.css'
import {VincularUR} from '../../services/VincularRecetasUser.js'
import {Link} from 'react-router-dom'


function Filtrado({recetas,SetId,ids}) {
    let nume = localStorage.getItem("id")
    let cool = recetas.id
  
   async function handleFav(e){
      SetId(cool)
      let datos = {
        userId:nume,
        recipeId:ids}
      await VincularUR(datos)
    }
     
  return (
    <> 
      <div className='recetas' key={recetas.id}>
        <h2>{recetas.title}</h2>
        <p>Tiempo de Elaboracion: {recetas.cookingTime} </p>
        <img className='imagen_recetas' src={recetas.img_url} alt="" />
        <button type='button' onClick={handleFav}>Favoritos</button>
       <Link to={`/PaginaReceta/${cool}`}><button type='button'>Direcction</button></Link>
      </div>
    </>
  )
}

export default Filtrado