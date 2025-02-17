import { createContext, useState, useEffect } from "react";

const PacientesContext = createContext()

export const PacientesProvider = ({children}) =>{

    return(
        <PacientesContext.Provider
            value={{
                
            }}
        
        >
            {children}
        </PacientesContext.Provider>
    )
}

export default PacientesContext;