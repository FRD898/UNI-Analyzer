import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Encuesta from "./Components/Encuesta/Encuesta";
import { Route, Routes } from 'react-router-dom';
import PredecirAlumno from './Components/PredecirAlumno/PredecirAlumno';
import AnalizarMenu from './Components/Analizar/AnalizarMenu';
import AnalizarBarras from './Components/Analizar/AnalizarBarras';
import AnalizarCircular from './Components/Analizar/AnalizarCircular';
import HomeLayout from './Components/Home/HomeLayout';

function App() {
  return (
    <Routes>
      <Route element={<HomeLayout/>}>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/predecir" element={<PredecirAlumno/>}></Route>
        <Route path="/encuesta" element={<Encuesta/>}></Route>
        <Route path="/analizar" element={<AnalizarMenu/>}></Route>
        <Route path='/barras' element={<AnalizarBarras/>}> </Route>
        <Route path='/circular' element={<AnalizarCircular/>}> </Route>
        <Route path='*' element={<Home/>}></Route>
      </Route>

      <Route path="/login" element={<Login/>}></Route>
      
    </Routes>
    //<Login></Login>
  );
}

export default App;
