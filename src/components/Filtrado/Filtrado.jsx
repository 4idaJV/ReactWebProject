import './Filtrado.css'
import {VincularUR} from '../../services/VincularRecetasUser.js'



function Filtrado({recetas,SetId,ids}) {
    let nume = localStorage.getItem("id")

   async function handleFav(e){
      let cool = recetas.id
      console.log(cool)
      SetId(cool)
      let datos = {
        userId:nume,
        recipeId:cool}
      await VincularUR(datos)
    }
     
  return (
    <> 
      <div className='recetas' key={recetas.id}>
        <h2>{recetas.title}</h2>
        <p>Tiempo de Elaboracion: {recetas.cookingTime} </p>
        <img className='imagen_recetas' src={recetas.img_url} alt="" />
        <button type='button' onClick={handleFav}>Favoritos</button>
      </div>
    </>
  )
}

export default Filtrado