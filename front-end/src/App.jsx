import './App.css'
import {Routes, Route} from 'react-router-dom';
import Navegacion from './components/Navegacion';
import CrearUsuario from './components/CrearUsuario'
import ListaUsuarios from './components/ListaUsuarios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {


  return (
    <div className=''>
      <Navegacion/>
      <div className='container p-4'>
        <Routes>
          <Route path='/' element={<ListaUsuarios/>}/>
          <Route path='/CrearUsuario' element={<CrearUsuario/>}/>
          <Route path='/edit/:id' element={<CrearUsuario/>}/>
        </Routes>
      </div>
    </div>
  )
}


export default App