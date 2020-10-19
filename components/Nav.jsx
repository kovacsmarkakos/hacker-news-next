import Link from 'next/link';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.linkWrapper}>
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
      </div>
    </nav>
  );
};

export default Nav;
