import './PaginaReceta.css'
import { useParams } from 'react-router-dom'
import {useState,useEffect} from 'react'
import {getOneRecipe} from '../../services/getOneRecipe.js'

const PaginaReceta = () => {
    const recipeId = useParams()
    const [recetas,SetRecetas] = useState(0)
    console.log(recetas.ingredients)
    console.log(recetas)

  
    useEffect(()=> {
        OneRecetas()
      },[])
    
      async function OneRecetas() {
        const data = await getOneRecipe(recipeId.recipeId)
        SetRecetas(data)
      }


      function TraerIgredi(){
        if(recetas.ingredients == undefined ||recetas.ingredients.length == []){
          return(
            <p>No hay ingredients</p> 
          ) 
        } else {
        return(
            <>
             {recetas.ingredients.map((ingredt,i) => {
                return <li key={i}>{ingredt.name}</li>})}
            </> 
          ) 
        }
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
              <div>
                <p>Preparation</p>
                <p className='P_recetas'>{recetas.preparationTime} min</p>
              </div>

               <div>
                <p>Cooking Time</p>
                <p className='P_recetas'>{recetas.cookingTime} min</p>
               </div>
               
               <div>
                <p className='P_recetas'>{recetas.servingSize} People</p>
               </div>
               
               <p className='P_recetas'>{recetas.alergenos} , {recetas.regimen}</p>
            </div>

            <div className='MarginIngredients'>
              <h1 className='IngredientesTitulo1'>INGREDIENTS</h1>
              <ul className='FlexRow1Ingredientes'>
                
               {TraerIgredi()}
              </ul>
            </div>
          
          </div>
        </div>

        <div>
        <h1 className='IngredientesTitulo space'>INSTRUCCIONS</h1>
        <div className='row2'>
          <p>1  <span className='pasosRecetas'>{recetas.instructions}</span></p>
          <p>2  <span className='pasosRecetas'>{recetas.instructions}</span></p>
          <p>3  <span className='pasosRecetas'>{recetas.instructions}</span></p>
          <p>4  <span className='pasosRecetas'>{recetas.instructions}</span></p>
          <p>5  <span className='pasosRecetas'>{recetas.instructions}</span></p> 
          <p className='borderyellow'></p>
        </div>
        </div>
      </section>

    </section>
  )
}

export default PaginaReceta
