import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/navbar';
import FormContact from './pages/Contact';
import PageAboutMe from "./pages/AboutMe";
import ToDoLists from "./pages/ToDoList";

function App() {
  useEffect(() =>{
    alert("Welcome to the website!");
    return () => {
      alert("Goodbay! Thank for visiting our website")
    };
  })

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<PageAboutMe />} />
        <Route path='/contact' element={<FormContact />} />
        <Route path='/ToDoList' element={<ToDoLists />} />
      </Routes>
    </Router>
  );
}

export default App;
