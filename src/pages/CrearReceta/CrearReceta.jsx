import './CrearReceta.css'
import { crearRecetaUsuario } from '../../services/recetasUser.js'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CrearReceta = () => {
  const [titulo, SetTitulo] = useState("");
  const [descript, SetDescript] = useState("")
  const [instrucc, SetInstrucc] = useState("");
  const [coockTime, SetCoockTime] = useState(0)
  const [prepTime, SetPreTime] = useState(0)

  const [serv, SetServ] = useState(0);
  const [img, SetImg] = useState("");
  const [comida, SetComida] = useState("");
  const [alergenos, SetAlergenos] = useState("");
  const [regimen, SetRegimen] = useState("");
  const [Url_Imagen,SetUrl_Imagen] = useState("")
  const navigate = useNavigate()
  let tokens = localStorage.getItem("token")
  let id = localStorage.getItem("id")

  async function TodasRecetas(e) {

    if (!tokens) {
      alert("Registrate para acceder a tu menu");  
    } else {   
    const crearReceta = {
      title: titulo,
      description: descript,
      instructions: instrucc,
      preparationTime:prepTime,
      coockingTime: coockTime,
      servingSize: serv,
      menuSetTime: comida,
      img_url: Url_Imagen,
      alergenos: alergenos,
      regimen: regimen,
      userId: id,
    }
    await crearRecetaUsuario(crearReceta) 
  }
  }

  const ChangeUploadImage = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    console.log(file)
    data.append("file" , file )
    data.append("upload_preset" , "subir_imagenes");

    const response = await axios.post("https://api.cloudinary.com/v1_1/dy0qrz2ww/image/upload",
  data)
   SetUrl_Imagen(response.data.secure_url)
  }


  return (
    <section className='CrearReceta'>
      

        <form className='FormularioRecetas' onSubmit={TodasRecetas}>
          <p className='titulo_CrearReceta'>CREATE RECIPE</p>
          <label className='labels_SignUp1'>NAME </label>
          <input type="text" className='input_SignUp1' placeholder="Your Recipe Name" value={titulo} onChange={(e) => SetTitulo(e.target.value)} />

          <label className='labels_SignUp1'>INGREDIENTS</label>
          <input type="text" className='input_SignUp1' placeholder="Add All the Ingredients" value={descript} onChange={(e) => SetDescript(e.target.value)} />

          <label className='labels_SignUp1'>INSTRUCTIONS</label>
          <input type="text" className='input_SignUp1' placeholder="How to Prepare Your Recipe" value={instrucc} onChange={(e) => SetInstrucc(e.target.value)} />

          <label className='labels_SignUp1'>PREPARATION TIME</label>
          <input type="number" className='input_SignUp1' placeholder="" value={prepTime} onChange={(e) => SetPreTime(e.target.value)} />

          <label className='labels_SignUp1'>ADD YOUR IMAGE</label>
          <input type="img" className='input_SignUp1' placeholder="" value={img} onChange={(e) => SetImg(e.target.value)} />
          <div>
             <input  type='file' accept='image/*' className='input_SignUp2' onChange={ChangeUploadImage} />
          </div>
         

          <label className='labels_SignUp1'>SERVING SIZE</label>
          <input type="number" className='input_SignUp1 ' placeholder="" value={serv} onChange={(e) => SetServ(e.target.value)} />


        
          <div className='selectBoxes'>
            <div className='individualSelectBox'>
              <label className='labels_SignUp1'>TYPE OF MEAL</label>
              <select className="boxScroll" value={comida} onChange={(e) => SetComida(e.target.value)}>
                <option value="1"></option>
                <option value="desayuno">Breakfast</option>
                <option value="almuerzo">Lunch</option>
                <option value="cena">Dinner</option>
              </select>
            </div>


            <div className='individualSelectBox'>
              <label className='labels_SignUp1'>ALLERGENS</label>
              <select className="boxScroll" value={alergenos} onChange={(e) => SetAlergenos(e.target.value)}>
                <option value="1"></option>
                <option value="lacteos">Dairy</option>
                <option value="gluten">Gluten</option>
                <option value="huevo">Egg</option>
                <option value="frutoSecos">Nuts</option>
              </select>
            </div>

            <div className='individualSelectBox'>
              <label className='labels_SignUp1'>TYPE OF DIET</label>
              <select className="boxScroll" value={regimen} onChange={(e) => SetRegimen(e.target.value)}>
                <option value="1"></option>
                <option value="vegetariano">Vegetarian</option>
                <option value="vegano">Vegan</option>
                <option value="Omnivoro">Omnivore</option>
              </select>
            </div>
          </div>
  

          <button type="submit" className='SignUp_ButtonCrearRecetas'>
            Create Recipe
          </button>
        </form>
    </section>
  )
}

export default CrearReceta
