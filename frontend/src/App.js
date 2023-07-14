import './App.css';
import {BrowserRouter as Router,
Routes,
Route
} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
function App() {
  return (
   <>
      <Router>
        <Navbar/>
        <Routes>
            <Route exact path='/' Component={Home}/>
        </Routes>
      </Router>
   </>
  );
}

export default App;
