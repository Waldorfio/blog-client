import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './styles/style.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  // State Decalarations

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

      <Header />

      <div id="welcome">
        Welcome to my blog
      </div>

      <button onClick={handleLogin}>Log in</button>

      <form action="" method="post" id="log-in" ref={loginRef}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <input type="submit" value="Log In" />
      </form>

      <h2 className="all-posts">All Posts</h2>

      <div id="content">

        <div className="post">
          <h2>My first blog post</h2>
          <div className="content-snapshot">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed auctor, magna id faucibus faucibus, tellus est malesuada
              ipsum, non congue justo quam euismod purus. Sed luctus,
              augue id pellentesque egestas, libero nibh euismod nibh,
              non pharetra ligula neque id mi.
            </p>
            <Link to="Post">Read more</Link>
          </div>
          <div className="msg-count">
            <div className="msg-number">8</div>
            <span className="material-symbols-outlined">forum</span>
          </div>
          <div className="post-details">
            <span className="author">waldorf</span>
            <div className="date">January 23, 2023</div>
          </div>
        </div>

        <div className="post">
          <h2>My first blog post</h2>
          <div className="content-snapshot">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed auctor, magna id faucibus faucibus, tellus est malesuada
              ipsum, non congue justo quam euismod purus. Sed luctus,
              augue id pellentesque egestas, libero nibh euismod nibh,
              non pharetra ligula neque id mi.
            </p>
            <Link to="Post">Read more</Link>
          </div>
          <div className="msg-count">
            <div className="msg-number">8</div>
            <span className="material-symbols-outlined">forum</span>
          </div>
          <div className="post-details">
            <span className="author">waldorf</span>
            <div className="date">January 23, 2023</div>
          </div>
        </div>

        <div className="post">
          <h2>My first blog post</h2>
          <div className="content-snapshot">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed auctor, magna id faucibus faucibus, tellus est malesuada
              ipsum, non congue justo quam euismod purus. Sed luctus,
              augue id pellentesque egestas, libero nibh euismod nibh,
              non pharetra ligula neque id mi.
            </p>
            <Link to="Post">Read more</Link>
          </div>
          <div className="msg-count">
            <div className="msg-number">8</div>
            <span className="material-symbols-outlined">forum</span>
          </div>
          <div className="post-details">
            <span className="author">waldorf</span>
            <div className="date">January 23, 2023</div>
          </div>
        </div>

      </div>

      <Footer />

    </div>
  );
}

export default App;
