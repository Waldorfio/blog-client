import React, { useState } from 'react'
import './styles/style.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Wally's Blog</h1>
      </header>

      <div id="content">

        <div class="post">
          <div class="date">January 23, 2023</div>
          <h2>My first blog post</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna id faucibus faucibus, tellus est malesuada ipsum, non congue justo quam euismod purus. Sed luctus, augue id pellentesque egestas, libero nibh euismod nibh, non pharetra ligula neque id mi. </p>
        </div>

        <div class="post">
          <div class="date">January 22, 2023</div>
          <h2>My second blog post</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna id faucibus faucibus, tellus est malesuada ipsum, non congue justo quam euismod purus. Sed luctus, augue id pellentesque egestas, libero nibh euismod nibh, non pharetra ligula neque id mi. </p>
        </div>

      </div>

      < Footer />

    </div>
  );
}

export default App;
