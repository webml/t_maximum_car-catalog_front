import { LabelMark } from "./LabelMark";
import { useGetCarsCountQuery } from "../../redux";
import styles from "./SelectMark.module.css";

export const SelectMark = ({ setState, active }) => {
  const { data = [], isLoading } = useGetCarsCountQuery();

  if (isLoading) {
    return <h5>Loading...</h5>;
  } else {
    return (
      <div className={styles.container}>
        {data.data.map((mark) => {
          return (
            <LabelMark
              key={mark._id}
              mark={mark._id}
              carsCount={mark.count}
              setState={setState}
              active={active}
            />
          );
        })}
      </div>
    );
  }
};
