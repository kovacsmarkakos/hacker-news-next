import React, { useState, useEffect } from 'react';
import { getStory } from '../services/api';
import styles from './Story.module.scss';
import mapTime from '../mappers/mapTime';
import { motion, AnimatePresence } from 'framer-motion';

export const Story = ({ storyId, direction }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    let mounted = true;
    getStory(storyId).then((data) => {
      if (mounted) {
        data && data.url && setStory(data);
      }
    });
    return () => (mounted = false);
  }, []);

  return story && story.url ? (
    <motion.div
      initial={{ opacity: 0, x: direction === 'forward' ? 10 : -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
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
    </motion.div>
  ) : null;
};
