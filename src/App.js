import React, { useState } from 'react'
import './styles/style.css';
import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
    
      < Header />

      <div id="welcome">
          Welcome to my blog
      </div>

      <h2 class="all-posts">All Posts</h2>
    
      <div id="content">

        <div class="post">
            <h2>My first blog post</h2>
            <div class="content-snapshot">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna id faucibus faucibus, tellus est malesuada ipsum, non congue justo quam euismod purus. Sed luctus, augue id pellentesque egestas, libero nibh euismod nibh, non pharetra ligula neque id mi. </p>
                <a href="/">Read more</a>
            </div>
            <div class="msg-count">
                <div class="msg-number">8</div>
                <span class="material-symbols-outlined">forum</span>
            </div>
            <div class="post-details">
                <span class="author">waldorf</span>
                <div class="date">January 23, 2023</div>
            </div>
        </div>

        <div class="post">
            <h2>My first blog post</h2>
            <div class="content-snapshot">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna id faucibus faucibus, tellus est malesuada ipsum, non congue justo quam euismod purus. Sed luctus, augue id pellentesque egestas, libero nibh euismod nibh, non pharetra ligula neque id mi. </p>
                <a href="/">Read more</a>
            </div>
            <div class="msg-count">
                <div class="msg-number">8</div>
                <span class="material-symbols-outlined">forum</span>
            </div>
            <div class="post-details">
                <span class="author">waldorf</span>
                <div class="date">January 23, 2023</div>
            </div>
        </div>
    
        <div class="post">
            <h2>My first blog post</h2>
            <div class="content-snapshot">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna id faucibus faucibus, tellus est malesuada ipsum, non congue justo quam euismod purus. Sed luctus, augue id pellentesque egestas, libero nibh euismod nibh, non pharetra ligula neque id mi. </p>
                <a href="/">Read more</a>
            </div>
            <div class="msg-count">
                <div class="msg-number">8</div>
                <span class="material-symbols-outlined">forum</span>
            </div>
            <div class="post-details">
                <span class="author">waldorf</span>
                <div class="date">January 23, 2023</div>
            </div>
        </div>

      </div>

      < Footer />

    </div>
  );
}

export default App;
