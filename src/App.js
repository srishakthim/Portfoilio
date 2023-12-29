// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Nav from './component/Main';
import Home from './component/Home';
import About from './component/About';
import Work from './component/Work';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav />
    <Routes>
      {/* <Route path='/' element={<Nav/>}/> */}
      <Route index element={<Home />}/> 
      <Route path='/about' element={<About />}/> 
      <Route path='/work' element={<Work />}/> 
      <Route path='/contact' element={<Contact />}/> 
    </Routes>
    </BrowserRouter>
      </div>
  );
}

export default App;