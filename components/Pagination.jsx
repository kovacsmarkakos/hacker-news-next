import styles from './Pagination.module.scss';

const Pagination = ({
  storiesPerPage,
  totalStories,
  currentPage,
  setCurrentPage,
  setDirection,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalStories / storiesPerPage); i++) {
    pageNumbers.push(i);
  }

  function handleClick(direction) {
    if (direction === 'backward') {
      setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage);
      setDirection('backward');
    } else {
      setCurrentPage(
        currentPage < pageNumbers.length ? currentPage + 1 : currentPage
      );
      setDirection('forward');
    }
  }

  return (
    <div className={styles.newsListNav}>
      <a
        onClick={() => handleClick('backward')}
        className={currentPage < 2 ? styles.disabled : styles.enabled}
      >
        &lt; prev
      </a>
      <span>
        {currentPage}/{pageNumbers.length}
      </span>
      <a
        onClick={() => handleClick('forward')}
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
