import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";
import { Link } from "react-router-dom";

const NuevoPassword = () => {
  const [password, setPasswod] = useState('');
  const [alerta, setAlerta] = useState({});
  const [tokenValido, setTokenValido] = useState(false);
  const [ passwordModificado, setPasswordModificado] = useState(false);

  const params = useParams();
  const { token } = params

  useEffect(() => {
    const comprobarToken = async () => {
      try{
        await clienteAxios(`/veterinarios/olvide-password/${token}`);
        setAlerta({
          msg: 'Coloca tu Nuevo Password'
        })
        setTokenValido(true);

      }catch(error){
        setAlerta({
          msg: 'Hubo un error con el enlace',
          error: true
        })
        
      }
    }
    comprobarToken();

  }, []);

  const { msg } = alerta;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6){
      setAlerta({
        msg: 'El password tiene que tener como minimo 6 caracteres',
        error: true
      });
      return
    }

    try{
      const url = `/veterinarios/olvide-password/${token}`;
      const { data } = await clienteAxios.post(url, { password } );

      setAlerta({
        msg: data.msg
      });

      setPasswordModificado(true);

    }catch(error){
      setAlerta({
        msg: error.response.data.msg,
        error:true
      })
    }
  }

  return (
    <>
      <div>
          <h1 className='text-gray-600 font-black text-6xl'>
              Resetea t<span className='text-fuchsia-950'>u</span> p<span className='text-fuchsia-950'>a</span>ssword no pierdas tus
              pac<span className='text-fuchsia-950'>i</span>entes
          </h1>
      </div>

      <div>

        <Alerta alerta={alerta}/>
        { tokenValido && (
            <>
              <form onSubmit={handleSubmit}>
                <div className="my-5">
                  <label className='uppercase text-gray-600 block text-xl font-bold'>
                        Nuevo Password
                  </label>
                  <input 
                      type="password"
                      placeholder="Tu nuevo password"
                      className="border w-full p-3 bg-gray-50 rounded-xl"
                      value={password}
                      onChange={e => setPasswod(e.target.value)}
                  />
                </div>

                <input 
                  type="submit"
                  value="Generar Nuevo Password"
                  className="bg-fuchsia-950 w-full py-3 px-10 rounded-xl text-white uppercase
                  font-bold mt-5 mb-5 hover:cursor-pointer hover:bg-fuchsia-900 md:w-auto"
                />
              </form>
            </>
        )}
        {passwordModificado &&
          <Link to="/" className="text-blue-500 hover:underline w-full px-20"> Iniciar Sesion</Link>
        }
      </div>
        
    </>
  )
}

export default NuevoPassword