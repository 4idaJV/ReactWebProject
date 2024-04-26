import api from "./config";

export async function getTodos() {
    const { data } = await api.get('/recipe')
    return(data)
}