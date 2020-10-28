import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import styles from '../../styles/headerstyles.module.scss';
import Nav from '../../components/Nav';
import { storyUrl } from '../../utilities/apiHelper';
import { Comments } from '../../components/Comments';

const getItem = async (id) => {
  try {
    const result = await axios
      .get(`${storyUrl + id}.json`)
      .then(({ data }) => data);
    return result;
  } catch (error) {
    console.error(error);
  }
};

export default function Item({ itemData }) {
  return (
    <>
      <Head>
        <title>Hacker News Next | {itemData.title}</title>
      </Head>
      <header className={styles.commentsHeader}>
        <Nav />
      </header>
      <Comments itemData={itemData} />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const itemData = await getItem(params.id);
  return {
    props: {
      itemData,
    },
  };
}
