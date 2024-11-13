import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import { BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom'
import Login from './screens/Login';

function App() {
  return (
    <Router>
    <div className='fs-3'>
    <Routes> 
    <Route exact path='/' element={<Home/>}></Route>
    <Route exact path='/login' element={<Login/>} />
    </Routes>
      {/* <Home /> */}
    </div>
    </Router>
  );
}

export default App;
