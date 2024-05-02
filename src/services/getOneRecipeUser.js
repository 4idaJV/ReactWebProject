import api from "./config";

export async function getOneRecipeUser(id,body) {
    const { data } = await api.get(`/recipeUser/a/${id}`,body)
    return(data)
}