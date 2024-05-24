
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact'

import ParticlesBackground from './Components/ParticlesBackground';
import Testimoial from './pages/Testimonial/Testimoial';

function App() {
  return (
    <div className="App">
      
      <Header />
      <ParticlesBackground />
      <Routes>
        <Route path='*' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/testimonial' element={<Testimoial />} />
        <Route path='/contact' element={<Contact />} /> 
      </Routes>
    </div>
  );
}

export default App;
