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
                      <img src={receta.img_url} className='imagen_recetas'  alt="" />
                      <p className='RecetaTitulo'>{receta.title}</p>
                  </div>
              );
          })} 
          </>
        )
    }
  }


  return (
    <section className='misRecetas'>
    {mapTusRecetas()} 
    </section>
  )
}

export default FiltradoTusRecetas