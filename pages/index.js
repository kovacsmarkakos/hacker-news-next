import Head from 'next/head';
import { StoriesContainer } from './StoriesContainer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hacker News Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StoriesContainer />

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Hacker News Next!</h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
