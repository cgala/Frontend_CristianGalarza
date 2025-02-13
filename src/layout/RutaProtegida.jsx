import { Outlet, Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { useState } from "react"


const RutaProtegida = () => {

    const { auth, cargando } = useAuth()

    console.log(auth)
    console.log(cargando)

    if(cargando) return 'cargando...'

  return (
    <>
        <h1>Esta es una ruta protegida</h1>

        {/*si auth tiene un id, entonces mustra el outlet si no envia al iniciar Sesion
        con Navigate*/}
        
        {auth?._id ? <Outlet/> : <Navigate to="/" />}
    </>
  )
}

export default RutaProtegida