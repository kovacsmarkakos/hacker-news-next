import styles from './Pagination.module.scss';

const Pagination = ({
  storiesPerPage,
  totalStories,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalStories / storiesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.newsListNav}>
      <a
        onClick={() =>
          setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)
        }
        className={currentPage < 2 ? styles.disabled : styles.enabled}
      >
        &lt; prev
      </a>
      <span>
        {currentPage}/{pageNumbers.length}
      </span>
      <a
        onClick={() =>
          setCurrentPage(
            currentPage < pageNumbers.length ? currentPage + 1 : currentPage
          )
        }
        className={
          currentPage === pageNumbers.length ? styles.disabled : styles.enabled
        }
      >
        next &gt;
      </a>
    </div>
  );
};

export default Pagination;
