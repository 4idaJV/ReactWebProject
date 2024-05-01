import api from "./config";

export async function getOneRecipe(id) {
    const { data } = await api.get(`/recipe/a/${id}`)
    return(data)
}