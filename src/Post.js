/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

function Post() {
  const { id } = useParams(); // Extract post id from url

  // Outlet prop Decalarations
  const [users, setUsers, user, isLoggedIn] = useOutletContext();
  // State Decalarations
  const [post, setPost] = useState([]);
  const [msgs, setMsgs] = useState([]);
  const [formData, setFormData] = useState({ // Form data for message form
    postid: id,
    username: user.username, // This user.username is updated via the useEffect hook below
    date: Date.now,
    text: '',
  });

  useEffect(() => { // hook needed to update the state everytime the context changes
    setFormData({
      username: user.username,
    });
  }, [user]); // referencing the context here

  // State Handlers

  // -- API CALL (GET) for all messages
  // Create API call functions
  const fetchMsgs = async () => {
    try {
      const res = await fetch(`https://blog-api-production-6aeb.up.railway.app/posts/${id}/msg`, { method: 'GET' });
      const data = await res.json();
      setMsgs(data);
    } catch (err) {
      console.error(err);
    }
  };
  // Call API call functions
  useEffect(() => {
    fetchMsgs();
  }, [msgs]);

  const msgSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send post request
      const res = await fetch(`https://blog-api-production-6aeb.up.railway.app/posts/${id}/msg/create`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(formData),
      });
      // Check data
      const data = await res.json();
      if (data.success) {
        console.log('message posted');
        setMsgs([...msgs, data]); // Append the new msg to the msg state
      } else {
        console.log('data was not a success');
      }
    } catch (err) {
      console.error(err);
    }
  };

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

  // Filter messages based on current post id
  const filterMsgs = msgs.filter((msg) => msg.postid === id);

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

      { isLoggedIn ? (
        <div id="comment-form">
          <h2 className="all-posts">Comments</h2>
          <span>
            {user.username}, submit a comment below!
          </span>

          <form onSubmit={msgSubmit}>

            <label htmlFor="text">Message:</label>
            <textarea
              name="message"
              value={formData.text}
              onChange={(e) => setFormData({ ...formData, text: e.target.value })}
            />

            <input type="submit" value="Submit" />
          </form>
        </div>
      ) : (
        <div id="comment-noform">
          <h2 className="all-posts">Comments</h2>
          <span>To submit a comment you must log in, or sign up</span>
        </div>
      )}

      <div id="content">

        { filterMsgs.map((msg) => (
          <div className="msg">
            <h2>{msg.username}</h2>
            <div className="msg-snapshot">
              <p>{msg.text}</p>
            </div>
            <div className="like-count">
              <div className="like-number">8</div>
              <span className="material-symbols-outlined">thumb_up</span>
            </div>
            <div className="post-details">
              <div className="date">{msg.date}</div>
            </div>
          </div>
        )) }

      </div>

    </div>
  );
}

export default Post;
