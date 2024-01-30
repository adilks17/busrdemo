import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/Layouts/Main';
import Home from './components/Layouts/Home';  // Assuming Home component is in the correct path
import Heveview from './components/Layouts/heve/Heveview';  // Assuming Heveview component is in the correct path
import './App.css';
import Login from './components/Layouts/Login/Login';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(() => {
    const storedValue = localStorage.getItem('isLoggedIn');
    return storedValue ? JSON.parse(storedValue) : false;
  });

  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const toggleLogin = () => {
    setLoggedIn(!isLoggedIn);
  };

  const handleLogout = () => {
    // Additional logout logic if needed
    toggleLogin(); // Call the function to update the isLoggedIn state
  };
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/raises" element={<Heveview />} />
        </Routes>
      </Router> */}
      <Router>
      {isLoggedIn ? <Main isLoggedIn={isLoggedIn} onLogout={handleLogout} /> : null}
      <Routes>
        <Route path="/login" element={<Login onLoginSuccess={toggleLogin} />} />
        {isLoggedIn ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/raises" element={<Heveview />} />
          </>
        ) : (
          // Redirect to login when not logged in
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
