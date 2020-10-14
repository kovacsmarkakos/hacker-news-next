import styles from './Pagination.module.scss';

const Pagination = ({ storiesPerPage, totalStories, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalStories / storiesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.container}>
      <div className={styles.pagination}>
        <ul className={styles.pageList}>
          {pageNumbers.map((number) => (
            <li key={number} className={styles.pageItem}>
              <a
                onClick={() => paginate(number)}
                href="#"
                className={styles.pageLink}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
