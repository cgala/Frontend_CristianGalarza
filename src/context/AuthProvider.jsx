import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/axios";

//context del provider
const AuthContext = createContext()

const AuthPrivider = ({children}) => {

    const [cargando, setCargando] = useState(true)
    const [auth, setAuth] = useState({})

    useEffect(() => {
        const authenticarUsuario = async () => {
            const token = localStorage.getItem('token')
            
            if(!token) {
                setCargando(false)
                return
            }

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

            setCargando(false)
        }
        authenticarUsuario()   
    }, [])

    return(
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                cargando
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