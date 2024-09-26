import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Pages/Navigation/Navigation';
import Home from './Pages/Home/Home';
import LocomotiveScroll from 'locomotive-scroll';
import Gallery from './Pages/Gellery/Gallery';
import Vooo from './Pages/Navigation/Vooo';


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="bg-zinc-900">
    <Vooo/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='gallery' element={<Gallery/>}/>

     </Routes>
    </div>
  );
}

export default App;
