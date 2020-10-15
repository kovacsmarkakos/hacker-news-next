import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { Story } from '../components/Story';
import { topStoriesUrl } from '../services/api.js';
import styles from '../styles/pagestyles.module.scss';
import Pagination from '../components/Pagination';
import Nav from '../components/Nav';

export default function Top({ result }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [storiesPerPage, setStoriesPerPage] = useState(20);

  // Get current posts
  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;

  return (
    <>
      <Head>
        <title>Hacker News Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.storiesContainerWrapper}>
        <Nav />
        <Pagination
          storiesPerPage={storiesPerPage}
          totalStories={result.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        {result.slice(indexOfFirstStory, indexOfLastStory).map((id) => (
          <Story key={id} storyId={id} />
        ))}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const result = await axios.get(topStoriesUrl).then(({ data }) => data);

  return {
    props: { result },
  };
}
