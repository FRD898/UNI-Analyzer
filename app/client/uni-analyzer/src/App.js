import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Prediction from './Components/Prediction/Prediction';
import HomeLayout from './Components/Home/HomeLayout';
import AnalysisClustering from './Components/Analize/AnalysisClustering';
import AnalysisBar from "./Components/Analize/AnalysisBar";
import AnalysisPie from "./Components/Analize/AnalysisPie";
import AnalysisMenu from "./Components/Analize/AnalysisMenu";
import Form from "./Components/Form/Form";
function App() {
  return (
    <Routes>
      <Route element={<HomeLayout/>}>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/prediction" element={<Prediction/>}></Route>
        <Route path="/form" element={<Form/>}></Route>
        <Route path="/analysis" element={<AnalysisMenu/>}></Route>
        <Route path='/bar' element={<AnalysisBar/>}> </Route>
        <Route path='/pie' element={<AnalysisPie/>}> </Route>
        <Route path='/clustering' element={<AnalysisClustering/>}> </Route>
        <Route path='*' element={<Home/>}></Route>
      </Route>
      <Route path="/login" element={<Login/>}></Route>
      
    </Routes>
    //<Login></Login>
  );
}

export default App;
