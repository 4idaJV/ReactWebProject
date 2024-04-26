import './CrearTablas.css'
import {getTodos} from '../../services/recetas.js'
import {useState,useEffect} from 'react'
import FiltradoDesayuno from '../../components/Filtrado/FiltradoDesayuno.jsx'
import FiltradoAlmuerzo from '../../components/Filtrado/FiltradoAlmuerzo.jsx'
import FiltradoCena from '../../components/Filtrado/FiltradoCena.jsx'

function CrearTablas() {
  const [recetas,SetRecetas] = useState([]);
  const [boolean,SetBollean] = useState(false)

  useEffect(() => {
    TodasRecetas()
  }, []); 
   
  async function TodasRecetas() {
    const data = await getTodos()
    SetRecetas(data)
  }

  function handleclick1(e){
    SetBollean(true)
  }

  function handleClick(){
      if (boolean == true){
        return(
          <div>
            <div>
              <FiltradoDesayuno recetas={recetas}/>
            </div>
            <div>
              <FiltradoAlmuerzo recetas={recetas}/>
            </div>
            <div>
              <FiltradoCena recetas={recetas}/>
            </div>
          </div>
          )
      } else if(boolean == false) {
        return (
          <div>
            <p></p>
          </div>
        )
      }
    }

    return (
      <>
      <section className='crearmenu'>
        <button type='button'  onClick={handleclick1}>Crear Menu de 1 dia</button>
        {handleClick()} 
        </section>
      </>
     
    )
 
  
}

export default CrearTablas