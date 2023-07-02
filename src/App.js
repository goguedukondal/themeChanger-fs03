
import './App.css';
import Home from './Components/Home';
import Service from './Components/Service';
import Contact from './Components/Contact';
import {Route,Routes} from 'react-router-dom'
import Nav from './Components/Nav';
import { useSelector } from "react-redux";

function App() {
  const store = useSelector((state)=>state)
  console.log(store)
  return (
    <div className="App">
      <p>I have changed theme to {store.theme.mode} </p>
     <div className={store.theme.mode}>
     <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>
      </Routes>
     </div>
     
    </div>
  );
}

export default App;
