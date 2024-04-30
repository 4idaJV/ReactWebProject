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

  const [alergenosMenu1,SetAlergenosMenu1] = useState(false);
  const [alergenosMenu2,SetAlergenosMenu2] = useState(false);
  const [alergenosMenu3,SetAlergenosMenu3] = useState(false);
  const [alergenosMenu4,SetAlergenosMenu4] = useState(false);

  const [regimenMenu,SetRegimenMenu] = useState("");

  const [regimenMenu1,SetRegimenMenu1] = useState(false);
  const [regimenMenu2,SetRegimenMenu2] = useState(false);
  const [regimenMenu3,SetRegimenMenu3] = useState(false);

  console.log(regimenMenu)
  console.log(alergenosMenu)
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


  function handleCheckbox(event){
    if(regimenMenu1){
      SetRegimenMenu1(!regimenMenu1)
      SetRegimenMenu("")
    } else { 
      SetRegimenMenu1(!regimenMenu1)
      SetRegimenMenu2(false)
      SetRegimenMenu3(false)
      SetRegimenMenu(event.target.value)
    }
 }
    function handleCheckbox2(event){
    if(regimenMenu2 == true){
      SetRegimenMenu2(!regimenMenu2)
      SetRegimenMenu("")
    } else if(regimenMenu2 == false){
      SetRegimenMenu2(!regimenMenu2)
      SetRegimenMenu1(false)
      SetRegimenMenu3(false)
      SetRegimenMenu(event.target.value)
    }
  }

  function handleCheckbox3(event){
    if(regimenMenu3 == true){
      SetRegimenMenu3(!regimenMenu3)
      SetRegimenMenu("")
    } else if(regimenMenu3 == false){
      SetRegimenMenu3(!regimenMenu3)
      SetRegimenMenu1(false)
      SetRegimenMenu2(false)
      SetRegimenMenu(event.target.value)
    }
  }

  function handleCheckbox4(event){
    if(alergenosMenu1 == true){
      SetAlergenosMenu1(!alergenosMenu1)
      SetAlergenosMenu("")
    } else if(alergenosMenu1 == false){
      SetAlergenosMenu1(!alergenosMenu1)
      SetAlergenosMenu3(false)
      SetAlergenosMenu4(false)
      SetAlergenosMenu2(false)
      SetAlergenosMenu("huevo")
    }
  }

  function handleCheckbox5(event){
    if(alergenosMenu2 == true){
      SetAlergenosMenu2(!alergenosMenu2)
      SetAlergenosMenu("")
    } else if(alergenosMenu2 == false){
      SetAlergenosMenu2(!alergenosMenu2)
      SetAlergenosMenu3(false)
      SetAlergenosMenu4(false)
      SetAlergenosMenu1(false)
      SetAlergenosMenu("gluten")
    }
  }

  function handleCheckbox6(event){
    if(alergenosMenu3 == true){
      SetAlergenosMenu3(!alergenosMenu3)
      SetAlergenosMenu("")
    } else if(alergenosMenu3 == false){
      SetAlergenosMenu3(!alergenosMenu3)
      SetAlergenosMenu4(false)
      SetAlergenosMenu2(false)
      SetAlergenosMenu1(false)
      SetAlergenosMenu("frutoSecos")
    }
  }

  function handleCheckbox7(event){
    if(alergenosMenu4 == true){
      SetAlergenosMenu4(!alergenosMenu4)
      SetAlergenosMenu("")
    } else if(alergenosMenu4 == false){
      SetAlergenosMenu4(!alergenosMenu4)
      SetAlergenosMenu3(false)
      SetAlergenosMenu2(false)
      SetAlergenosMenu1(false)
      SetAlergenosMenu("lacteos")
    }
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
              <input type="checkbox" className='check' value="Omnivoro"  checked={regimenMenu1} onChange={handleCheckbox}/>
              <label className='label_CrearTabla'> Omnívoro
              <p>Como Carne y pescado</p></label>
            </div>

            <div className='agree'>
              <input type="checkbox" className='check' value="vegetariano" checked={regimenMenu2} onChange={handleCheckbox2}  />
              <label className='label_CrearTabla'> Vegetariano
              <p>Como alimentos de origen animal vegetal</p></label>
            </div>
            <div className='agree'>
              <input type="checkbox" className='check' value="vegano" checked={regimenMenu3} onChange={handleCheckbox3}/>
              <label className='label_CrearTabla'> Vegano
              <p>No como alimentos de origen animal</p></label>
            </div>
        </section>
          
        <h1 className='titulosCrearTablas'>¿Tienes alguna alergia o intolerancia alimenticia?</h1>
        <section className=''>
          
          <div className='alergias'>

            <div className='agree'>
              <input type="checkbox" className='check' checked={alergenosMenu1} onChange={handleCheckbox4} />
              <label className='label_checkbox'> Huevo</label>
            </div>

            <div className='agree'>
              <input type="checkbox" className='check' checked={alergenosMenu2} onChange={handleCheckbox5} />
              <label className='label_checkbox'> Gluten</label>
            </div>

            <div className='agree'>
              <input type="checkbox" className='check' checked={alergenosMenu3} onChange={handleCheckbox6} />
              <label className='label_checkbox'>Frutos Secos</label>
            </div>

            <div className='agree'>
              <input type="checkbox" className='check' checked={alergenosMenu4} onChange={handleCheckbox7} />
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