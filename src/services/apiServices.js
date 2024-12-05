import apiClient from "./axiosConfig";


export const login = async (email, password) => {
    try {
        const response = await apiClient().post('/auth/login', {email, password})
        return response;
    } catch (error) {
        throw error
    }
}

export const getUserByToken = async (token) => {
    try {
        const response = await apiClient().get('/auth/me', {headers: {Authorization: `Bearer ${token}`}})
        return response;
    } catch (error) {
        throw error
    }
}