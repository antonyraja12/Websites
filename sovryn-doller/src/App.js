import logo from './logo.svg';
import './App.css';
import { Routes,BrowserRouter,Route } from 'react-router-dom';
import { Navbar } from './Compoents/LandingPage/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Homepage } from './Compoents/LandingPage/Homepage';
import { Intropage } from './Compoents/LandingPage/intropage';
import { Stablepage } from './Compoents/LandingPage/satblepage';
import { Updatepage } from './Compoents/LandingPage/updatepage';
import { Questionpage } from './Compoents/LandingPage/Ouestionpage';
import { Journey } from './Compoents/LandingPage/convicepage';
import { Advertise } from './Compoents/LandingPage/justinfo';
import { Footerpage } from './Compoents/LandingPage/footerpage';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/'element={[<Navbar/>,<Homepage/>,<Intropage/>,<Stablepage/>,<Updatepage/>,<Questionpage/>,<Journey/>,<Advertise/>,<Footerpage/>]} />
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
