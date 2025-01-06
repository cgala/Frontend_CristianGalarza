import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import axios from 'axios';
import clienteAxios from "../config/axios";
import Alerta from "../components/Alerta";
import { Link } from 'react-router-dom';

//creo el componente ConfirmarCuenta
const ConfirmarCuenta = () => {
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [alerta, setAlerta] = useState({});

  const params = useParams();
  const { id } = params;
  console.log('ID recibido:', id);

  useEffect(() => {
    console.log('useEffect ejecutado');
    const confirmarCuenta = async () => {
      try {
        const url = `/veterinarios/confirmar/${id}`;
        console.log('URL de la API:', url);
        const {data} = await clienteAxios(url);

        setCuentaConfirmada(true);
        setAlerta({
          msg: data.msg
        });
      } catch(error){
          setAlerta({
            msg: error.response.data.msg,
            error: true
          
        });
      }

      setCargando(false);

    }
    confirmarCuenta();
  }, []);
  

    return (
      <>
        <div>
            <h1 className='text-gray-600 font-black text-6xl'>
                Confirma tu c<span className='text-fuchsia-950'>u</span>enta y <span className='text-fuchsia-950'>a</span>dministra tus 
                pac<span className='text-fuchsia-950'>i</span>entes
            </h1>
        </div>

        <div>
          {!cargando && <Alerta alerta={alerta}/>}

          {cuentaConfirmada &&(
            <nav className="block my-5 text-gray-500">
              <Link to="/" className="bg-fuchsia-950  py-3 px-10 rounded-xl text-white uppercase
                    font-bold mt-5 hover:cursor-pointer hover:bg-fuchsia-900 hover:underline"> Inicia Sesion</Link>
            </nav>
        
          )}
          
        </div>
      </>
    )
  }
  
  export default ConfirmarCuenta