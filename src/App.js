import React, { useState, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import './styles/style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import User from './components/User';

function App() {
  // State Decalarations
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Create API call functions
  const fetchUsers = async () => {
    try {
      const res = await fetch('https://blog-api-production-6aeb.up.railway.app/users', { method: 'GET' });
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error(err);
    }
  };

  // Call API call functions
  useEffect(() => {
    fetchUsers();
  }, []);

  // DOM Handler functions
  const loginRef = useRef(null);

  function handleLogin() {
    const loginPopup = loginRef.current;

    if (loginPopup.style.display === 'none') {
      loginPopup.style.display = '';
    } else {
      loginPopup.style.display = 'none';
    }
  }

  return (
    <div className="App">

      <Header
        handleLogin={handleLogin}
      />

      <form action="" method="post" id="log-in" ref={loginRef}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <input type="submit" value="Log In" />
      </form>

      <Outlet context={[
        formData, setFormData,
        users, setUsers,
      ]}
      />

      <Footer />

    </div>
  );
}

export default App;
