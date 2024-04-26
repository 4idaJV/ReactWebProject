
import './Home.css'
import Filtrado from '../../components/Filtrado/Filtrado.jsx'
import {getTodos} from '../../services/recetas.js'
import {useState,useEffect} from 'react'
// Home.jsx
import './Home.css';


const Home = () => {
  const [recetas,SetRecetas] = useState([]);

  useEffect(()=> {
    TodasRecetas()
  },[])

  async function TodasRecetas() {
    const data = await getTodos()
    SetRecetas(data)
  }
  
  return (

   <section>
    <div className="Home-video">
      <video autoPlay loop muted className="video">
        <source src="https://videos.pexels.com/video-files/3209214/3209214-uhd_3840_2160_25fps.mp4" type="video/mp4" />
      </video>
      <div className="text-overlay">
        <p>Comienza la creación de tus propias recetas</p>
      </div>
      </div>
      <div className='recetasActu'>
         <Filtrado  recetas={recetas}/>
      </div>
  </section>
  );

}

export default Home;
