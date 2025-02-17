import { useState } from 'react'
import Alerta from './Alerta'

const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState(Date.now())
    const [sintomas, setSintomas] = useState('')

    const [alerta, setAlerta] = useState({})

    const handleSubmit = e => {
        e.preventDefault()

        //validacion del formulario
        if ([nombre, propietario, email, fecha, sintomas].includes('')){
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true

            })
        return
        }
    }
    const { msg } = alerta

  return (
    <>
    <p className="text-lg text-center mb-10">
        Agrega tus pacientes
    </p>
    <form className="bg-gray-300 py-10 px-5" onSubmit={handleSubmit}>
        <div className="mb-5">
            <label
                htmlFor="nombre"
                className="text-gray-700 uppercase font-bold"
                
                
                >Nombre Mascota</label>
            <input
                id="nombre"
                type="text"
                placeholder="Nombre de la Mascota"
                className="border-2 w-full p-2 mt-2 placeholder-gray-200 rounded-md"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
            />
        </div>

        <div className="mb-5">
            <label
                htmlFor="propietario"
                className="text-gray-700 uppercase font-bold"
                
                
                >Nombre Propietario</label>
            <input
                id="propietario"
                type="text"
                placeholder="Nombre del Propietario"
                className="border-2 w-full p-2 mt-2 placeholder-gray-200 rounded-md"
                value={propietario}
                onChange={e => setPropietario(e.target.value)}
            />
        </div>

        <div className="mb-5">
            <label
                htmlFor="email"
                className="text-gray-700 uppercase font-bold"
                
                
                >Email del Propietario</label>
            <input
                id="email"
                type="email"
                placeholder="Email del Propietario"
                className="border-2 w-full p-2 mt-2 placeholder-gray-200 rounded-md"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
        </div>

        <div className="mb-5">
            <label
                htmlFor="fecha"
                className="text-gray-700 uppercase font-bold"
                
                
                >Fecha Alta</label>
            <input
                id="fecha"
                type="date"
                className="border-2 w-full p-2 mt-2 placeholder-gray-200 rounded-md"
                value={fecha}
                onChange={e => setFecha(e.target.value)}
            />
        </div>

        <div className="mb-5">
            <label
                htmlFor="sintomas"
                className="text-gray-700 uppercase font-bold"
                
                
                >Sintomas</label>
            <textarea
                id="sintomas"
                className="border-2 w-full p-2 mt-2 placeholder-gray-200 rounded-md"
                value={sintomas}
                onChange={e => setSintomas(e.target.value)}
            />
        </div>

        <input
            type = "submit"
            className="bg-fuchsia-950 w-full py-3 px-10 rounded-xl text-white uppercase
            font-bold mt-5 hover:cursor-pointer hover:bg-fuchsia-900"
            value= "Agregar Paciente"
        />
    </form>

    {msg && <Alerta alerta={alerta}/>}
    </>
  )
}

export default Formulario