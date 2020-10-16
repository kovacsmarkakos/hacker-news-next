import React, { useState, useEffect } from 'react';
// import { getStory } from '../services/api';
import styles from './Story.module.scss';
import mapTime from '../mappers/mapTime';
import useSWR from 'swr';
import axios from 'axios';
import { selectFields } from '../utilities/selectFields';
import { storyUrl } from '../services/api';

export const Story = ({ storyId }) => {
  /* const [story, setStory] = useState({}); */
  const fetcher = (url) =>
    axios.get(url).then(({ data }) => data && selectFields(data));

  const { data } = useSWR(`${storyUrl + storyId}.json`, fetcher);

  /* useEffect(() => {
    (data) => data && data.url && setStory(data);
  }, []); */

  return data && data.url ? (
    <section className={styles.storyWrapper}>
      <a href={data.url} target="_blank" rel="noopener noreferrer">
        <h1 className={styles.storyTitle}>{data.title}</h1>
      </a>
      <div className={styles.storyMeta}>
        <span>By: {data.by}</span>
        <span>Posted: {mapTime(data.time)}</span>
      </div>
    </section>
  ) : null;
};
