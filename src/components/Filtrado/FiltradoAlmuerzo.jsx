import { useEffect,useState } from "react"

const FiltradoAlmuerzo = ({recetas,regimenMenu,alergenosMenu,actu,setActu}) => {
    const [breakf,SetBreakf] = useState([])
    const [bollean,SetBollean] = useState(false)
    const [numero,SetNumero] = useState(0)


    useEffect(() => {
        //Esto se usa para generar un tiempo y asi tener tiempo de recuperar la informacion
        const timeoutId = setTimeout(() => {
            SetBollean(true); 
          }, 300);
        //Con esto filtramos los desayunos de todas las recetas

        if(alergenosMenu != "" && regimenMenu != ""){
            const desayunos = recetas.filter((breakfast)=> {
            return breakfast.menuSetTime == "lunch"
                }).filter((regimen)=>{
            return regimen.regimen == regimenMenu && regimen.alergenos != alergenosMenu
            })
            SetBreakf(desayunos)
        } else if(alergenosMenu != ""){
            const desayunos = recetas.filter((breakfast)=> {
                return breakfast.menuSetTime == "lunch"
                    }).filter((regimen)=>{
                return regimen.alergenos != alergenosMenu
                })
                SetBreakf(desayunos)
        } else if(regimenMenu != ""){
            const desayunos = recetas.filter((breakfast)=> {
                return breakfast.menuSetTime == "lunch"
                    }).filter((regimen)=>{
                return regimen.regimen == regimenMenu
                })
                SetBreakf(desayunos)
        } else {
            const desayunos = recetas.filter((breakfast)=> {
                return breakfast.menuSetTime == "lunch"
                })
                SetBreakf(desayunos)
        }    
        
        //numero aleatorio
        const random = Math.floor(  Math.random() * breakf.length)
        SetNumero(random)
        setActu(false)
          return () => clearTimeout(timeoutId);  
    },[actu])

    function comprobar(){
        if(bollean == false){
            return (
                <div>Esperando..</div>
            )
        } else if(breakf[numero] == undefined) {
            console.log("hola")
            return(
                <>
                <p>No tenemos una receta que cumpla estos requisitos</p>
                </>
            )
            
        }else{
            return (
                 <div className="desayuno">
                     <h1 className='tituloComidas'>Almuerzo</h1>
                   <p>{breakf[numero].title}</p>
                  <p>Porciones:{breakf[numero].servingSize}</p>
                   <p>Instruciones :{breakf[numero].instructions}</p>
                  <img src={breakf[numero].img_url} alt="" />
                  <p>Ingredientes : {breakf[numero].ingredients.map((ingredientes,i)=> {
                        return <h3 key={i}>{ingredientes.name}</h3> 
                    })}</p>
                 </div>
            )    
        }
    }

    return(
        <>
        {comprobar()}
        </>
    )
}

export default FiltradoAlmuerzo
