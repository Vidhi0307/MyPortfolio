

import {  Routes, Route, BrowserRouter } from "react-router-dom";

import Contact from "./pages/Contact";
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume'
import  Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
    <Header/>
         
         <div className="home">
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />          
          <Route path="/resume" element={<Resume />} />
           </Routes>
          </div>
          </BrowserRouter> 
    </div>
  );
}

export default App;
