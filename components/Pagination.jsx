import styles from './Pagination.module.css';

const Pagination = ({ storiesPerPage, totalStories, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalStories / storiesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.newsListNav}>
      <a className={styles.disabled}>&lt; prev</a>
      <span>1/25</span>
      <a href="/new/2">more &gt;</a>
    </div>
  );
};

export default Pagination;
