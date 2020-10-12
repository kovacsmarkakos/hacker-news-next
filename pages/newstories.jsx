import axios from 'axios';
import { Story } from '../components/Story';
import { newStoriesUrl } from '../services/api.js';
import Link from 'next/link';
import styles from '../styles/newstories.module.scss';

export default function NewStories({ result }) {
  return (
    <main className={styles.storiesContainerWrapper}>
      <nav className={styles.nav}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
      {result.map((id) => (
        <Story key={id} storyId={id} />
      ))}
    </main>
  );
}

export async function getStaticProps() {
  const result = await axios.get(newStoriesUrl).then(({ data }) => data);

  return {
    props: { result },
  };
}
