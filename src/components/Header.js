import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/"><h1>Wally's Blog</h1></Link>
      <button>Log in</button>
      <button>Register</button>
    </header>
  );
}

export default Header;
