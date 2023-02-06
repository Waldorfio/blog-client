/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useOutletContext, Link } from 'react-router-dom';

function Home() {
  const [posts, msgs, users, setUsers, user, isLoggedIn, handleLogin] = useOutletContext();

  return (
    <main id="home">
      { isLoggedIn ? (
        <div id="welcome">
          <span>
            Welcome to my blog,
            {' '}
            {user.username}
            !
          </span>
          <span>
            This is a sample blog website I have created to serve my&nbsp;
            API backend, which is responsible for user authenticaiton/&nbsp;
            authorisation, as well as managing all blog posts, messages&nbsp;
            and users behind the scenes.
          </span>
          <span>
            Please log-in so that you can comment and like other comments!
          </span>
        </div>
      ) : (
        <div id="welcome">
          <span>
            Welcome to my blog, Guest!
          </span>
          <span>
            This is a sample blog website I have created to serve my&nbsp;
            API backend, which is responsible for user authenticaiton/&nbsp;
            authorisation, as well as managing all blog posts, messages&nbsp;
            and users behind the scenes.
          </span>
          <span>
            Please log-in so that you can comment and like other comments!
          </span>
        </div>
      )}

      <h2 className="all-posts">All Posts</h2>

      <div id="content">

        { posts.map((post) => (
          <div className="post">
            <h2>{post.title}</h2>
            <div className="content-snapshot">
              <p>
                {post.content}
              </p>
              <Link to={`/posts/${post._id}`}>Read more</Link>
            </div>
            <div className="msg-count">
              <div className="msg-number">{msgs.filter((msg) => msg.postid === post._id).length}</div>
              <span className="material-symbols-outlined">forum</span>
            </div>
            <div className="post-details">
              <span className="author">waldorf</span>
              <div className="date">January 23, 2023</div>
            </div>
          </div>
        )) }

      </div>
    </main>
  );
}

export default Home;
