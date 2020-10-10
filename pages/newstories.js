import axios from 'axios';
import { Story } from '../components/Story';
import { newStoriesUrl } from '../services/api.js';

export default function NewStories({ result }) {
  return result.map((id) => <Story key={id} storyId={id} />);
}

export async function getStaticProps() {
  const result = await axios.get(newStoriesUrl).then(({ data }) => data);

  return {
    props: { result },
  };
}
