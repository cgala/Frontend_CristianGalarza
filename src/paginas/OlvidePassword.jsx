import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from '../components/Alerta';
import clienteAxios from "../config/axios";

const OlvidePassword = () => {
    const[email, setEmail] = useState('');
    const [alerta, setAlerta] = useState({});

    const handleSubmit = async e =>{
        e.preventDefault();

        if(email === '' || email.length < 6){
            setAlerta({msg: 'El email es obligatorio', error:true});
            return
        }

        try {
            const { data } = await clienteAxios.post('/veterinarios/olvide-password', { email });
            console.log(data);

            setAlerta({msg: data.msg});

        } catch(error){
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })

        }

    }


    const { msg } = alerta



  return (
    <>
        <div>
            <h1 className='text-gray-600 font-black text-6xl'>
                Rec<span className='text-fuchsia-950'>u</span>pera el <span className='text-fuchsia-950'>a</span>cceso
                a tus pac<span className='text-fuchsia-950'>i</span>entes
            </h1>
        </div>

        <div>
            <Alerta alerta={alerta}/>
            <form onSubmit={handleSubmit}>

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

                <input 
                    type="submit"
                    value="Recuperar"
                    className="bg-fuchsia-950 w-full py-3 px-10 rounded-xl text-white uppercase
                    font-bold mt-5 hover:cursor-pointer hover:bg-fuchsia-900 md:w-auto"
                />
            </form>

            <nav className="flex space-x-4 mt-3">
                <Link to="/" className="text-blue-500 hover:underline"> Ya tienen una cuenta?</Link>
            </nav>
        </div>   

    </>
  )
}

export default OlvidePassword