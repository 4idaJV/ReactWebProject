import './CrearTablas.css'
import {getTodos} from '../../services/recetas.js'
import {useState,useEffect} from 'react'
import FiltradoDesayuno from '../../components/Filtrado/FiltradoDesayuno.jsx'
import FiltradoAlmuerzo from '../../components/Filtrado/FiltradoAlmuerzo.jsx'
import FiltradoCena from '../../components/Filtrado/FiltradoCena.jsx'

function CrearTablas() {
  const [recetas,SetRecetas] = useState([]);
  const [boolean,SetBollean] = useState(false);
  const [alergenosMenu,SetAlergenosMenu] = useState("");
  const [regimenMenu,SetRegimenMenu] = useState("");

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
              <FiltradoDesayuno recetas={recetas} regimenMenu={regimenMenu} alergenosMenu={alergenosMenu} />
            </div>
            <div>
               <FiltradoAlmuerzo recetas={recetas} regimenMenu={regimenMenu} alergenosMenu={alergenosMenu}/> 
            </div>
            <div>
               <FiltradoCena recetas={recetas} regimenMenu={regimenMenu}  alergenosMenu={alergenosMenu}/> 
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

        <div>
          <button type='button'  onClick={handleclick1}>Crear Menu de 1 dia</button>
        </div>
        
        

        <label className='labels_SignUp'>Alérgenos
        <select value={alergenosMenu} onChange={(e) => SetAlergenosMenu(e.target.value)}>
                <option value="1"></option>
                <option value="lacteos">Lácteos</option>
                <option value="gluten">Gluten</option>
                <option value="huevo">Huevo</option>
                <option value="frutoSecos">frutoSecos</option>
        </select></label> 

        <label className='labels_SignUp'>Régimen
        <select value={regimenMenu} onChange={(e) => SetRegimenMenu(e.target.value)}>
                <option value="1"></option>
                <option value="vegetariano">Vegetariano</option>
                <option value="vegano">Vegano</option>
                <option value="Omnivoro">Omnívoro</option>
        </select></label> 
    
        </section>

        {handleClick()}
      </>
     
    )
 
  
}

export default CrearTablas