import logo from './logo.svg';
import './App.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //imrr
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';


import { library } from '@fortawesome/fontawesome-svg-core';

import {faBomb, faHome, faPeopleGroup} from '@fortawesome/free-solid-svg-icons';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import DealerProfile from './components/DealerProfile';
library.add(faBomb,faCoffee,faCameraRetro,faHome,faPeopleGroup);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>ProductHive</h1>
      </header>
      
      <section>
      <div style={{ backgroundImage: "url(/images/back.jpg)",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize:'cover', minHeight:'140vh',minWidth:'95vw'}}>
      <Router>
        <NavBar/>
          <Routes>

           <Route path='/' element={<Home/>}></Route>

           <Route path='/about' element={<About/>}></Route>

            <Route path='/products' element={<Products/>}></Route>

            <Route path='/dealers' element={<DealerProfile/>}></Route>




          </Routes>
        
        </Router> 
      </div>
      </section>
      <footer className='footer'>
        <p>&copy;All rights to reserved to producthive.com</p>

      </footer>
    </div>
  );
}

export default App;
