import styles from './Comment.module.scss';

const Comment = () => {
  return (
    <li className={styles.comment}>
      <div className={styles.by}>comment.by comment.time</div>
      <div className={styles.text}>Comment text</div>
      <ul className={styles.commentChildren}>
        <comment v-for="id in comment.kids"></comment>
      </ul>
    </li>
  );
};

export default Comment;
