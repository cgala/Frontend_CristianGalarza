import { Link } from "react-router-dom";

const Registrar = () => {
    return (
      <>
         <div>
            <h1 className='text-gray-600 font-black text-6xl'>
                Crea tu c<span className='text-fuchsia-950'>u</span>enta y <span className='text-fuchsia-950'>a</span>dministra tus 
                pac<span className='text-fuchsia-950'>i</span>entes
            </h1>
        </div>
        <div>
            <form>
                <div className="my-5">
                    <label className='uppercase text-gray-600 block text-xl font-bold'>
                        Nombre
                    </label>
                    <input 
                        type="text"
                        placeholder="Tu nombre"
                        className="border w-full p-3 bg-gray-50 rounded-xl"
                    />
                </div>

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

                <div className="my-5">
                    <label className='uppercase text-gray-600 block text-xl font-bold'>
                        Repite tu password
                    </label>
                    <input 
                        type="password"
                        placeholder="Repite tu password"
                        className="border w-full p-3 bg-gray-50 rounded-xl"
                    />
                </div>

                <input 
                    type="submit"
                    value="Crear Cuenta"
                    className="bg-fuchsia-950 w-full py-3 px-10 rounded-xl text-white uppercase
                    font-bold mt-5 hover:cursor-pointer hover:bg-fuchsia-900 md:w-auto"
                />
            </form>

            <nav className="flex space-x-4 mt-3">
                <Link to="/" class="text-blue-500 hover:underline"> Ya tienen una cuenta?</Link>
                <Link to="/olvide-password" class="text-blue-500 hover:underline"> Olvide mi Password</Link>
            </nav>
        </div>
        
      </>
    )
  }
  
  export default Registrar