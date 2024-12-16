import React from 'react'

const Login = () => {
  return (
    <>
        <div>
            <h1 className='text-indigo-600 font-black text-6xl'>Login para Administrar tus Pacientes</h1>

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
                    className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase
                    font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
                />
            </form>
        </div>
    </>
  )
}

export default Login