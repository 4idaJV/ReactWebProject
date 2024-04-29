import './CrearTablas.css'
import {getTodos} from '../../services/recetas.js'
import {useState,useEffect} from 'react'
import FiltradoDesayuno from '../../components/Filtrado/FiltradoDesayuno.jsx'
import FiltradoAlmuerzo from '../../components/Filtrado/FiltradoAlmuerzo.jsx'
import FiltradoCena from '../../components/Filtrado/FiltradoCena.jsx'

function CrearTablas() {
  const [recetas,SetRecetas] = useState([]);
  const [boolean,SetBollean] = useState(false);
  const [actu,setActu] = useState(false)
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
    setActu(true)
  }

  function handleClick(){
      if (boolean == true){
        return(
          <div>
            <div>
              <FiltradoDesayuno recetas={recetas} regimenMenu={regimenMenu} alergenosMenu={alergenosMenu} actu={actu} setActu={setActu} />
            </div>
            <div>
              <FiltradoAlmuerzo recetas={recetas} regimenMenu={regimenMenu} alergenosMenu={alergenosMenu} actu={actu}  setActu={setActu}/>
            </div>
            <div>
              <FiltradoCena recetas={recetas} regimenMenu={regimenMenu}  alergenosMenu={alergenosMenu} actu={actu}  setActu={setActu}/>
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
      <section className='crearTablasMenu'>

      <div className='formularioCrearTablas'>
      
      <h1 className='titulosCrearTablas'>Selecciona el mejor tipo de dieta que se adapte a ti</h1>
        <section className='regimen'>
          
            <div className='agree'>
              <input type="checkbox" className='check' checked={regimenMenu} onChange={(event) => SetRegimenMenu(event)} />
              <label className='label_CrearTabla'> Omnívoro
              <p>Como Carne y pescado</p></label>
            </div>

            <div className='agree'>
              <input type="checkbox" className='check' checked={regimenMenu} onChange={(event) => SetRegimenMenu(event)} />
              <label className='label_CrearTabla'> Vegetariano
              <p>Como alimentos de origen animal vegetal</p></label>
            </div>
            <div className='agree'>
              <input type="checkbox" className='check'/>
              <label className='label_CrearTabla'> Vegano
              <p>No como alimentos de origen animal</p></label>
            </div>
        </section>
          
        <h1 className='titulosCrearTablas'>¿Tienes alguna alergia o intolerancia alimenticia?</h1>
        <section className=''>
          
          <div className='alergias'>

            <div className='agree'>
              <input type="checkbox" className='check' checked={regimenMenu} onChange={(event) => SetRegimenMenu(event)} />
              <label className='label_checkbox'> Huevo</label>
            </div>

            <div className='agree'>
              <input type="checkbox" className='check' checked={regimenMenu} onChange={(event) => SetRegimenMenu(event)} />
              <label className='label_checkbox'> Frutos Secos</label>
            </div>

            <div className='agree'>
              <input type="checkbox" className='check' checked={regimenMenu} onChange={(event) => SetRegimenMenu(event)} />
              <label className='label_checkbox'> Gluten</label>
            </div>

            <div className='agree'>
              <input type="checkbox" className='check' checked={regimenMenu} onChange={(event) => SetRegimenMenu(event)} />
              <label className='label_checkbox'> Lactosa</label>
            </div>

          </div>
        </section>

        <section className='aviso'>
          <h2>Aviso Importante</h2>
          <p>Nuestros consejos han sido revisados por expertso en nutricion y están destinados únicamente como orientación.Si sufres de una alergia alimentaria grave ,te recomendamos que consultes siempre con tu médico antes de probar alguna de nuestras recetas.</p>
          <br/>
          <p>Utilizamos estos datos para determinar tus necesidades nutricionales y proporcionarte sugerencias adaptadas a ti.</p>
        </section>

        <div>
          <button type='button' className='SignUp_Button'  onClick={handleclick1}>Get Menu</button>
        </div>

      </div>
        </section>

        {handleClick()}
      </>
     
    )
 
  
}

export default CrearTablas