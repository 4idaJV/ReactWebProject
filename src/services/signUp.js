import api from "./config";

export async function signUp(sign) {
    const { data } = await api.post('/auth/signup',sign)
    return data
}