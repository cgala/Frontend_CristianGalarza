import { Outlet, Navigate } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
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

        <Header/>
        {/*si auth tiene un id, entonces mustra el outlet si no envia al iniciar Sesion
        con Navigate, outlett inyecta el grupo de rutas definidas en app.jsx*/}
        {auth?._id ? <main className="container mx-auto mt-10"><Outlet/></main> : <Navigate to="/" />}
        <Footer/>
    </>
  )
}

export default RutaProtegida