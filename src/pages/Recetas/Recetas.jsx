import './Recetas.css'
import {getTodos} from '../../services/recetas.js'
import {useState, useEffect} from 'react'

const Recetas = () => {
    const [recetas,SetRecetas] = useState([]);
    const [comida,SetComida] = useState('')

  useEffect(()=> {
    TodasRecetas()
  },[])

  async function TodasRecetas() {
    const data = await getTodos()
    SetRecetas(data)
  }
  console.log(comida)
  return (
    <>
    <h1 className='titulo_recetas'>Nuestras Recetas</h1>
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
        
    <div className='grid_recetas'>
      {mostrarRecetas(recetas,comida)}
    </div>
    </>
  )
}

function mostrarRecetas(recetas,comida){
    console.log()
    if(recetas.length == 0){
        return <h1>Loading...</h1>
    } else if(recetas.length != 0 && comida == "desayuno") {
        return(
            <>
                {recetas.filter((receta) => {
            return receta.menuSetTime == "desayuno"})
            .map((receta) => { 
                console.log('a')
            return(
                <div className='recetas_Desayunos' key={receta.id}>
                    <h2>{receta.title}</h2>
                    <p>Tiempo de Elaboracion: {receta.cookingTime} </p>
                    <img className='imagen_recetas' src={receta.img_url} alt="" />
                </div>
            );
        })}
            </>
            )
    } else if(recetas.length != 0 && comida == "almuerzo"){
        return(
            <>
        {recetas.filter((receta) => {
            return receta.menuSetTime == "almuerzo"})
            .map((receta) => { 
                console.log('a')
            return(
                <div className='recetas_almuerzos' key={receta.id}>
                    <h2>{receta.title}</h2>
                    <p>Tiempo de Elaboracion: {receta.cookingTime} </p>
                    <img className='imagen_recetas' src={receta.img_url} alt="" />
                </div>
            );
        })}
        </>
        )
    }else if(recetas.length != 0 && comida == "cena"){
        return(
            <>
        {recetas.filter((receta) => {
            return receta.menuSetTime == "cena"})
            .map((receta) => { 
                console.log('a')
            return(
                <div className='recetas_cena' key={receta.id}>
                    <h2>{receta.title}</h2>
                    <p>Tiempo de Elaboracion: {receta.cookingTime} </p>
                    <img className='imagen_recetas' src={receta.img_url} alt="" />
                </div>
            );
        })}
        </>
        )
    }else if(recetas.length != 0 ){
        return(
            <>
                {recetas.map((receta) => {
                    return(
                        <div className='recetas' key={receta.id}>
                            <h2>{receta.title}</h2>
                            <p>Tiempo de Elaboracion: {receta.cookingTime} </p>
                            <img className='imagen_recetas' src={receta.img_url} alt="" />
                        </div>
                    );
                })}
            </>
            )
    }
}

export default Recetas
