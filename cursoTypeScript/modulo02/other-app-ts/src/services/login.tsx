import { api } from "../api";



export const verification = async (email: string, password: string): Promise<boolean> => {
    

    const data: any = await api;

    if (email === data.email && password === data.password) {
        return true
    }
    return false
    
}


