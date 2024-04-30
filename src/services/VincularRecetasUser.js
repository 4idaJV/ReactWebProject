import api from "./config";

export async function VincularUR(user) {
    const { data } = await api.post('/menu',user)
    return data
}