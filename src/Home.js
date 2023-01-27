import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';

function Home() {
  return (
    <div id="home">
      <div id="welcome">
        Welcome to my blog
        Here is a list of all the users:

        {/* <div id="users">
          { users.map((user) => (
            <User
              username={user.username}
              password={user.password}
            />
          )) }
        </div> */}

        {/* <div id="test-form">
          <form onSubmit={addUser}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />

            <input type="submit" value="Register" />
          </form>
        </div> */}

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
    </div>
  );
}

export default Home;
