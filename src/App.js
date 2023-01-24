import React, { useState } from 'react';
import './styles/style.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Header />

      <div id="welcome">
        Welcome to my blog
      </div>

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
            <a href="/">Read more</a>
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
            <a href="/">Read more</a>
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
            <a href="/">Read more</a>
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
