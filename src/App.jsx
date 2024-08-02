import {Route, Routes, Link, BrowserRouter as Router} from 'react-router-dom';
import Pizza from './components/pizza';
import Drinks from './components/drinks';
import Sides from './components/sides';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
            <Link to ="/pizza" >Pizza</Link>
            </li>
            <li>
            <Link to ="/drinks" >Drinks</Link>
            </li>
            <li>
            <Link to ="/sides" >Sides</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path = "/pizza" element = {<Pizza />}/>
          <Route path = "/drinks" element = {<Drinks />}/>
          <Route path = "/sides" element = {<Sides />}/>
        </Routes>
      </div>
    </Router>
  )
};

export default App;