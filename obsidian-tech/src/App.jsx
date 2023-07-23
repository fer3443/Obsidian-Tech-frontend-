import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import InicioPage from './page/Iniciopage';
import AdministracionPage from './page/AdministracionPage';
import RecContraseñaPage from './page/RecContraseñaPage';
import NosotrosPage from './page/NosotrosPage';
import Error404Page from './page/Error404Page';
import { ObsidianNavbar } from './components/navegacion/ObsidianNavbar';
import DetalleProductoPage from './page/DetalleProductoPage';



function App() {
  return (
    <BrowserRouter>
    <ObsidianNavbar/>
      <Routes>
        <Route path='/' element={<InicioPage />} />
        <Route path='/accesorio/:id' element={<DetalleProductoPage/>}/>
        <Route path='administracion' element={<AdministracionPage />} />
        <Route path='recContraseña' element={<RecContraseñaPage />} />
        <Route path='nosotros' element={<NosotrosPage />} />
        <Route path='*' element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
