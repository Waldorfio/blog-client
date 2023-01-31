import React, { useState, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import './styles/style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import User from './components/User';

function App() {
  // State Decalarations
  const [user, setUser] = useState({ // The logged in user
    username: '',
    password: '',
  });
  const [isLoggedIn, setLogIn] = useState(false);
  const [users, setUsers] = useState([]); // Stores GET response of all users in db

  // State Handlers
  const loginSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setUser({
      username: formData.get('username'),
      password: formData.get('password'),
    });
    setLogIn(true); // set log in status to true
    console.log('user logged in');
    console.log(`username: ${user.username}`);
    console.log(`password: ${user.password}`);
  };

  // -- API CALL (GET) for all users
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

  function handleLogin() { // Handles the login popup styling/hiding
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

      <main class="login-main" ref={loginRef}>
          <div id="login">
              <h3>Login</h3>
              <form class='user-form' onSubmit={loginSubmit} action="" method="post">
                  <input type="text" id="username" name="username" value="" placeholder="Create a username">
                  <input type="password" id="password" name="password" value="" placeholder="Create a password">
                  <input type="submit" value="Log In">
              </form>
              <div class="signup">
                  <span class="signup">Don't have an account?
                  <label for="check">Signup</label>
                  </span>
              </div>
          </div>
      </main>

      <Outlet
        context={[
          users, setUsers, // Passing all users, for registration put
          user, isLoggedIn // Passing on current logged in user
        ]}
      />

      <Footer />

    </div>
  );
}

export default App;
