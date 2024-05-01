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
    <div className='centrarRecetas'> 
      <div className='recetas' key={recetas.id}>
        <img className='imagen_Recipe' src={recetas.img_url} alt="" />
        <div>
         <button type='button' onClick={handleFav} className='fav'>FAV</button>
         <Link to={`/PaginaReceta/${cool}`}><button type='button' className='recc'>SEE</button></Link>
        </div>
        <h4 className='tituloTargetas'>{recetas.title}</h4>
      </div>
    </div>
  )
}

export default Filtrado