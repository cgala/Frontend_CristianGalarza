import usePacientes from "../hooks/usePacientes"

const Paciente = ({paciente}) => {

  const { setEdicion, eliminarPaciente } = usePacientes()

  const { email, fecha, nombre, propietario, sintomas, _id } = paciente

  const formatearFecha = (fecha) =>{
    const nuevaFecha = new Date(fecha)
    return new Intl.DateTimeFormat('es-ES', {dateStyle:'long'}).format()
  }

  return (
    <div className="bg-slate-200 p-3 mb-3 ml-2 rounded border border-slate-300">
      <p className="font-bold uppercase my-2">Nombre: {''}
        <span className="font-normal normal-case text-black">{nombre}</span>
      </p>
      <p className="font-bold uppercase my-2">Dueño: {''}
        <span className="font-normal normal-case text-black">{propietario}</span>
      </p>
      <p className="font-bold uppercase my-2">Email: {''}
        <span className="font-normal normal-case text-black">{email}</span>
      </p>
      <p className="font-bold uppercase my-2">Fecha de Alta: {''}
        <span className="font-normal normal-case text-black">{formatearFecha(fecha)}</span>
      </p>
      <p className="font-bold uppercase my-2">Sintomas: {''}
        <span className="font-normal normal-case text-black">{sintomas}</span>
      </p>

      <div className=" flex justify-between my-5">
        <button
          type="button"
          className=" bg-green-800 w-1/2 py-1 px-10 rounded-xl text-white uppercase
                    font-bold mt-5 hover:cursor-pointer hover:bg-green-700"
          /* recibe el paciente al apretar el boton editar y setea el hook que espera un solo objeto*/
          onClick={() => setEdicion(paciente)}
        >Editar
        </button>

        <button
          type="button"
          className=" bg-red-800 w-1/2 py-1 px-10 rounded-xl text-white uppercase
                    font-bold mt-5 hover:cursor-pointer hover:bg-red-700"
          onClick={() => eliminarPaciente(_id)}
        >Eliminar
        </button>
      </div>
    </div>
  )
}

export default Paciente