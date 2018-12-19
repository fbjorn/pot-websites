import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
    <NavStyles>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/docs">
        <a>Docs</a>
      </Link>
      <Link href="/blogs">
        <a>Blogs</a>
      </Link>
      <Link href="/community">
        <a>Community</a>
      </Link>
      <Link href="/login">
        <a>Login</a>
      </Link>
      
    </NavStyles>
  );

export default Nav;