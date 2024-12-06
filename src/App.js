import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import { BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom'
import Login from './screens/Login';
import About from './screens/About';

function App() {
  return (
    <Router>
    <div className='fs-3'>
    <Routes> 
    <Route exact path='/' element={<Home/>}></Route>
    <Route exact path='/login' element={<Login/>} />
    <Route exact path='/about' element={<About/>} />
    
    </Routes>
      {/* <Home /> */}
    </div>
    </Router>
  );
}

export default App;
