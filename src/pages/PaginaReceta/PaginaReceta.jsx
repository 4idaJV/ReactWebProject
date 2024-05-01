import './PaginaReceta.css'
import { useParams } from 'react-router-dom'
import {useState,useEffect} from 'react'
import {getOneRecipe} from '../../services/getOneRecipe.js'

const PaginaReceta = () => {
    const recipeId = useParams()
    const [recetas,SetRecetas] = useState(0)
    console.log(recetas)

    useEffect(()=> {
        OneRecetas()
      },[])
    
      async function OneRecetas() {
        const data = await getOneRecipe(recipeId.recipeId)
        SetRecetas(data)
      }

  return (
    <section className='PaginaRecetas'>

      <section className='GridOneRecipe'>
        <div className='row1'>
          
          <div>
            <img src={recetas.img_url} className='ImagenRecetaOne'/>
          </div>

          <div className='FlexRow1'>
            <h1 className='titleOneRecipe'>{recetas.title}</h1>

            <div className='FlexTiempos' >
              <p>{recetas.preparationTime} min</p>
              <p>{recetas.cookingTime} min</p>
              <p>{recetas.servingSize} People</p>
              <p>{recetas.alergenos}  {recetas.regimen}</p>
            </div>

            <div>
              <h1 className='IngredientesTitulo'>INGREDIENTS</h1>
              <ul className='FlexRow1Ingredientes'>
                <li>A</li>
                <li>A</li>
                <li>A</li>
                <li>A</li>
                <li>A</li>
              </ul>
            </div>

          </div>
        </div>

        <div>
        <h1 className='IngredientesTitulo space'>Instruccions</h1>
        <div className='row2'>
          <p>1  <span className='pasosRecetas'>First Step:{recetas.instructions}</span></p>
          <p>2  <span className='pasosRecetas'> Second Step:{recetas.instructions}</span></p>
          <p>3  <span className='pasosRecetas'> Third Step:{recetas.instructions}</span></p>
          <p>4  <span className='pasosRecetas'>Fourth Step:{recetas.instructions}</span></p>
          <p>5  <span className='pasosRecetas'>Five Step:{recetas.instructions}</span></p> 
        </div>
        </div>
      </section>

    </section>
  )
}

export default PaginaReceta
