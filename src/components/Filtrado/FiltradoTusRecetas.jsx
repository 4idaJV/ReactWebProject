import './Filtrado.css'

function FiltradoTusRecetas({crearRecetas}) {
     console.log(crearRecetas)

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
                      <img src={receta.img_url} className='imagen_recetas'  alt="" />
                      <p>Alérgenos:{receta.alergenos}</p>
                      <p>Régimen:{receta.regimen}</p>
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