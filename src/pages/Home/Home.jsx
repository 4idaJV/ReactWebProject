
import './Home.css'
import Filtrado from '../../components/Filtrado/Filtrado.jsx'
import {getTodos} from '../../services/recetas.js'
import {useState,useEffect} from 'react'


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
      <div className="video-container">
        <video autoPlay loop muted className="video">
          <source
            src="https://videos.pexels.com/video-files/1841002/1841002-uhd_4096_2160_24fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="text-overlay">
        <p>Comienza la creación de tus propias recetas</p>
      </div>
      <div className="text-overlay">
        <p>Comienza la creación de tus propias recetas</p>
      </div>
      <h1 className="titulo1">How It Works</h1>

      <div className="container">
        <div className="caja">
          <img
            src="https://img.freepik.com/free-vector/eating-variety-foods-concept-illustration_114360-11295.jpg"
            alt=""
          />
          <h1 className="subtitulo">Create Your Menu</h1>
          <p>
            Our dairy meal plans offer the variety and flexibility for you to
            get the recipes that best fit your needs.
          </p>
        </div>
        <div className="caja">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-business-planning_52683-76248.jpg?w=826&t=st=1714057625~exp=1714058225~hmac=04b5b57feb67803cb38026e51f71318d1ec00c105e88efd0ca916b0a685f8045"
            alt=""
          />
          <h1 className="subtitulo">Get Your Grocery</h1>
          <p>
            We provide you with a personalized shopping list that fits your
            budget.
          </p>
        </div>
        <div className="caja">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-flat-design-people-eating-collection_23-2149194118.jpg?w=826&t=st=1714057571~exp=1714058171~hmac=476cf52e5052dcf2eb5b5c60c5bc0dbed9f197dc3371f0d32e918ff034250c6b"
            alt=""
          />
          <h1 className="subtitulo">Cook Quick & Easy</h1>
          <p>
            We tailor our recipes to fit your skills in cooking and your busy
            lifestyle, ensuring a satisfying and accessible culinary experience
            for everyone.
          </p>
        </div>
      </div>

      <div className="caja2">
        <h1 className="subtitulo2">A spoonful of Sazzón</h1>
        <p>
          We know how important it is for you to enjoy nutritious meals without
          sacrificing time or quality, which is why we've created this practical
          and versatile menu. In just a few minutes, you'll find a carefully
          curated selection of delicious and healthy options that perfectly fit
          your lifestyle.
        </p>
      </div>
      <div className='recetasActu'>
         <Filtrado  recetas={recetas}/>
      </div>
    </div>
  </section>
  );

}


export default Home;
