import './CrearTablas.css'
import {getTodos} from '../../services/recetas.js'
import {useState,useEffect} from 'react'

function CrearTablas() {
    const [recetas,SetRecetas] = useState([]);

    useEffect(()=> {
        TodasRecetas()
      },[])
    
      async function TodasRecetas() {
        const data = await getTodos()
        SetRecetas(data)
      }
 console.log(recetas)
  return (
    <div>CrearTablas</div>
  )
}

export default CrearTablas