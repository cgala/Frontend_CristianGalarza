import usePacientes from "../hooks/usePacientes";
import Paciente from "./Paciente";

const ListadoPacientes = () => {

    const { pacientes  } = usePacientes()
    return (
        <>
            { pacientes.length ? 
            (
                <>
                    <h2 className="font-black text-3xl text-center mb-5">Lista de Pacientes</h2>

                    {pacientes.map( paciente => (
                        <Paciente 
                            key={paciente._id}
                            paciente={paciente}
                        />
                    ))}
                </>
            ) : 
            (
                <>
                    <h2 className="font-black text-3xl text-center">Lista Vacia de Pacientes</h2>
                </>
            )}
        </>
    )
  };
  
  export default ListadoPacientes;
  