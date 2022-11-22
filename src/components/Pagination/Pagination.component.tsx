import styles from './Pagination.module.css';
import classNames from 'classnames';
import { v4 as uuid } from 'uuid';
import { createPaginationList } from '../../utilities/createPaginationList'; 

type Props = {
  totalCount: number;
  page: number;
  setPage: (curr: EventTarget & HTMLButtonElement) => void;
  prevPage: () => void;
  nextPage: () => void;
};

export const Pagination: React.FC<Props> = ({ 
  totalCount,
  page, 
  setPage, 
  prevPage, 
  nextPage
}) => {
  const paginationList = Array(totalCount).fill(null).map((_, i) => i + 1);

  return (
    <div className={styles.pagination}>
      <button 
        className={classNames(
          styles.button, 
          styles.button__left,
          {[styles.button__disabled]: page === 1})} 
        onClick={prevPage}
      >
        <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4974 1.51303C9.67041 0.686035 8.32959 0.686036 7.5026 1.51303L1.51299 7.50264C0.685994 8.32963 0.685994 9.67045 1.51299 10.4974L7.5026 16.4871C8.32959 17.314 9.67041 17.314 10.4974 16.4871C11.3244 15.6601 11.3244 14.3192 10.4974 13.4922L6.00519 9.00004L10.4974 4.50783C11.3244 3.68084 11.3244 2.34002 10.4974 1.51303Z"/>
        </svg>
      </button>
      <ul className={styles.list}>
        {createPaginationList(page, paginationList).map(item => (
          <li
            className="item list__item"
            key={uuid()}
          >
            <button
              type="button"
              className={classNames(
                [styles.pagination_item],
                { 
                  [styles.pagination_item__active]: item === page,
                  [styles.pagination_item__is_nan]: item === '...',

                 },
              )}
              onClick={({ currentTarget }) => item !== '...' && setPage(currentTarget)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      <button 
        className={classNames(
          styles.button, 
          styles.button__right,
          {[styles.button__disabled]: page === paginationList.length}
          )} 
        onClick={nextPage}
      >
        <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5026 1.51303C2.32959 0.686035 3.67041 0.686036 4.4974 1.51303L10.487 7.50264C11.314 8.32963 11.314 9.67045 10.487 10.4974L4.4974 16.4871C3.67041 17.314 2.32959 17.314 1.5026 16.4871C0.675605 15.6601 0.675607 14.3192 1.5026 13.4922L5.99481 9.00004L1.5026 4.50783C0.675604 3.68084 0.675605 2.34002 1.5026 1.51303Z"/>
        </svg>
      </button>
    </div>
  )
}