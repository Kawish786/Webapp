import logo from './logo.svg';
import './App.css';
import Nav from './Component/Nav';
import Home from './Page/Home';
import Footer from './Component/Footer';
import Service from './Page/Service';
import Contact from './Page/Contact';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Alert from './Component/Alert';
import { useState } from 'react';

function App() {
  const [alert, setAlert]= useState(null)
    const showAlert= (message,type)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(()=>{setAlert(null)},3000)
      }
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <Alert alert={alert}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact showAlert={showAlert}/>}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
