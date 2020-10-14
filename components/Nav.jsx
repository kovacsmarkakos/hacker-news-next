import Link from 'next/link';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/top">
        <a>Top</a>
      </Link>
      <Link href="/new">
        <a>New</a>
      </Link>
      <Link href="/show">
        <a>Show</a>
      </Link>
      <Link href="/ask">
        <a>Ask</a>
      </Link>
    </nav>
  );
};

export default Nav;