import './Recetas.css'
import {getTodos} from '../../services/recetas.js'
import {useState, useEffect} from 'react'
import Filtrado from '../../components/Filtrado/Filtrado.jsx'

const Recetas = () => {
    const [recetas,SetRecetas] = useState([]);
    const [comida,SetComida] = useState('')
    const [ids,SetId] = useState("")

  useEffect(()=> {
    TodasRecetas()
  },[])

  async function TodasRecetas() {
    const data = await getTodos()
    SetRecetas(data)
  }


  return (
    <section className='crearmenu' >
        <div className='flexRecepieEncab'>
            <h1 className='titulo_recetas'>RECIPES</h1>
            <div className='label_Recetas'>
            <label> 
                <select value={comida} onChange={(e) => SetComida(e.target.value)}>
                    <option value="1"></option>
                    <option value="desayuno">Desayuno</option>
                    <option value="almuerzo">Almuerzo</option>
                    <option value="cena">Cena</option>
                </select>
            </label>
        </div>
    </div>
    
    <div className='grid_recetas'>
       {mostrarRecetas(recetas,comida,SetId,ids)} 
    </div>
    </section>
  )
}

function mostrarRecetas(recetas,comida,SetId,ids){
   
    if(recetas.length == 0){
        return <h1>Loading...</h1>
    } else if(recetas.length != 0 && comida == "desayuno") {
        return(
            <>
                {recetas.filter((receta) => {
            return receta.menuSetTime == "desayuno"})
            .map((recetas) => { 
            return(
            <Filtrado key={recetas.id} recetas={recetas} SetId={SetId} ids={ids}/>
            )
        })}
            </>
            )
    } else if(recetas.length != 0 && comida == "almuerzo"){
        return(
            <>
        {recetas.filter((receta) => {
            return receta.menuSetTime == "almuerzo"})
            .map((recetas) => { 
                return <Filtrado key={recetas.id} recetas={recetas} SetId={SetId} ids={ids}/>
        })}
        </>
        )
    }else if(recetas.length != 0 && comida == "cena"){
        return(
            <>
        {recetas.filter((receta) => {
            return receta.menuSetTime == "cena"})
            .map((recetas) => {    
                return <Filtrado  key={recetas.id} recetas={recetas} SetId={SetId} ids={ids}/>
            })}
        </>
        )
    }else if(recetas.length != 0 ){
        return(
            <>
              {recetas.map((recetas) => {
                    return <Filtrado key={recetas.id} recetas={recetas} SetId={SetId} ids={ids}/>
                })} 
            </>
            )
     }
}

export default Recetas
