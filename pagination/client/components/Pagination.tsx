import { PaginationType } from "../pages/api/hello";
import styles from "./Styles.module.css";

export const Pagination = (pagination: PaginationType) => {
  return (
    <div className={styles["pagination"]}>
      <ul>
        <li>
          {pagination?.currentPage > 1 ? (
            <a href={`/page/${pagination?.previousPage}`}>Previous</a>
          ) : (
            <span> Previous</span>
          )}
        </li>
        {pagination?.currentPage > 1 && (
          <li>
            <a href={`/page/1`}>1</a>
          </li>
        )}
        {pagination?.currentPage > 3 && (
          <li>
            <span>...</span>
          </li>
        )}
        {pagination?.currentPage > 2 && (
          <li>
            <a href={`/page/${pagination?.previousPage}`}>
              {pagination?.previousPage}
            </a>
          </li>
        )}
        <li>
          <span> {pagination?.currentPage}</span>
        </li>
        {pagination?.currentPage < pagination?.totalPages - 1 && (
          <li>
            <a href={`/page/${pagination?.nextPage}`}>{pagination?.nextPage}</a>
          </li>
        )}
        {pagination?.currentPage < pagination?.totalPages - 2 && (
          <li>
            <span>...</span>
          </li>
        )}
        {pagination?.currentPage < pagination?.totalPages && (
          <li>
            <a href={`/page/${pagination?.totalPages}`}>
              {pagination?.totalPages}
            </a>
          </li>
        )}
        <li>
          {pagination?.currentPage < pagination?.totalPages ? (
            <a href={`/page/${pagination?.nextPage}`}>Next</a>
          ) : (
            <span> Next</span>
          )}
        </li>
      </ul>
    </div>
  );
};
