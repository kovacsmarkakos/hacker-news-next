import axios from 'axios';
import { Story } from '../components/Story';
import { newStoriesUrl } from '../services/api.js';
import Link from 'next/link';

export default function NewStories({ result }) {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      {result.map((id) => (
        <Story key={id} storyId={id} />
      ))}
    </>
  );
}

export async function getStaticProps() {
  const result = await axios.get(newStoriesUrl).then(({ data }) => data);

  return {
    props: { result },
  };
}
