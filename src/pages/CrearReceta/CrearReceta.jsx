import './CrearReceta.css'
import {crearRecetaUsuario} from '../../services/recetasUser.js'
import {useState,useEffect} from 'react'


const CrearReceta = () => {
  const [titulo,SetTitulo] = useState("");
  const [descript,SetDescript] = useState("")
  const [instrucc,SetInstrucc] = useState("");
  const [coockTime,SetCoockTime] = useState(0)
  const [serv,SetServ] = useState(0);
  const [img,SetImg] = useState("");
  const [comida,SetComida] = useState("");
  const [alergenos,SetAlergenos] = useState("");
  const [regimen,SetRegimen] = useState("");

 let id = localStorage.getItem("id")

  async function TodasRecetas(e) {
    const crearReceta = {
      title:titulo,
      description:descript,
      instructions:instrucc,
      coockingTime:coockTime,
      servingSize:serv,
      menuSetTime:comida,
      img_url:img,
      alergenos:alergenos,
      regimen:regimen,
      userId: id,
    }
    await crearRecetaUsuario(crearReceta)
  } 

 
  return (
    <section className='CrearReceta'>
     <h1 className='titulo_CrearReceta'>Crear Receta</h1>

      <form  className='FormularioRecetas'>

        <label className='labels_SignUp'>Nombre Receta </label>         
        <input type="text" className='input_SignUp' placeholder= "Tu Receta" value={titulo} onChange={(e) => SetTitulo(e.target.value)}/>

        <label className='labels_SignUp'>Description</label>         
        <input type="text" className='input_SignUp' placeholder= "" value={descript} onChange={(e) => SetDescript(e.target.value)}/>

        <label className='labels_SignUp'>Instrucciones de preparado</label>         
        <input type="text" className='input_SignUp' placeholder= "" value={instrucc} onChange={(e) => SetInstrucc(e.target.value)}/>

        <label className='labels_SignUp'>Tiempo de preparado</label>         
        <input type="number" className='input_SignUp' placeholder= "" value={coockTime} onChange={(e) => SetCoockTime(e.target.value)}/>

        <label className='labels_SignUp'>Añade tu imagen</label>         
        <input type="img" className='input_SignUp' placeholder= "" value={img} onChange={(e) => SetImg(e.target.value)}/>

        <label className='labels_SignUp'>Cantidad de porciones</label>         
        <input type="number" className='input_SignUp' placeholder= "" value={serv} onChange={(e) => SetServ(e.target.value)}/>

        <label className='labels_SignUp'>Tipo de comida</label> 
        <select value={comida} onChange={(e) => SetComida(e.target.value)}>
                <option value="1"></option>
                <option value="desayuno">Desayuno</option>
                <option value="almuerzo">Almuerzo</option>
                <option value="cena">Cena</option>
        </select>

        <label className='labels_SignUp'>Alérgenos</label> 
        <select value={alergenos} onChange={(e) => SetAlergenos(e.target.value)}>
                <option value="1"></option>
                <option value="lacteos">Lácteos</option>
                <option value="gluten">Gluten</option>
                <option value="huevo">Huevo</option>
                <option value="frutoSecos">frutoSecos</option>
        </select>

        <label className='labels_SignUp'>Régimen</label> 
        <select value={regimen} onChange={(e) => SetRegimen(e.target.value)}>
                <option value="1"></option>
                <option value="vegetariano">Vegetariano</option>
                <option value="vegano">Vegano</option>
                <option value="Omnivoro">Omnívoro</option>
        </select>    
            <button onClick={TodasRecetas}  type="submit" className='SignUp_Button'>
              Enviar receta
            </button>
      </form>
     
    </section>
  )
}

export default CrearReceta
