import { useState, useEffect, createContext } from "react";

//context del provider
const AuthContext = createContext()

const AuthPrivider = ({children}) => {

    const AuthProvider = ({children}) = useState({})

    return(
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )

}

export {
    AuthPrivider
}

export default AuthContext