import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () => {
    //use context es para acceder a los valores de un context
    return useContext(AuthContext)

}

export default useAuth