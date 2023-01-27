import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  // State Decalarations
  const [posts, setPosts] = useState([]);

  // Create API call functions
  const fetchPosts = async () => {
    try {
      const res = await fetch('https://blog-api-production-6aeb.up.railway.app/posts', { method: 'GET' });
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.error(err);
    }
  };

  // Call API call functions
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div id="home">
      <div id="welcome">
        You are not logged in. Log in to enjoy benefits.
      </div>

      <h2 className="all-posts">All Posts</h2>

      <div id="content">

        { posts.map((post) => (
          <div className="post">
            <h2>{post.title}</h2>
            <div className="content-snapshot">
              <p>
                {post.content}
              </p>
              <Link to="posts/{post.id}">Read more</Link>
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
        )) }

      </div>
    </div>
  );
}

export default Home;
