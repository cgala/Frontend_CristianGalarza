import { useContext } from "react";
import PacientesContext from "../context/PacientesProvider";

const usePacientes = () => {
    //use context es para acceder a los valores de un context
    return useContext(PacientesContext)

}

export default usePacientes