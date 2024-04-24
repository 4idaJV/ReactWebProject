import './Filtrado.css'

function Filtrado({recetas}) {
     console.log(recetas)

  return (
    <>
    {recetas.map((receta) => {
        return(
            <div className='recetas' key={receta.id}>
                <p>{receta.title}</p>
                <p>Tiempo de Elaboracion: {receta.cookingTime} </p>
                <img src={receta.img_url} alt="" />
            </div>
        );
    })} 
    </>
  )
}

export default Filtrado