import React, { useState } from 'react';
import './styles/style.css';
import './styles/style2.css';
import Header from './components/Header';
import Footer from './components/Footer';

function Post() {
  return (
    <div className="Post">

      <Header />

      <div id="detailed-post">
        <h2>Giant Red Star</h2>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed auctor, magna id faucibus faucibus, tellus
          est malesuada ipsum, non congue justo quam euismod
          purus. Sed luctus, augue id pellentesque egestas,
          libero nibh euismod nibh, non pharetra ligula neque id mi.
        </span>
      </div>

      <div id="like-post">
        Impressed?
        <br />
        Consider giving this post a like.
        <span className="material-symbols-outlined">recommend</span>
      </div>

      <div id="submit-comment">
        <h2 className="all-posts">Comments</h2>
        <span>To submit a comment you must sign up</span>
        <button>Log in</button>
        <button>Register</button>
      </div>

      <div id="content">
        <div className="post">
          <h2>Someone says...</h2>
          <div className="content-snapshot">
            <p>Great content</p>
          </div>
          <div className="msg-count">
            <div className="msg-number">8</div>
            <span className="material-symbols-outlined">thumb_up</span>
          </div>
          <div className="post-details">
            <div className="date">January 23, 2023</div>
          </div>
        </div>

        <div className="post">
          <h2>Someone says...</h2>
          <div className="content-snapshot">
            <p>Great content</p>
          </div>
          <div className="msg-count">
            <div className="msg-number">8</div>
            <span className="material-symbols-outlined">thumb_up</span>
          </div>
          <div className="post-details">
            <div className="date">January 23, 2023</div>
          </div>
        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Post;
