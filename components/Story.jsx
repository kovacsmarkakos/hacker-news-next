import React, { useState, useEffect } from 'react';
import { getStory } from '../services/api';
import styles from './Story.module.scss';
import mapTime from '../mappers/mapTime';

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    let mounted = true;
    getStory(storyId).then((data) => {
      if (mounted) {
        data && data.url && setStory(data);
      }
    });
    return () => (mounted = false);
  }, [storyId]);

  return story && story.url ? (
    <section className={styles.storyWrapper}>
      <h1 className={styles.storyTitle}>
        <a href={story.url} target="_blank" rel="noopener noreferrer">
          {story.title}
        </a>
      </h1>
      <div className={styles.storyMeta}>
        <span>By: {story.by}</span>
        <span>Posted: {mapTime(story.time)}</span>
      </div>
    </section>
  ) : null;
};
