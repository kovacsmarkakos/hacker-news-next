import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Story.module.scss';
import mapTime from '../mappers/mapTime';
import { motion } from 'framer-motion';
import axios from 'axios';
import { storyUrl } from '../utilities/apiHelper';
import { selectFields } from '../utilities/selectFields';
import NProgress from 'nprogress';

export const Story = ({ storyId, direction }) => {
  const [story, setStory] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  let activeRequests = 0;
  NProgress.configure({ showSpinner: false });

  function load() {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    NProgress.set(0.3);
  }

  function stop() {
    if (activeRequests > 0) {
      return;
    }

    setIsLoading(false);
    NProgress.done();
  }

  const getStory = async (storyId) => {
    if (activeRequests === 0) {
      load();
    }

    activeRequests++;

    try {
      const result = await axios
        .get(`${storyUrl + storyId}.json`)
        .then(({ data }) => data && selectFields(data));

      return result;
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    } finally {
      activeRequests -= 1;
      if (activeRequests === 0) {
        stop();
      }
    }
  };

  useEffect(() => {
    getStory(storyId).then((data) => {
      data && data.url && setStory(data);
    });
  }, []);

  return story && story.url ? (
    <motion.div
      className={styles.storyWrapper}
      initial={{ opacity: 0, x: direction === 'forward' ? 10 : -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, delay: 0.2 }}
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
          <span>by: {story.by}</span>
          <span>{mapTime(story.time)} ago</span>
          <span>
            <Link href={`/item/${story.id}`}>
              <a>
                <span className={styles.comments}>
                  {story.descendants ? story.descendants : 0} comments
                </span>
              </a>
            </Link>
          </span>
        </div>
      </div>
    </motion.div>
  ) : null;
};
