import { useState, useEffect } from "react";

const FiltradoDesayuno = ({ recetas, regimenMenu, alergenosMenu, actu, setActu }) => {
    const [breakf, SetBreakf] = useState([])
    const [bollean, SetBollean] = useState(false)
    const [numero, SetNumero] = useState(0)

    console.log(regimenMenu, alergenosMenu, actu)
    useEffect(() => {
        //Esto se usa para generar un tiempo y asi tener tiempo de recuperar la informacion
        const timeoutId = setTimeout(() => {
            SetBollean(true);
        }, 300);
        //Con esto filtramos los desayunos de todas las recetas
        if (alergenosMenu != "" && regimenMenu != "") {
            const desayunos = recetas.filter((breakfast) => {
                return breakfast.menuSetTime == "breakfast"
            }).filter((regimen) => {
                return regimen.regimen == regimenMenu && regimen.alergenos != alergenosMenu
            })
            SetBreakf(desayunos)
        } else if (alergenosMenu != "") {
            const desayunos = recetas.filter((breakfast) => {
                return breakfast.menuSetTime == "breakfast"
            }).filter((regimen) => {
                return regimen.alergenos != alergenosMenu
            })
            SetBreakf(desayunos)
        } else if (regimenMenu != "") {
            const desayunos = recetas.filter((breakfast) => {
                return breakfast.menuSetTime == "breakfast"
            }).filter((regimen) => {
                return regimen.regimen == regimenMenu
            })
            SetBreakf(desayunos)
        } else {
            const desayunos = recetas.filter((breakfast) => {
                return breakfast.menuSetTime == "breakfast"
            })
            SetBreakf(desayunos)
        }
        //numero aleatorio
        const random = Math.floor(Math.random() * breakf.length)
        SetNumero(random)
        setActu(false)
        return () => clearTimeout(timeoutId);
    }, [actu])

    function comprobar() {
        if (bollean == false) {
            return (
                <div>Esperando..</div>
            )
        } else if (breakf[numero] == undefined) {

            return (
                <>
                    <p>No tenemos una receta que cumpla estos requisitos</p>
                </>
            )

        } else {
            return (
                <div className="desayuno">
                    <h1 className='tituloComidas'>Desayuno</h1>
                    <div className="individualBoxMeals">

                        <div className="imgBox1">

                            <img className='imgSizeBoxes' src={breakf[numero].img_url} alt="" />

                            <div className="ajustarText">
                                <p className="bigRecipeTitle">{breakf[numero].title}</p>
                                <p><span className="negrita">Servings:</span> {breakf[numero].servingSize}</p>
                                <br/>
                                <p><span className="negrita">Instrucctions:</span> {breakf[numero].instructions}</p>
                                <p><span className="negrita">Type of Diet :</span>{breakf[numero].regimen}</p>
                            </div>

                        </div>
                    </div>
                </div>
            )
        }
    }
    return (
        <>
            {comprobar()}
        </>
    )

}

export default FiltradoDesayuno
