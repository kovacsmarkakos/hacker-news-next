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
    <div className={styles.itemContainer}>
      <Head>
        <title>Hacker News Next | {itemData.title}</title>
      </Head>
      <header className={styles.itemHeader}>
        <Nav />
      </header>
      <div className={styles.viewHeader}>
        <a href={itemData.url} target="_blank">
          <h1>{itemData.title}</h1>
        </a>
        <p>
          {itemData.score} points | by {itemData.by} {mapTime(itemData.time)}{' '}
          ago
        </p>
      </div>
      <div className={styles.comments}>
        <p className={styles.commentsHeader}>
          {itemData.kids
            ? itemData.descendants + ' comments'
            : 'No comments yet.'}
        </p>
        <ul className={styles.commentChildren}>
          {itemData.kids
            ? itemData.kids.map((id) => <Comments commentId={id} key={id} />)
            : null}
        </ul>
      </div>
    </div>
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
