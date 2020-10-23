import Link from 'next/link';
import styles from './Nav.module.scss';

const Nav = ({ setCurrentPage }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.linkWrapper}>
        <Link href="/top">
          <a onClick={() => setCurrentPage(1)}>HNN</a>
        </Link>
        <Link href="/top">
          <a onClick={() => setCurrentPage(1)}>Top</a>
        </Link>
        <Link href="/new">
          <a onClick={() => setCurrentPage(1)}>New</a>
        </Link>
        <Link href="/show">
          <a onClick={() => setCurrentPage(1)}>Show</a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
