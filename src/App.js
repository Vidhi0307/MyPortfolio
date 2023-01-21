
import { Container } from "react-bootstrap";
import './App.scss'
import {  Routes, Route } from "react-router-dom";

import Footer from './components/Footer'
import Layout from "./components/Layout";
import Header from './components/Header'
import Navigation from './components/Navigation';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div className="App">
        
         <Header/>
          <Routes>
          <Route exact path="/" element={<Layout />} />
        
          </Routes>
          <Footer/>
         
    </div>
  );
}

export default App;
