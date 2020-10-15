import Link from 'next/link';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/top">
          <a>HNN</a>
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
      </nav>
    </header>
  );
};

export default Nav;
