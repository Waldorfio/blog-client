import { Link } from 'react-router-dom';

function Header(props) {
  const { handleLogin } = props;

  return (
    <header>
      <Link to="/"><h1>Wally's Blog</h1></Link>
      <button id='login-btn' onClick={handleLogin}>Log in</button>
      <Link to="register"><button>Register</button></Link>
    </header>
  );
}

export default Header;
