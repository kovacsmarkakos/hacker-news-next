import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { Story } from '../components/Story';
import { showStoriesUrl } from '../services/api.js';
import styles from '../styles/headerstyles.module.scss';
import Pagination from '../components/Pagination';
import Nav from '../components/Nav';

export default function Show({ result }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [storiesPerPage, setStoriesPerPage] = useState(20);

  // Get current posts
  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;

  return (
    <>
      <Head>
        <title>Hacker News Next | Show</title>
      </Head>
      <header className={styles.header}>
        <Nav />
        <Pagination
          storiesPerPage={storiesPerPage}
          totalStories={result.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </header>
      {result.slice(indexOfFirstStory, indexOfLastStory).map((id) => (
        <Story key={id} storyId={id} />
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const result = await axios.get(showStoriesUrl).then(({ data }) => data);

  return {
    props: {
      result,
    },
  };
}
