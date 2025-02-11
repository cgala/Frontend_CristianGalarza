import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/axios";

//context del provider
const AuthContext = createContext()

const AuthPrivider = ({children}) => {

    const [auth, setAuth] = useState({})

    useEffect(() => {
        const authenticarUsuario = async () => {
            const token = localStorage.getItem('token')
            
            if(!token) return

            const config = {
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const { data } = await clienteAxios('/veterinarios/perfil', config)
                
                setAuth(data)
            } catch (error) {
                console.log(error.response.data.msg)
                setAuth({})
                
            }

        }
        authenticarUsuario()   
    }, [])

    return(
        <AuthContext.Provider
            value={{
                auth,
                setAuth
            }}
        
        
        >
            {children}
        </AuthContext.Provider>
    )

}

export {
    AuthPrivider
}

export default AuthContext