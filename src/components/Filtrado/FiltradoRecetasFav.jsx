import './Filtrado.css'

function FiltradoTusRecetasFav({crearRecetasFAV}) {


  function mapTusRecetas(){
    if(crearRecetasFAV.length == 0){
      return(
        <>
        <p>no tienes recetas disponibles</p>
        </>
      )
    } else if(crearRecetasFAV) {
        return(
          <>
          {crearRecetasFAV.map((receta) => {
              return(
                  <div className='recetasCreadas' key={receta.id}>
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

export default FiltradoTusRecetasFav