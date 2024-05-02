import './Filtrado.css'
import {Link} from 'react-router-dom'

function FiltradoTusRecetas({crearRecetas,receta}) {
  let cool = receta.id

    if(crearRecetas.length == 0){
      return(
        <>
        <p>no tienes recetas disponibles</p>
        </>
      )
    } else if(crearRecetas) {
      //console.log(crearRecetas)
        return(
          <>
                <div className='recetasCreadas' key={receta.id}>
                      <img src={receta.img_url} className='imagen_recetas'  alt="" />
                      <p className='RecetaTitulo'>{receta.title}</p>
                      <Link to={`/PaginaReceta2/${cool}`}><button type='button' className='recc'>SEE</button></Link>
                  </div>
          </>
        )

  }


  return (
    <section className='misRecetas'>
    {mapTusRecetas()} 
    </section>
  )
}

export default FiltradoTusRecetas