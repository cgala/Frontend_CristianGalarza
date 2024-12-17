import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
        <div>
            <h1 className='text-gray-600 font-black text-6xl'>
                Login para Administra t<span className='text-fuchsia-950'>u</span>s 
                P<span className='text-fuchsia-950'>a</span>c<span className='text-fuchsia-950'>i</span>entes
            </h1>
        </div>
        <div>
            <form>
                <div className="my-5">
                    <label className='uppercase text-gray-600 block text-xl font-bold'>
                        Email
                    </label>
                    <input 
                        type="text"
                        placeholder="Email de Registro"
                        className="border w-full p-3 bg-gray-50 rounded-xl"
                    />
                </div>
                <div className="my-5">
                    <label className='uppercase text-gray-600 block text-xl font-bold'>
                        Password
                    </label>
                    <input 
                        type="password"
                        placeholder="Tu password"
                        className="border w-full p-3 bg-gray-50 rounded-xl"
                    />
                </div>
                <input 
                    type="submit"
                    value="Iniciar Sesion"
                    className="bg-fuchsia-950 w-full py-3 px-10 rounded-xl text-white uppercase
                    font-bold mt-5 hover:cursor-pointer hover:bg-fuchsia-900 md:w-auto"
                />
            </form>
            {/* flex alinea los elemento uno al lado del otro*/}
            <nav className="flex space-x-4 mt-3">
                <Link to="/registrar" className="text-blue-500 hover:underline"> Registrate</Link>
                <Link to="/olvide-password" className="text-blue-500 hover:underline"> Olvide mi Password</Link>
            </nav>
        </div>
    </>
  )
}

export default Login