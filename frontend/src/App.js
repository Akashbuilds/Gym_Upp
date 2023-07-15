import './App.css';
import {BrowserRouter as Router,
Routes,
Route
} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About'
import Gym from './Pages/Gym';
function App() {
  return (
   <>
      <Router>
        <Navbar/>
        <Routes>
            <Route  exact path='/' Component={Home}/>
            <Route  path='/#about' Component={About}/>
            <Route  path='/#gym' Component={Gym}/>
        </Routes>
      </Router>
   </>
  );
}

export default App;
