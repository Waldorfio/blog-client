/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import dateFormat from 'dateformat';

function Post() {
  const { id } = useParams(); // Extract post id from url

  // Outlet prop Decalarations
  const [posts, msgs, users, setUsers, user, isLoggedIn, handleLogin] = useOutletContext();
  // State Decalarations
  const [post, setPost] = useState([]);
  const [formData, setFormData] = useState({ // Form data for message form
    postid: id,
    username: user.username, // This user.username is updated via the useEffect hook below
    date: Date.now,
    text: '',
    likes: 0,
  });
  useEffect(() => { // hook needed to update the state everytime the context changes
    setFormData({
      username: user.username,
    });
  }, [user]); // referencing the context here

  // --------- GET Post/:id ---------
  const fetchPostData = async () => {
    try {
      const res = await fetch(`https://blog-api-production-6aeb.up.railway.app/posts/${id}`, { method: 'GET' });
      const data = await res.json();
      setPost(data);
    } catch (err) { console.error(err); }
  };
  useEffect(() => {
    fetchPostData();
  }, [id]);

  // --------- GET Msg/:id ---------
  const fetchMsgs = async () => {
    try {
      const res = await fetch(`https://blog-api-production-6aeb.up.railway.app/posts/${id}/msg`, { method: 'GET' });
      const data = await res.json();
      setMsgs(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchMsgs();
  }, [msgs]);

  // --------- CREATE Msg ---------
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
      setMsgs([...msgs, data]); // Append the new msg to the msg state
    } catch (err) { console.error(err); }
  };

  // Handle Likes
  function handleLikes(msg) {
    console.log(`old likes: ${msg.likes}`);
    console.log(`new likes: ${msg.likes + 1}`);
  }

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
        Consider posting a comment with your thoughts below!
      </div>

      { isLoggedIn ? (
        <div id="comment-form">
          <h2 className="all-posts">Comments</h2>
          <span>
            {user.username}, submit a comment below!
          </span>

          <form className="user-form" onSubmit={msgSubmit}>

            <textarea
              name="message"
              placeholder="Enter your message here..."
              maxLength="80"
              value={formData.text}
              onChange={(e) => setFormData({ ...formData, text: e.target.value })}
            />

            <input type="submit" value="Submit" />
          </form>
        </div>
      ) : (
        <div id="comment-noform">
          <h2 className="all-posts">Comments</h2>
          <span>To submit a comment you must log in</span>
          <button type="button" id="login-btn" onClick={handleLogin}>Log in</button>
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
              <div className="like-number">{msg.likes}</div>
              <span className="material-symbols-outlined" onClick={(msg) => handleLikes}>thumb_up</span>
            </div>
            <div className="post-details">
              <div className="date">{dateFormat(msg.date, "mmmm dS, yyyy")}</div>
            </div>
          </div>
        )) }

      </div>

    </div>
  );
}

export default Post;
