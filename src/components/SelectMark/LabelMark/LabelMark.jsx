import styles from "./LabelMark.module.css";

export const LabelMark = ({ mark, carsCount, setState, active }) => {
  return (
    <div className={styles.container}>
      <p
        className={`${styles.mark} ${
          mark === active ? styles.mark_active : ""
        }`}
        onClick={() => setState(mark)}
      >
        {mark}
      </p>
      <p className={styles.carsCount}>{carsCount}</p>
    </div>
  );
};
