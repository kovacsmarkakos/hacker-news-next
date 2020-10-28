import styles from '../components/Comments.module.scss';
import mapTime from '../mappers/mapTime';

export const Comments = ({ itemData }) => {
  return (
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
      <div className={styles.commentsView}>
        <li className={styles.comment}>
          <div className={styles.by}></div>
          <div className={styles.text}>Work in progress...</div>
          <ul className={styles.commentChildren}>
            <p></p>
          </ul>
        </li>
      </div>
    </div>
  );
};
