import { Outlet } from "react-router-dom" /* outlet es para inyectar componentes hijos de otros*/

const AuthLayout = () => {
  return (
    <>
        {/* md: mediacuery
            mt margin top
            grid para crear columnas
            gap para generar un espacio entre las columnas*/}
        <main className="container mx-auto md:grid md:grid-cols-2 mt-12 gap-10 p-5">
            <Outlet/>
        </main>
       
    </>
  )
}

export default AuthLayout