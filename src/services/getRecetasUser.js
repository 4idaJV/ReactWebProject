import api from "./config";

export async function getRecetasUser(id) {
    const { data } = await api.get(`/recipeUser/${id}`)
    return(data)
}