import Head from 'next/head';
import axios from 'axios';
import styles from '../../styles/itemStyles.module.scss';
import Nav from '../../components/Nav';
import { storyUrl } from '../../utilities/apiHelper';
import Comments from '../../components/Comments';
import mapTime from '../../mappers/mapTime';

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
      <header className={styles.itemHeader}>
        <Nav />
      </header>
      <div className={styles.container}>
        <div className={styles.commentsHeader}>
          <a href={itemData.url} target="_blank">
            <h1>{itemData.title}</h1>
          </a>
          <p className={styles.meta}>
            {itemData.score} points | by {itemData.by} {mapTime(itemData.time)}{' '}
            ago
          </p>
        </div>
      </div>
      <ul className={styles.commentChildren}>
        {itemData.kids.map((id) => (
          <>
            <Comments key={id} commentId={id} />;
          </>
        ))}
      </ul>
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
