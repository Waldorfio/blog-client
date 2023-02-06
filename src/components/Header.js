import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  const { handleLogin } = props;

  return (
    <header>
      <Link to="/">
        <h1>
          <span className="wallys">Wally&apos;s</span>
          <br />
          <span className="blog">Blog</span>
        </h1>
      </Link>
      <button type="button" id="login-btn" onClick={handleLogin}>Log in</button>
      <Link to="register" id="register-btn"><button type="button">Register</button></Link>
    </header>
  );
}

export default Header;
