import './Filtrado.css'

function Filtrado({recetas}) {
     console.log(recetas)

  return (
    <>
    {recetas.map((receta) => {
        return(
            <div className='recetas' key={receta.id}>
                <h2>{receta.title}</h2>
                <p>Tiempo de Elaboracion: {receta.cookingTime} </p>
                <img className='imagen_recetas' src={receta.img_url} alt="" />
            </div>
        );
    })} 
    </>
  )
}

export default Filtrado