import './Recetas.css'
import { getTodos } from '../../services/recetas.js'
import { useState, useEffect } from 'react'
import Filtrado from '../../components/Filtrado/Filtrado.jsx'

const Recetas = () => {
    const [recetas, SetRecetas] = useState([]);
    const [comida, SetComida] = useState('')
    const [ids, SetId] = useState("")
    console.log(recetas)
    useEffect(() => {
        TodasRecetas()
    }, [])

    async function TodasRecetas() {
        const data = await getTodos()
        SetRecetas(data)
    }


    return (
        <section className='crearmenu' >
            <div className='flexRecepieEncab'>
                <div className='recipeTitle1'>
                    <h1 className='titulo_recetas'>RECIPES</h1>
                </div>
                <div className='label_Recetas'>
                    <label>
                        <select className='selectMeal' value={comida} onChange={(e) => SetComida(e.target.value)}>
                            <option value=""></option>
                            <option value="desayuno">Breakfast</option>
                            <option value="almuerzo">Lunch</option>
                            <option value="cena">Dinner</option>
                        </select>
                    </label>
                </div>
            </div>

            <div className='grid_recetas'>
                {mostrarRecetas(recetas, comida, SetId, ids)}
            </div>
        </section>
    )
}

function mostrarRecetas(recetas, comida, SetId, ids) {

    if (recetas.length == 0) {
        return <h1>Loading...</h1>
    } else if (recetas.length != 0 && comida == "desayuno") {
        return (
            <>
                {recetas.filter((receta) => {
                    return receta.menuSetTime == "breakfast"
                })
                    .map((recetas) => {
                        return (
                            <Filtrado key={recetas.id} recetas={recetas} SetId={SetId} ids={ids} />
                        )
                    })}
            </>
        )
    } else if (recetas.length != 0 && comida == "almuerzo") {
        return (
            <>
                {recetas.filter((receta) => {
                    return receta.menuSetTime == "lunch"
                })
                    .map((recetas) => {
                        return <Filtrado key={recetas.id} recetas={recetas} SetId={SetId} ids={ids} />
                    })}
            </>
        )
    } else if (recetas.length != 0 && comida == "cena") {
        return (
            <>
                {recetas.filter((receta) => {
                    return receta.menuSetTime == "dinner"
                })
                    .map((recetas) => {
                        return <Filtrado key={recetas.id} recetas={recetas} SetId={SetId} ids={ids} />
                    })}
            </>
        )
    } else if (recetas.length != 0) {
        return (
            <>
                {recetas.map((recetas) => {
                    return <Filtrado key={recetas.id} recetas={recetas} SetId={SetId} ids={ids} />
                })}
            </>
        )
    }
}

export default Recetas
