import './App.css';
import Balon from './components/Balon';
import Bayer from './components/Bayer';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Champions from './components/Champions';
import Leopardo from './components/Leopardo';
import Liver from './components/Liver';
import Navegation from './components/Navegation';
function App() {
  return (
    <Router>
      <Routes>
         <Route path='/balon' Component={Balon} />
         <Route path='/bayer' Component={Bayer} /> 
         <Route path='/champions' Component={Champions} />
         <Route path='/leopardo' Component={Leopardo}/>
         <Route path='/liver' Component={Liver}/>      
      </Routes>
      <Navegation />
    </Router>
  );
}

export default App;
