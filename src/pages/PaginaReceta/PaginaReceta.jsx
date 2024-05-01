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
      chocolate
    </section>
  )
}

export default PaginaReceta
