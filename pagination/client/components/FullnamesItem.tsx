import styles from "./Styles.module.css";

interface FullnamesItemProps {
  id: number;
  first: string;
  last: string;
}

export const FullnamesItem = (props: FullnamesItemProps) => {
  return (
    <div className={styles["person-row"]} key={props.id}>
      <div className={styles["person-row-id"]}>{props.id}</div>
      <div className={styles["person-row-first"]}>{props.first}</div>
      <div className={styles["person-row-last"]}>{props.last}</div>
    </div>
  );
};
