import {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Alerta from '../components/Alerta';
import clienteAxios from '../config/axios';


const Login = () => {

    const [totalVeterinarios, setTotalVeterinarios] = useState(0);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState({})

    const { setAuth } = useAuth()

    const navigate = useNavigate()

    //useEffect para obtener la cantidad de veterinarios al cargar la página
    useEffect(() => {
        const obtenerTotalVeterinarios = async () => {
            try {
                const { data } = await clienteAxios.get('/veterinarios/total'); 
                setTotalVeterinarios(data.total); 
            } catch (error) {
                console.error("Error al obtener el total de veterinarios", error);
            }
        };

        obtenerTotalVeterinarios();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if ([email, password].includes('')){
            setAlerta({
                msg:'todos los campos son obligatorios',
                error:true

            });
        }

        try{
            const { data } = await clienteAxios.post('/veterinarios/login', {email, password})
            localStorage.setItem('token', data.token)
            setAuth(data)
            navigate('/admin')
        }catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }

    }

    const {msg} = alerta
  return (
    <>
        <div>
            <h1 className='text-gray-600 font-black text-6xl'>
                Login para Administrar t<span className='text-fuchsia-950'>u</span>s 
                P<span className='text-fuchsia-950'>a</span>c<span className='text-fuchsia-950'>i</span>entes
            </h1>
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                <div className="my-5">
                    <label className='uppercase text-gray-600 block text-xl font-bold'>
                        Email
                    </label>
                    <input 
                        type="text"
                        placeholder="Email de Registro"
                        className="border w-full p-3 bg-gray-50 rounded-xl"
                        value = {email}
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
                        value = {password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <input 
                    type="submit"
                    value="Iniciar Sesion"
                    className="bg-fuchsia-950 w-full py-3 px-10 rounded-xl text-white uppercase
                    font-bold mt-5 hover:cursor-pointer hover:bg-fuchsia-900 md:w-auto"
                />
            </form>
            {msg && <Alerta alerta={alerta}/>}
            {/* flex alinea los elemento uno al lado del otro*/}
            <nav className="flex space-x-4 mt-3">
                <Link to="/registrar" className="text-blue-500 hover:underline"> Registrate</Link>
                <Link to="/olvide-password" className="text-blue-500 hover:underline"> Olvide mi Password</Link>
            </nav>
        </div>

        <div className="mt-5 text-gray-700 font-semibold">
            <p>Total de veterinarios registrados: <span className="text-fuchsia-950 font-bold">{totalVeterinarios}</span></p>
        </div>
    </>
  )
}

export default Login