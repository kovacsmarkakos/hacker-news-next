import React, { useState, useEffect } from 'react';
import { getStory } from '../services/api';
import styles from './Story.module.scss';
import mapTime from '../mappers/mapTime';
import { motion } from 'framer-motion';

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

  const variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  const variants2 = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return story && story.url ? (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5 }}
      className={styles.storyWrapper}
    >
      <div className={styles.scores}>
        <span>{story.score}</span>
      </div>
      <div className={styles.texts}>
        <h1 className={styles.storyTitle}>
          <a href={story.url} target="_blank" rel="noopener noreferrer">
            {story.title}
          </a>
        </h1>
        <div className={styles.storyMeta}>
          <span>By: {story.by}</span>
          <span>Posted: {mapTime(story.time)}</span>
        </div>
      </div>
    </motion.section>
  ) : null;
};
