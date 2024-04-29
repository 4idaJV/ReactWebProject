import './Filtrado.css'

function FiltradoTusRecetas({crearRecetas}) {
     console.log(crearRecetas.length)

  function mapTusRecetas(){
    if(crearRecetas.length == 0){
      return(
        <>
        <p>no tienes recetas disponibles</p>
        </>
      )
    } else if(crearRecetas) {
        return(
          <>
          {crearRecetas.map((receta) => {
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
  }


  return (
    <>
    {mapTusRecetas()} 
    </>
  )
}

export default FiltradoTusRecetas