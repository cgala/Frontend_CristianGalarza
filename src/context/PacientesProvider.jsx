import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/axios";


const PacientesContext = createContext()

export const PacientesProvider = ({children}) =>{

    const [pacientes, setPacientes] = useState([])
    const [paciente, setPaciente] = useState({})

    useEffect(( )=> {
        const obtenerPacientes = async () => {

            try {
                const token = localStorage.getItem('token')
                if(!token) return

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }

                const { data } = await clienteAxios('/pacientes', config)
                setPacientes(data)
                
            } catch (error) {
                console.log(error)
            }
        }
        obtenerPacientes()
    }, [])
    
    const guardarPaciente = async (paciente) => {

        const token = localStorage.getItem('token')
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        /*si el paciente tiene un id implica que existe en la base, entonces se actualiza con el put
        si no tiene id, es un paciente nuevo*/
        if(paciente.id) {
            try {
                const { data } = await clienteAxios.put(`/pacientes/${paciente.id}`, paciente, config)

                const pacientesActualizado = pacientes.map( pacienteState => pacienteState._id === data._id ? data : pacienteState )
                setPacientes(pacientesActualizado)
            } catch (error) {
                console.log(error)
            }
        } else {
            /*como no existe lo crea con post y obtengo los datos del paciente creado en data */
            try {
                const { data } = await clienteAxios.post('/pacientes', paciente, config)
                const { createdAt, updatedAt, __v, ...pacienteAlmacenado } = data
                setPacientes([pacienteAlmacenado, ...pacientes])
            } catch (error) {
                console.log(error.response.data.msg)
            }
        }
    }
    {/* recibe el paciente al apretar el boton editar y setea el hook que espera un solo objeto*/}
    const setEdicion = (paciente) => {
        setPaciente(paciente)
    }

    const eliminarPaciente = (id) => {
        console.log(id)
    }

    return(
        <PacientesContext.Provider
            value={{
                pacientes,
                guardarPaciente,
                setEdicion,
                paciente,
                eliminarPaciente
                
            }}
        
        >
            {children}
        </PacientesContext.Provider>
    )
}

export default PacientesContext;