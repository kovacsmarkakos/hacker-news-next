import { useEffect, useState } from 'react';
import { Story } from '../components/Story';
import { getStory, getStoryIds } from '../services/api';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
    getStory(126809).then((data) => console.log(data));
  }, []);

  return storyIds.map((storyId) => <Story storyId={storyId} />);
};
