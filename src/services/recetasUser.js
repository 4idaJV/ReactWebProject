import api from "./config";

export async function crearRecetaUsuario(crear) {
    const { data } = await api.post('/recipeUser',crear)
    return(data)
}