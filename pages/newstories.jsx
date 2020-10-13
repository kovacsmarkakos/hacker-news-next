import React, { useState } from 'react';
import axios from 'axios';
import { Story } from '../components/Story';
import { newStoriesUrl } from '../services/api.js';
import Link from 'next/link';
import styles from '../styles/newstories.module.scss';
import Pagination from '../components/Pagination';

export default function NewStories({ result }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [storiesPerPage, setStoriesPerPage] = useState(20);

  // Get current posts
  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main className={styles.storiesContainerWrapper}>
      <nav className={styles.nav}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
      <Pagination
        storiesPerPage={storiesPerPage}
        totalStories={result.length}
        paginate={paginate}
      />
      {result.slice(indexOfFirstStory, indexOfLastStory).map((id) => (
        <Story key={id} storyId={id} />
      ))}
    </main>
  );
}

export async function getStaticProps() {
  const result = await axios.get(newStoriesUrl).then(({ data }) => data);

  return {
    props: { result },
  };
}
