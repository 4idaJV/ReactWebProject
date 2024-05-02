import './Filtrado.css'
import { VincularUR } from '../../services/VincularRecetasUser.js'
import { Link } from 'react-router-dom'


function Filtrado({ recetas, SetId, ids }) {

  let nume = localStorage.getItem("id")
  let cool = recetas.id

  async function handleFav(e) {
    SetId(cool)
    let datos = {
      userId: nume,
      recipeId: ids
    }
    await VincularUR(datos)
  }


  return (
    <div className='centrarRecetas'>
      <div className='recetas' key={recetas.id}>
        <div className='PhotoBox'>
          <img className='imagen_Recipe' src={recetas.img_url} alt="" />
          <div className='botonesPlaced'>
            <div className='buttonPosition1'>
              <button type='button' onClick={handleFav} className='fav'> + </button>
            </div>
            <div className='buttonPosition2'>
              <Link className='nosub' to={`/PaginaReceta/${cool}`}><button type='button' className='recc'>View</button></Link>
            </div>
          </div>
        </div>
        <div>
          <h4 className='tituloTargetas'>{recetas.title}</h4>
          
        </div>

      </div>
    </div>
  )
}

export default Filtrado