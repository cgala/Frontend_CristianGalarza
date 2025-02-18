import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/axios";

const PacientesContext = createContext()

export const PacientesProvider = ({children}) =>{

    const [pacientes, setPacientes] = useState([])

    const guardarPaciente = async (paciente) => {
        try {
            const token = localStorage.getItem('token')
            const config = {
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            }

            const { data }= await clienteAxios.post('/pacientes',paciente, config)
            
            {/*creo un nuevo objeto omitiendo createdAt, updatedAt, __V */}
            const { createdAt, updatedAt, __V, ...pacienteAlmacenado} = data
            
            {/* agrego el paciente almacenado y una copia de pacientes*/}
            setPacientes([pacienteAlmacenado, ...pacientes])
        } catch (error) {
            console.log(error.response.data.msg)
        }
    }

    return(
        <PacientesContext.Provider
            value={{
                pacientes,
                guardarPaciente
                
            }}
        
        >
            {children}
        </PacientesContext.Provider>
    )
}

export default PacientesContext;