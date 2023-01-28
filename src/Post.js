import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Post() {
  // State Decalarations
  const [post, setPost] = useState([]);

  const { id } = useParams();

  // Create API call functions
  const fetchPostData = async () => {
    try {
      const res = await fetch(`https://blog-api-production-6aeb.up.railway.app/posts/${id}`, { method: 'GET' });
      const data = await res.json();
      setPost(data);
    } catch (err) {
      console.error(err);
    }
  };

  // Call API call functions
  useEffect(() => {
    fetchPostData();
  }, [id]);

  return (
    <div className="Post">

      <div id="detailed-post">
        <h2>{post.title}</h2>
        <span>{post.content}</span>
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

    </div>
  );
}

export default Post;
