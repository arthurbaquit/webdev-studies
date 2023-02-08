import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Fullnames } from "../pages";
import { GetFullnamesHandler, PaginationType } from "../pages/api/hello";
import { FullnamesItem } from "./FullnamesItem";
import { Pagination } from "./Pagination";
import styles from "./Styles.module.css";

export const FullnamesList = () => {
  const router = useRouter();
  const { page } = router.query;
  const [fullnames, setFullnames] = useState<Fullnames[]>([]);
  const [pagination, setPagination] = useState<PaginationType>({
    totalPages: 0,
    currentPage: 0,
    nextPage: 0,
    previousPage: 0,
  });

  useEffect(() => {
    GetFullnamesHandler(page).then((res) => {
      setFullnames(res.fullnames);
      setPagination(res.pagination);
    });
  }, [page]);

  return (
    <div className={styles.people}>
      <div className={styles.width}>
        <h1>People</h1>

        <div className={styles["people-table"]}>
          <div className={styles["person-row-head"]}>
            <div className={styles["person-row-id"]}>ID</div>
            <div className={styles["person-row-first"]}>First Name</div>
            <div className={styles["person-row-last"]}>Last Name</div>
          </div>
        </div>

        {fullnames &&
          fullnames.map((fn) => (
            <FullnamesItem
              key={fn.ID}
              id={fn.ID}
              first={fn.FirstName}
              last={fn.LastName}
            />
          ))}

        <Pagination
          totalPages={pagination.totalPages}
          currentPage={pagination.currentPage}
          nextPage={pagination.nextPage}
          previousPage={pagination.previousPage}
        />
      </div>
    </div>
  );
};
