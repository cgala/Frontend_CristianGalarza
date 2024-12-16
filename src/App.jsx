import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import Login from './paginas/Login';
import Registrar from './paginas/Registrar';
import OlvidePassword from './paginas/OlvidePassword';
import ConfirmarCuenta from './paginas/ConfirmarCuenta';


function App() {
  return(
    <BrowserRouter>
      <Routes>
          /*cuando se vicite este path, carga el componente AuthLayaut */
          <Route path = "/" element={<AuthLayout/>}>
            /* index señala al primer componente de la ruta*/
            <Route index element = {<Login/>}/>
            <Route path='registrar' element = {<Registrar/>}/>
            <Route path='olvide-password' element = {<OlvidePassword/>}/>
            <Route path='confirmar/:id' element = {<ConfirmarCuenta/>}/>

          </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
