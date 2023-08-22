import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/login';
import { Dashboard } from './components/Dashboard';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginForm/>}/>
      <Route path='/DashBoard' element={<Dashboard/>}/>

    </Routes>
    </BrowserRouter>
    </>
    );
}

export default App;
