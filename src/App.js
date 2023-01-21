
import { Container } from "react-bootstrap";
import './App.scss'
import {  Routes, Route } from "react-router-dom";

import Footer from './components/Footer'
import Layout from "./components/Layout";
import Contact from "./components/Contact";

import Navigation from './components/Navigation';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div className="App">
        
  
          <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/contact" element={<Contact />} />
         </Route>
          </Routes>
          <Footer/>
         
    </div>
  );
}

export default App;
