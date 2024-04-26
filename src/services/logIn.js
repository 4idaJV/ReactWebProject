import api from "./config";

export async function logIn(sign) {
    const { data } = await api.post('/auth/login',sign)
    return data
}