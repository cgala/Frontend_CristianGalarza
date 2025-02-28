import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Header = () => {

    {/* extrae la funcion cerrarSesion del hook */}
    const { cerrarSesion } =useAuth()

  return (
    <header className="py-10 bg-slate-500">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="font-bold text-2xl text-indigo-200">
                <span className="text-white font-black">
                    Administrador de Pacientes
                </span>
            </h1>
            <nav className="flex gap-4">
                <button
                    type="button"
                    className="text-white text-xl"
                    onClick={cerrarSesion}
                    >Cerrar Sesion
                </button>
            </nav>

        </div>

    </header>
  )
}

export default Header