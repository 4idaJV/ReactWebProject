import api from "./config";

export async function getRecetasFav(id) {
    const { data } = await api.get(`/recipe/${id}`)
    return(data)
}