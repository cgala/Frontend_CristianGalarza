import {useState} from 'react'
import { Link } from "react-router-dom";
//import axios from 'axios';
import Alerta from '../components/Alerta';
import clienteAxios from '../config/axios';

const Registrar = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPasswod] = useState('');
    const [repetirPasword, setRepetirPasword] = useState('');
    const [alerta, setAlerta] = useState({});

    const handleSubmit = async e => {
        e.preventDefault();
        if([nombre, email, password, repetirPasword].includes('')){
            setAlerta({msg: 'Hay campos vacios', error:true})
            return;
        }
        if (password !== repetirPasword){
            setAlerta({msg: 'Los passwords no son iguales', error:true})
            return;
        }

        if(password.length < 6){
            setAlerta({msg: 'El largo de la contraseña tiene que ser mayor a 6 caracteres', error:true})
            return;
        }

        setAlerta({});

        //crear un usuario en la API
        try{
            const url = `/veterinarios`
            await clienteAxios.post(url, { nombre, email, password })
            setAlerta({
                msg:'Creado correctamente, revisa tu mail',
                error:false
            });

        } catch (error){
            //veo el mensaje desde el back
            //console.log(error.response);

            //capturo el mensaje y muestro en el front
            setAlerta({
                msg:error.response.data.msg,
                error:true
            });
        }

    }


    return (
        <>
            <div>
                <h1 className='text-gray-600 font-black text-6xl'>
                    Crea tu c<span className='text-fuchsia-950'>u</span>enta y <span className='text-fuchsia-950'>a</span>dministra tus 
                    pac<span className='text-fuchsia-950'>i</span>entes
                </h1>
            </div>
            <div>
                <Alerta alerta={alerta}/>
                <form onSubmit={handleSubmit}>
                    <div className="my-5">
                        <label className='uppercase text-gray-600 block text-xl font-bold'>
                            Nombre
                        </label>
                        <input 
                            type="text"
                            placeholder="Tu nombre"
                            className="border w-full p-3 bg-gray-50 rounded-xl"
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
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
                            value={email}
                            onChange={e => setEmail(e.target.value)}
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
                            value={password}
                            onChange={e => setPasswod(e.target.value)}
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
                            value={repetirPasword}
                            onChange={e => setRepetirPasword(e.target.value)}
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
                    <Link to="/" className="text-blue-500 hover:underline"> Ya tienen una cuenta?</Link>
                    <Link to="/olvide-password" className="text-blue-500 hover:underline"> Olvide mi Password</Link>
                </nav>
            </div>
        
        </>
    )
  }
  
  export default Registrar