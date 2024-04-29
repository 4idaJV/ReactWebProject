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

  let id = -1
 id = localStorage.getItem("id")
  //console.log(titulo,descript,instrucc,coockTime,serv,prep,comida)
  console.log(id)

  async function TodasRecetas(e) {
    const crearReceta = {
      title:titulo,
      description:descript,
      instructions:instrucc,
      cookingTime:coockTime,
      servingSize:serv,
      preparationTime:serv,
      menuSetTime:comida,
      img_url:comida,
      userId: id
    }
    await crearRecetaUsuario(crearReceta)
  } 

 
  return (
    <section className='CrearReceta'>
     <h1 className='titulo_CrearReceta'>Crear Receta</h1>

      <form  onSubmit={TodasRecetas} className='FormularioRecetas'>

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
            <button type="submit" className='SignUp_Button'>
              Enviar receta
            </button>
      </form>
    </section>
  )
}

export default CrearReceta
