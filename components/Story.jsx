import React, { useState, useEffect, memo } from 'react';
import { getStory } from '../services/api';
import styles from './Story.module.scss';
import mapTime from '../mappers/mapTime';

export const Story = memo(function Story({ storyId }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <section className={styles.storyWrapper}>
      <a href={story.url} target="_blank" rel="noopener noreferrer">
        <h1 className={styles.storyTitle}>{story.title}</h1>
      </a>
      <div className={styles.storyMeta}>
        <span>By: {story.by}</span>
        <span>Posted: {mapTime(story.time)}</span>
      </div>
    </section>
  ) : null;
});
