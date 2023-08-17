import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ExperimentCreation from './components/experimentdet';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
     <Route path='/' element={<ExperimentCreation/>}/>
  </Routes>
  </BrowserRouter>
  </>
    );
}

export default App;
