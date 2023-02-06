import React, { useState, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import './styles/style.css';
import './styles/media.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Success from './components/Success';

function App() {
  // --------- State Declarations ---------
  const [user, setUser] = useState({ // The logged in user
    username: '',
    password: '',
  });
  const [isLoggedIn, setLogIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [msgs, setMsgs] = useState([]);

  // --------- GET Users ---------
  const fetchUsers = async () => {
    try {
      const res = await fetch('https://blog-api-production-6aeb.up.railway.app/users', { method: 'GET' });
      const data = await res.json();
      setUsers(data);
    } catch (err) { console.error(err); }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  // --------- GET Msgs ---------
  const fetchMsgs = async () => {
    try {
      const res = await fetch('https://blog-api-production-6aeb.up.railway.app/msgs', { method: 'GET' });
      const data = await res.json();
      setMsgs(data);
    } catch (err) { console.error(err); }
  };
  useEffect(() => {
    fetchMsgs();
  }, []);

  // --------- GET Posts ---------
  const fetchPosts = async () => {
    try {
      const res = await fetch('https://blog-api-production-6aeb.up.railway.app/posts', { method: 'GET' });
      const data = await res.json();
      setPosts(data);
    } catch (err) { console.error(err); }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  // --------- LOGIN User ---------
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

  // --------- Login Popup Handlers ---------
  const loginRef = useRef(null);
  const backRef = useRef(null);

  function handleLogin() { // Handles the login popup styling/hiding
    const loginPopup = loginRef.current;
    const back = backRef.current;
    if (loginPopup.style.display === 'none') { // if loginpopup is not shown, show it
      loginPopup.style.display = '';
      back.style.display = '';
    } else { // otherwise if loginpopup is already visible, hide it
      loginPopup.style.display = 'none';
      back.style.display = 'none';
    }
  }

  // --------- Popup Handlers ---------
  const [showPopup, setShowPopup] = useState(true);
  const [popupMsg, setPopupMsg] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  }, [showPopup]);
  useEffect(() => {
    setShowPopup(true);
    setPopupMsg('Log In Successful!');
  }, [isLoggedIn]);
  useEffect(() => {
    setShowPopup(true);
    setPopupMsg('Registration Successful!');
    console.log('Registration successful');
  }, [users]);

  return (
    <div className="App">

      <Header
        handleLogin={handleLogin}
      />

      <div id="backdrop-shadow" ref={backRef} style={{ display: 'none' }} />

      <div id="login-container" ref={loginRef} style={{ display: 'none' }}>
        <div id="login">
          <h3>Login</h3>
          <div className="cross" onClick={handleLogin}>
            <span className="material-symbols-outlined">cancel</span>
          </div>
          <form className="user-form" onSubmit={loginSubmit} action="" method="post">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Create a username"
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
            />
            <input type="submit" value="Log In" />
          </form>
          <div className="signup">
            <span className="signup">
              Don&apos;t have an account?&nbsp;
              <label htmlFor="check">Signup</label>
            </span>
          </div>
        </div>
      </div>

      <Success
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        popupMsg={popupMsg}
      />

      <Outlet
        context={[
          posts,
          msgs,
          users, setUsers, // Passing all users, for registration put
          user, isLoggedIn, handleLogin, // Passing on current logged in user
        ]}
      />

      <Footer />

    </div>
  );
}

export default App;
