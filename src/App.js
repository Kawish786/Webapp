import logo from './logo.svg';
import './App.css';
import Nav from './Component/Nav';
import Home from './Page/Home';
import Footer from './Component/Footer';
import Service from './Page/Service';
import Contact from './Page/Contact';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
