import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import Temprature from './components/Temprature';
// import React from "react";
// import {
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#191970';
      toggleAlert("Darkmode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      toggleAlert("Lightmode has been enabled", "success");
    }
  }

  return (
    <>
      <Navbar title="ConversionZ" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-5"><TextForm heading="Temprature Converter" mode={mode} /></div>

      {/* <Routes>
        <Route path="/" element={<div className="container my-5"><TextForm heading="Temprature Converter" mode={mode} /></div>} />
        <Route path="/about" element={<About />} />
      </Routes> */}
    </>
  );
}

export default App;
